'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LazyImage from '@/components/common/LazyImage';
import BecomeMemberForm from '@/components/Membership/BecomeMemberForm';
import { useAuth } from '@/context/AuthContext';

/* ===============================
   TYPES
================================= */

interface MenuItem {
  label: string;
  href: string;
}

interface StrapiMenuItem {
  LinkLabel?: string;
  LinkURL?: string;
  Position?: string;
}

/* ===============================
   DEFAULT FALLBACK MENUS
================================= */

const DEFAULT_LEFT: MenuItem[] = [
  { label: 'The Association', href: '#' },
  { label: 'Society', href: '#' },
  { label: 'Councils', href: '#' },
  { label: 'Join IAAM', href: '#' },
];

const DEFAULT_RIGHT: MenuItem[] = [
  { label: 'Programs', href: '#' },
  { label: 'Charters', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact Us', href: '#' },
];

const STRAPI_URL = 'https://admin.iaamonline.org';

/* ===============================
   HELPERS
================================= */

function getProfileImageUrl(profileImage: {
  id?: number;
  name?: string;
  url?: string;
  formats?: {
    thumbnail?: {
      url?: string;
    };
  };
} | string | null | undefined): string | null {
  if (!profileImage) return null;

  // If it's a string, treat it as the URL directly
  if (typeof profileImage === 'string') {
    return profileImage.startsWith('http') ? profileImage : `${STRAPI_URL}${profileImage}`;
  }

  // If it's an object, extract the URL
  const url =
    profileImage?.formats?.thumbnail?.url ||
    profileImage?.url ||
    null;

  if (!url) return null;
  return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
}

/* ===============================
   API FUNCTION
================================= */

async function getTopMenu(): Promise<{ left: MenuItem[]; right: MenuItem[] }> {
  try {
    const res = await fetch(
      'https://admin.iaamonline.org/api/top-menus?pagination[pageSize]=100',
      { cache: 'no-store' }
    );

    if (!res.ok) {
      console.error('TopMenu API failed:', res.status);
      return { left: [], right: [] };
    }

    const json = await res.json();
    const left: MenuItem[] = [];
    const right: MenuItem[] = [];

    (json?.data || []).forEach((item: StrapiMenuItem) => {
      const slug = item?.LinkURL?.trim();
      const link: MenuItem = {
        label: item?.LinkLabel || '',
        href: slug ? `/${slug.replace(/^\/+/, '')}` : '#',
      };
      if (item?.Position === 'Left') left.push(link);
      else if (item?.Position === 'Right') right.push(link);
    });

    return { left, right };
  } catch (error) {
    console.error('TopMenu fetch error:', error);
    return { left: [], right: [] };
  }
}

/* ===============================
   COMPONENT
================================= */

export default function TopBar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [topLeft, setTopLeft] = useState<MenuItem[]>(DEFAULT_LEFT);
  const [topRight, setTopRight] = useState<MenuItem[]>(DEFAULT_RIGHT);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

  /* ---- Load menus ---- */
  useEffect(() => {
    getTopMenu()
      .then((res) => {
        if (res?.left?.length) setTopLeft(res.left);
        if (res?.right?.length) setTopRight(res.right);
      })
      .catch(console.error);
  }, []);

  /* ---- Close dropdown when clicking outside both button and panel ---- */
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideButton = buttonRef.current?.contains(target);
      const insideDropdown = dropdownRef.current?.contains(target);
      if (!insideButton && !insideDropdown) setDropdownOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [dropdownOpen]);

  /* ---- Open profile dropdown at correct position ---- */
  const handleProfileClick = () => {
    if (!dropdownOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 6,
        left: rect.left + rect.width / 2,
      });
    }
    setDropdownOpen((v) => !v);
  };

  /* ---- Open auth modal ---- */
  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  /* ---- Go to profile page ---- */
  const handleOpenProfile = () => {
    setDropdownOpen(false);
    router.push('/profile');
  };

  /* ---- Logout ---- */
  const handleLogout = () => {
    setDropdownOpen(false);
    logout();
    router.push('/');
  };

  /* ---- Display helpers ---- */
  const displayName = user?.FirstName
    ? `${user.FirstName}${user.LastName ? ' ' + user.LastName : ''}`.trim()
    : user?.username || '';

  const initials = user
    ? user.FirstName && user.LastName
      ? (user.FirstName[0] + user.LastName[0]).toUpperCase()
      : (user.FirstName?.[0] || user.username?.[0] || 'U').toUpperCase()
    : '';

  const profileImageUrl = getProfileImageUrl(user?.ProfileImage);

  /* ===============================
     RENDER
  ================================= */

  return (
    <>
      <div className="hidden md:block w-full bg-iaam-bg-gray">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[30px]">

          {/* Simple flex: left nav | spacer | right nav + auth */}
          <div className="flex items-center justify-between h-[34px] text-[13px]">

            {/* ════════ LEFT NAV ════════ */}
            <div className="flex items-center">
              <Link href="/" className="mr-3 flex-shrink-0">
                <LazyImage src="/Frame 2.svg" alt="Home" width={18} height={18} priority />
              </Link>
              {topLeft.map((link, index) => (
                <span key={link.label + index} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-gray-400">|</span>}
                  <Link
                    href={link.href}
                    className="font-semibold text-iaam-text-dark hover:text-iaam-primary transition duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>

            {/* ════════ RIGHT NAV + AUTH ════════ */}
            <div className="flex items-center">

              {/* Right nav links */}
              {topRight.map((link, index) => (
                <span key={link.label + index} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-gray-400">|</span>}
                  <Link
                    href={link.href}
                    className="font-semibold text-iaam-text-dark hover:text-iaam-primary transition duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}

              {/* Separator between nav links and auth */}
              <span className="mx-2 text-gray-400">|</span>

              {/* Auth — profile pill or login/signup */}
              {user ? (
                <button
                  ref={buttonRef}
                  type="button"
                  onClick={handleProfileClick}
                  className="flex items-center gap-1.5 px-2 py-0.5 bg-[#1e40af] text-white rounded-full text-xs font-semibold hover:bg-[#1c3e9c] transition"
                >
                  {/* Avatar — image or initials */}
                  <span className="relative w-5 h-5 rounded-full overflow-hidden bg-blue-200 text-[#1e40af] flex items-center justify-center text-[10px] font-black flex-shrink-0">
                    {profileImageUrl ? (
                      <LazyImage
                        src={profileImageUrl}
                        alt={displayName}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      initials
                    )}
                  </span>
                  <span className="max-w-[100px] truncate">{displayName}</span>
                  <svg
                    className={`w-3 h-3 flex-shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => openAuthModal('login')}
                    className="px-3 py-1 text-xs font-semibold text-iaam-text-dark hover:text-iaam-primary transition"
                  >
                    Login
                  </button>
                  <span className="text-gray-400 text-xs select-none">|</span>
                  <button
                    type="button"
                    onClick={() => openAuthModal('register')}
                    className="px-3 py-1 text-xs font-semibold bg-[#1e40af] text-white rounded-full hover:bg-[#1c3e9c] transition"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ════════ PROFILE DROPDOWN — fixed position, escapes overflow ════════ */}
      {dropdownOpen && user && (
        <div
          ref={dropdownRef}
          className="fixed z-[9999] w-52 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden"
          style={{
            top: dropdownPos.top,
            left: dropdownPos.left,
            transform: 'translateX(-60%)',
          }}
        >
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-[#1e40af] to-[#2563eb] text-white">
            <div className="flex items-center gap-2.5">
              {/* Avatar */}
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-blue-200 text-[#1e40af] flex items-center justify-center text-xs font-black flex-shrink-0 border-2 border-white/30">
                {profileImageUrl ? (
                  <LazyImage
                    src={profileImageUrl}
                    alt={displayName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  initials
                )}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold truncate">{displayName}</p>
                <p className="text-[10px] text-blue-200 truncate">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="py-1">
            <button
              type="button"
              onClick={handleOpenProfile}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-[#1e40af] transition"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              My Profile
            </button>

            <div className="border-t border-gray-100" />

            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-red-600 hover:bg-red-50 transition"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      )}

      {/* ════════ AUTH MODAL ════════ */}
      {authModalOpen && (
        <BecomeMemberForm
          mode={authModalMode}
          onModeChange={setAuthModalMode}
          onClose={() => setAuthModalOpen(false)}
        />
      )}
    </>
  );
}