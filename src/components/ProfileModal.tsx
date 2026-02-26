'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

/* ===============================
   TYPES
================================= */

interface ProfileFormData {
  FirstName: string;
  LastName: string;
  Phone: string;
  Biography: string;
}

interface PasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface Props {
  onClose: () => void;
}

/* ===============================
   CONSTANTS
================================= */

const STRAPI_URL = 'https://admin.iaamonline.org';

/* ===============================
   HELPERS
================================= */

function getBiographyText(bio: any[]): string {
  if (!Array.isArray(bio)) return '';
  return bio
    .map((block: any) =>
      block?.children?.map((c: any) => c?.text || '').join('') || ''
    )
    .join('\n');
}

function getInitials(user: {
  FirstName?: string;
  LastName?: string;
  username?: string;
}): string {
  if (user.FirstName && user.LastName)
    return (user.FirstName[0] + user.LastName[0]).toUpperCase();
  if (user.FirstName) return user.FirstName[0].toUpperCase();
  return (user.username?.[0] || 'U').toUpperCase();
}

/* ===============================
   SMALL SUB-COMPONENTS
================================= */

function MsgBox({ msg }: { msg: { type: 'success' | 'error'; text: string } | null }) {
  if (!msg) return null;
  return (
    <div
      className={`text-sm px-4 py-3 rounded-xl flex items-start gap-2 ${
        msg.type === 'success'
          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
          : 'bg-red-50 text-red-700 border border-red-100'
      }`}
    >
      <span className="flex-shrink-0">{msg.type === 'success' ? '✓' : '✕'}</span>
      {msg.text}
    </div>
  );
}

function ReadField({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-sm text-gray-800 bg-slate-50 rounded-xl px-3 py-2.5 border border-transparent">
        {value || <span className="text-gray-300 italic">Not set</span>}
      </p>
    </div>
  );
}

/* ===============================
   MAIN COMPONENT
================================= */

export default function ProfileModal({ onClose }: Props) {
  const { user, jwt, logout, updateUser } = useAuth();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'account'>('profile');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [profileSaving, setProfileSaving] = useState(false);
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [profileMsg, setProfileMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [passwordMsg, setPasswordMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  /* Animate in on mount */
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 10);
    return () => clearTimeout(t);
  }, []);

  /* Close with animation */
  const handleClose = () => {
    setOpen(false);
    setTimeout(onClose, 300);
  };

  /* Lock body scroll while modal is open */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  /* ---- Forms ---- */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetProfile,
  } = useForm<ProfileFormData>({
    defaultValues: {
      FirstName: user?.FirstName || '',
      LastName: user?.LastName || '',
      Phone: user?.Phone || '',
      Biography: getBiographyText(user?.Biography || []),
    },
  });

  const {
    register: regPwd,
    handleSubmit: handlePwdSubmit,
    formState: { errors: pwdErrors },
    watch,
    reset: resetPassword,
  } = useForm<PasswordFormData>();

  const newPwdValue = watch('newPassword');

  /* ===============================
     HANDLERS
  ================================= */

  const handleProfileSave = async (data: ProfileFormData) => {
    if (!user || !jwt) return;
    setProfileSaving(true);
    setProfileMsg(null);
    try {
      const res = await fetch(`${STRAPI_URL}/api/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          FirstName: data.FirstName,
          LastName: data.LastName,
          Phone: data.Phone,
          Biography: [{ type: 'paragraph', children: [{ type: 'text', text: data.Biography }] }],
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error?.message || 'Failed to update profile.');
      updateUser({ FirstName: data.FirstName, LastName: data.LastName, Phone: data.Phone, Biography: json.Biography });
      setProfileMsg({ type: 'success', text: 'Profile updated successfully!' });
      setIsEditingProfile(false);
    } catch (e: any) {
      setProfileMsg({ type: 'error', text: e.message });
    } finally {
      setProfileSaving(false);
    }
  };

  const handlePasswordSave = async (data: PasswordFormData) => {
    if (!jwt) return;
    setPasswordSaving(true);
    setPasswordMsg(null);
    try {
      const res = await fetch(`${STRAPI_URL}/api/auth/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwt}` },
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          password: data.newPassword,
          passwordConfirmation: data.confirmPassword,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error?.message || 'Failed to change password.');
      setPasswordMsg({ type: 'success', text: 'Password changed successfully!' });
      setIsChangingPassword(false);
      resetPassword();
    } catch (e: any) {
      setPasswordMsg({ type: 'error', text: e.message });
    } finally {
      setPasswordSaving(false);
    }
  };

  const handleLogout = () => {
    logout();
    handleClose();
    router.push('/');
  };

  const handleCancelEdit = () => {
    setIsEditingProfile(false);
    setProfileMsg(null);
    resetProfile({
      FirstName: user?.FirstName || '',
      LastName: user?.LastName || '',
      Phone: user?.Phone || '',
      Biography: getBiographyText(user?.Biography || []),
    });
  };

  /* ---- Styles ---- */
  const inputClass =
    'w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af] transition placeholder:text-gray-300';
  const labelClass = 'block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5';
  const errorClass = 'text-red-500 text-xs mt-1';

  const tabs = [
    { id: 'profile' as const, label: 'Profile' },
    { id: 'security' as const, label: 'Security' },
    { id: 'account' as const, label: 'Account' },
  ];

  const displayName =
    user?.FirstName || user?.LastName
      ? `${user?.FirstName || ''} ${user?.LastName || ''}`.trim()
      : user?.username || '';

  if (!user) return null;

  /* ===============================
     RENDER
  ================================= */

  return (
    <>
      {/* ---- Backdrop ---- */}
      <div
        className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0 }}
        onClick={handleClose}
      />

      {/* ---- Drawer panel ---- */}
      <div
        className="fixed top-0 right-0 z-[9999] h-full w-full max-w-md bg-[#f0f4ff] shadow-2xl flex flex-col transition-transform duration-300 ease-out"
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >

        {/* ══════════ HEADER ══════════ */}
        <div className="relative flex-shrink-0 overflow-hidden">
          {/* Blue banner with crystal pattern */}
          <div className="h-32 bg-[#1e40af] relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 400 128" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,128 56,0 112,128" fill="white" />
              <polygon points="56,128 112,0 168,128" fill="white" opacity="0.5" />
              <polygon points="112,128 168,0 224,128" fill="white" />
              <polygon points="168,128 224,0 280,128" fill="white" opacity="0.5" />
              <polygon points="224,128 280,0 336,128" fill="white" />
              <polygon points="280,128 336,0 400,128" fill="white" opacity="0.5" />
              <polygon points="28,0 84,128 140,0" fill="white" opacity="0.25" />
              <polygon points="140,0 196,128 252,0" fill="white" opacity="0.25" />
              <polygon points="252,0 308,128 364,0" fill="white" opacity="0.25" />
            </svg>
            {/* Gold accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400" />
            {/* IAAM label */}
            <div className="absolute top-4 left-6">
              <span className="text-[10px] font-black tracking-[0.25em] text-white/50 uppercase">
                IAAM Member Portal
              </span>
            </div>
            {/* Close button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-3 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Avatar row — overlaps banner */}
          <div className="px-6 py-10 pb-4 bg-white border-b border-blue-100">
            <div className="flex items-end gap-4 -mt-8 mb-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e40af] to-[#2563eb] border-4 border-white shadow-lg flex items-center justify-center text-white text-xl font-black flex-shrink-0">
                {getInitials(user)}
              </div>
              <div className="pb-1 min-w-0">
                <h2 className="text-base font-black text-gray-900 truncate">{displayName}</h2>
                <p className="text-xs text-gray-400">@{user.username}</p>
              </div>
              <div className="pb-1 ml-auto flex-shrink-0">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </span>
              </div>
            </div>

            {/* Quick info chips */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg text-[11px] font-medium">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {user.email}
              </span>
              {user.Phone && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg text-[11px] font-medium">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {user.Phone}
                </span>
              )}
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex gap-0 bg-white border-b border-blue-100 px-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => { setActiveTab(tab.id); setIsEditingProfile(false); setIsChangingPassword(false); }}
                className={`flex-1 py-3 text-xs font-bold transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'text-[#1e40af] border-[#1e40af]'
                    : 'text-gray-400 border-transparent hover:text-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ══════════ SCROLLABLE BODY ══════════ */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-5 space-y-4">

            {/* ══════════ TAB: PROFILE ══════════ */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-blue-50">
                  <h3 className="text-sm font-bold text-gray-800">Profile Information</h3>
                  {!isEditingProfile && (
                    <button
                      type="button"
                      onClick={() => { setIsEditingProfile(true); setProfileMsg(null); }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-[#1e40af] rounded-lg text-xs font-bold hover:bg-blue-100 transition"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      Edit
                    </button>
                  )}
                </div>

                <div className="p-5">
                  {!isEditingProfile ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <ReadField label="First Name" value={user.FirstName} />
                        <ReadField label="Last Name" value={user.LastName} />
                      </div>
                      <ReadField label="Phone" value={user.Phone} />
                      <div>
                        <p className={labelClass}>Biography</p>
                        <p className="text-sm text-gray-700 bg-slate-50 rounded-xl px-3 py-2.5 min-h-[60px] leading-relaxed whitespace-pre-wrap">
                          {getBiographyText(user.Biography || []) || (
                            <span className="text-gray-300 italic">Not set</span>
                          )}
                        </p>
                      </div>
                      <MsgBox msg={profileMsg} />
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(handleProfileSave)} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className={labelClass}>First Name</label>
                          <input {...register('FirstName')} type="text" className={inputClass} placeholder="John" />
                        </div>
                        <div>
                          <label className={labelClass}>Last Name</label>
                          <input {...register('LastName')} type="text" className={inputClass} placeholder="Doe" />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Phone</label>
                        <input {...register('Phone')} type="tel" className={inputClass} placeholder="+1 (555) 123-4567" />
                      </div>
                      <div>
                        <label className={labelClass}>Biography</label>
                        <textarea
                          {...register('Biography', { minLength: { value: 10, message: 'At least 10 characters' } })}
                          rows={4}
                          className={`${inputClass} resize-none`}
                          placeholder="Tell us about yourself…"
                        />
                        {errors.Biography && <p className={errorClass}>{errors.Biography.message}</p>}
                      </div>
                      <MsgBox msg={profileMsg} />
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          disabled={profileSaving}
                          className="flex-1 py-2.5 bg-[#1e40af] text-white rounded-xl text-sm font-bold hover:bg-[#1c3e9c] transition disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          {profileSaving ? (
                            <>
                              <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                              </svg>
                              Saving…
                            </>
                          ) : 'Save Changes'}
                        </button>
                        <button type="button" onClick={handleCancelEdit} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-50 transition">
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}

            {/* ══════════ TAB: SECURITY ══════════ */}
            {activeTab === 'security' && (
              <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
                <div className="px-5 py-3.5 border-b border-blue-50">
                  <h3 className="text-sm font-bold text-gray-800">Password & Security</h3>
                </div>
                <div className="p-5">
                  {!isChangingPassword ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                        <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-emerald-700">Account Secured</p>
                          <p className="text-[11px] text-emerald-600">Your password is set and active.</p>
                        </div>
                      </div>
                      <MsgBox msg={passwordMsg} />
                      <button
                        type="button"
                        onClick={() => { setIsChangingPassword(true); setPasswordMsg(null); }}
                        className="flex items-center gap-2 px-4 py-2.5 border-2 border-[#1e40af] text-[#1e40af] rounded-xl text-sm font-bold hover:bg-blue-50 transition w-full justify-center"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                        Change Password
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handlePwdSubmit(handlePasswordSave)} className="space-y-4">
                      <div>
                        <label className={labelClass}>Current Password</label>
                        <input {...regPwd('currentPassword', { required: 'Required' })} type="password" className={inputClass} placeholder="Current password" />
                        {pwdErrors.currentPassword && <p className={errorClass}>{pwdErrors.currentPassword.message}</p>}
                      </div>
                      <div className="border-t border-dashed border-gray-100" />
                      <div>
                        <label className={labelClass}>New Password</label>
                        <input
                          {...regPwd('newPassword', { required: 'Required', minLength: { value: 8, message: 'Min. 8 characters' } })}
                          type="password" className={inputClass} placeholder="Min. 8 characters"
                        />
                        {pwdErrors.newPassword && <p className={errorClass}>{pwdErrors.newPassword.message}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Confirm New Password</label>
                        <input
                          {...regPwd('confirmPassword', { required: 'Required', validate: (v) => v === newPwdValue || 'Passwords do not match' })}
                          type="password" className={inputClass} placeholder="Re-enter new password"
                        />
                        {pwdErrors.confirmPassword && <p className={errorClass}>{pwdErrors.confirmPassword.message}</p>}
                      </div>
                      <MsgBox msg={passwordMsg} />
                      <div className="flex gap-2">
                        <button type="submit" disabled={passwordSaving} className="flex-1 py-2.5 bg-[#1e40af] text-white rounded-xl text-sm font-bold hover:bg-[#1c3e9c] transition disabled:opacity-50 flex items-center justify-center gap-2">
                          {passwordSaving ? (
                            <>
                              <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                              </svg>
                              Updating…
                            </>
                          ) : 'Update Password'}
                        </button>
                        <button type="button" onClick={() => { setIsChangingPassword(false); setPasswordMsg(null); resetPassword(); }} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-50 transition">
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}

            {/* ══════════ TAB: ACCOUNT ══════════ */}
            {activeTab === 'account' && (
              <div className="space-y-4">
                {/* Account details */}
                <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
                  <div className="px-5 py-3.5 border-b border-blue-50">
                    <h3 className="text-sm font-bold text-gray-800">Account Details</h3>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <ReadField label="Username" value={`@${user.username}`} />
                      <ReadField label="Member ID" value={`#${user.id}`} />
                    </div>
                    <ReadField label="Email Address" value={user.email} />
                    <div className="flex items-start gap-2.5 p-3 bg-amber-50 rounded-xl border border-amber-100">
                      <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-[11px] text-amber-700 leading-relaxed">
                        Username and email can only be changed by contacting IAAM support.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sign Out */}
                <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">
                  <div className="px-5 py-3.5 border-b border-blue-50">
                    <h3 className="text-sm font-bold text-gray-800">Session</h3>
                  </div>
                  <div className="p-5">
                    {!showLogoutConfirm ? (
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Sign out</p>
                          <p className="text-xs text-gray-400 mt-0.5">End your current session.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setShowLogoutConfirm(true)}
                          className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-xl text-sm font-bold hover:bg-red-100 transition"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    ) : (
                      <div className="bg-red-50 border border-red-100 rounded-xl p-4 space-y-3">
                        <p className="text-sm font-bold text-red-700">Are you sure?</p>
                        <p className="text-xs text-red-500">You'll be signed out and redirected to the home page.</p>
                        <div className="flex gap-2">
                          <button type="button" onClick={handleLogout} className="flex-1 py-2.5 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 transition">
                            Yes, Sign Out
                          </button>
                          <button type="button" onClick={() => setShowLogoutConfirm(false)} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-white transition">
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}