'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Home, ChevronDown, Search, Menu, X } from 'lucide-react'

import MembershipDropdown from "@/components/MembershipDropdown"

const topNavLinks = [
  { label: 'The Association', href: '/the-association' },
  { label: 'Society', href: 'societies' },
  { label: 'Councils', href: 'councils' },
  { label: 'Join IAAM', href: '#' },
]

const topNavRightLinks = [
  { label: 'Programs', href: 'programs' },
  { label: 'Charters', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const mainNavLinks = [
  { label: 'Membership', href: '#', hasDropdown: true },
  { label: 'Meetings & Events', href: '#', hasDropdown: true },
  { label: 'Innovation & Sustainability', href: '#', hasDropdown: true },
  { label: 'Journals & Proceedings', href: '#', hasDropdown: true },
  { label: 'Awards & Recognitions', href: '#', hasDropdown: true },
  { label: 'Discover IAAM', href: '#', hasDropdown: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-[999]">

      {/* ===== TOP BAR ===== */}
      <div className="hidden md:block text-[hsl(197,63%,22%)] bg-gray-300 font-semibold">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-xs">

            {/* LEFT */}
            <div className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-2">
                <Home className="h-3 w-3 text-black" />
              </Link>

              {topNavLinks.map((link, index) => (
                <span key={link.label} className="flex items-center">
                  {index > 0 && <span className="mx-1 opacity-50">|</span>}
                  <Link href={link.href} className="px-2 hover:underline">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>

            {/* RIGHT */}
            <div className="hidden md:flex items-center gap-2">
              {topNavRightLinks.map((link, index) => (
                <span key={link.label} className="flex items-center">
                  {index > 0 && <span className="mx-1 opacity-50">|</span>}
                  <Link href={link.href} className="px-2 hover:underline">
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ===== LOGO + SEARCH ===== */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">

            <Link href="/">
              <Image
                src="/iaam-logo.png"
                alt="IAAM"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            <div className="flex items-center gap-2 text-black">

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>

              {/* SEARCH AREA */}
              <div className="hidden md:flex items-center gap-4">
                <Link
                  href="#"
                  className="border border-black px-4 py-2 text-sm text-black rounded hover:bg-gray-100"
                >
                  Web Talks
                </Link>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-56 px-4 py-2 pr-10 border rounded text-sm text-gray-400"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <nav className="bg-[hsl(197,63%,22%)] hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-white text-sm font-bold">

            {mainNavLinks.map((link) =>
              link.label === "Membership" ? (

                /* ===== REAL DROPDOWN ONLY HERE ===== */
                <MembershipDropdown key="membership" />

              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 py-3 px-2 hover:bg-white/10"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </Link>
              )
            )}

          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg z-[999]">

          <div className="container mx-auto px-4 py-4 space-y-4">

            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded text-sm"
            />

            <div className="space-y-2">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 font-medium hover:bg-gray-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t pt-3 space-y-2 text-sm">
              {[...topNavLinks, ...topNavRightLinks].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

          </div>
        </div>
      )}

    </header>
  )
}
