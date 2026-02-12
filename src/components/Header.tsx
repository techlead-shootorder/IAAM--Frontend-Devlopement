'use client';

import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface HeaderData {
  logo?: {
    url: string;
    alternativeText?: string;
  };
  title?: string;
  tagline?: string;
  webTalksLink?: string;
}

interface HeaderProps {
  onMobileMenuToggle?: () => void;
  mobileMenuOpen?: boolean;
}

export default function Header({ onMobileMenuToggle, mobileMenuOpen = false }: HeaderProps) {
  const [localMobileMenuOpen, setLocalMobileMenuOpen] = useState(false);
  
  // Use default header data instead of API call to avoid 404 errors
  const headerData = {
    // title: "International Association of Advanced Materials",
    tagline: "Integrating materials knowledge to achieve a sustainable planet.",
    webTalksLink: "#",
    logo: { url: "1704818354IAAM-Logo-SVG 1.svg" }
  };
  
  const menuOpen = mobileMenuOpen !== undefined ? mobileMenuOpen : localMobileMenuOpen;
  const toggleMenu = onMobileMenuToggle ? onMobileMenuToggle : () => setLocalMobileMenuOpen(!localMobileMenuOpen);

  return (
    <header className="w-full bg-white border-b border-border">
      <div className="max-w-[1440px] mx-auto px-[30px] flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="w-[140px] h-[140px] rounded-lg flex items-center justify-center flex-shrink-0">
            <Image
              src={headerData.logo?.url || "1704818354IAAM-Logo-SVG 1.svg"}
              alt="IAAM Logo"
              width={120}
              height={120}
              className="w-[120px] h-[120px] object-contain"
            />
          </div>
          <div className="min-w-0">
            <h1 className="font-montserrat font-bold text-[20px] lg:text-[28px] xl:text-[32px] text-iaam-primary leading-tight">
              {/* {headerData.title} */}
              International Association <br />of Advanced Materials
              <span className="text-[20px] lg:text-[24px] xl:text-[28px]">®</span>
            </h1>
            <p className="font-roboto font-semibold text-[14px] lg:text-[18px] text-iaam-text-body mt-1 hidden sm:block">
              {headerData.tagline}
            </p>
          </div>
        </div>

        {/* Right side: Web Talks + Search */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0 ml-4">
          <a
            href={headerData.webTalksLink || "#"}
            className="font-roboto font-medium text-[16px] text-iaam-primary border border-iaam-primary px-5 py-1.5 rounded hover:bg-iaam-primary hover:text-white transition-colors"
          >
            Web Talks
          </a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="font-roboto text-[14px] border border-border rounded px-3 py-2 pr-9 w-[200px] focus:outline-none focus:ring-1 focus:ring-iaam-primary"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden ml-4 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}























































// 'use client'

// import { useEffect, useState } from 'react'
// import LazyImage from "@/components/common/LazyImage";
// import Link from 'next/link'
// import { Home, Menu, X, Search } from 'lucide-react'
// import { getMainMenu, getTopMenu } from '@/lib/api'
// import MainDropdown from './MainDropdown'

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [mainNav, setMainNav] = useState<any[]>([])
//   const [topLeft, setTopLeft] = useState<any[]>([])
//   const [topRight, setTopRight] = useState<any[]>([])

//   useEffect(() => {
//     getMainMenu().then((res) => {
//       setMainNav(res || [])
//     })

//     getTopMenu().then((res) => {
//       setTopLeft(res.left || [])
//       setTopRight(res.right || [])
//     })
//   }, [])

//   return (
//     <header className="w-full sticky top-0 z-[999] bg-white">

//       {/* ================= TOP BAR ================= */}
//       <div className="hidden md:block bg-gray-300 text-[hsl(197,63%,22%)] h-8 font-semibold text-xs">
//         <div className="container mx-auto px-4 py-2 flex justify-between">

//           {/* LEFT */}
//           <div className="flex items-center gap-1">
//             <Link href="/" className="px-2">
//               <Home className="h-3 w-3 text-black" />
//             </Link>

//             {topLeft.map((l, i) => (
//               <span key={`top-left-${l.label}-${i}`} className="flex items-center">
//                 {i > 0 && <span className="mx-1 opacity-50">|</span>}
//                 <Link href={l.href} className="px-2 hover:underline">
//                   {l.label}
//                 </Link>
//               </span>
//             ))}
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-2">
//             {topRight.map((l, i) => (
//               <span key={`top-right-${l.label}-${i}`} className="flex items-center">
//                 {i > 0 && <span className="mx-1 opacity-50">|</span>}
//                 <Link href={l.href} className="px-2 hover:underline">
//                   {l.label}
//                 </Link>
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= LOGO + SEARCH ================= */}
//       <div className="border-b bg-white">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">

//           {/* LOGO */}
//           <Link href="/">
//             <LazyImage
//               src="/iaam-logo.png"
//               alt="IAAM"
//               width={180}
//               height={60}
//               className="h-12 w-auto"
//               priority
//             />
//           </Link>

//           {/* RIGHT */}
//           <div className="flex items-center gap-3">

//             {/* WEB TALKS */}
//             <Link
//               href="#"
//               className="hidden md:inline-flex border border-black px-4 py-2 text-sm rounded hover:bg-gray-100 text-black"
//             >
//               Web Talks
//             </Link>

//             {/* SEARCH */}
//             <div className="hidden md:block relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-72 px-4 py-2 pr-10 border rounded text-sm text-gray-400"
//               />
//               <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
//             </div>

//             {/* MOBILE BUTTON */}
//             <button
//               className="md:hidden p-2 text-black"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= MAIN NAV ================= */}
//       <nav className="hidden md:block bg-[hsl(197,63%,22%)] text-white text-sm font-bold">
//         <div className="container mx-auto px-4 flex justify-center gap-4 h-[44px] items-center">
//           {mainNav.map((section, index) => (
//             <MainDropdown
//               key={section.Identifier || `nav-${index}`}
//               section={section}
//             />
//           ))}
//         </div>
//       </nav>

//       {/* ================= MOBILE MENU ================= */}
//       {mobileMenuOpen && (
//         <div className="md:hidden absolute left-0 right-0 top-full text-black bg-white shadow-lg z-[999]">
//           <div className="container mx-auto px-4 py-4 space-y-4">

//             {/* SEARCH */}
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full px-4 py-2 border rounded text-sm"
//             />

//             {/* MAIN NAV */}
//             <div className="space-y-2">
//               {mainNav.map((s, index) => (
//                 <Link
//                   key={s.Identifier || `mobile-nav-${index}`}
//                   href={s.slug ? `/${s.slug}` : '#'}
//                   className="block px-3 py-2 font-semibold hover:bg-gray-100"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {s.Title}
//                 </Link>
//               ))}
//             </div>

//             {/* TOP LINKS */}
//             <div className="border-t pt-3 space-y-2 text-sm">
//               {[...topLeft, ...topRight].map((l, i) => (
//                 <Link
//                   key={`mobile-${l.label}-${i}`}
//                   href={l.href}
//                   className="block px-3 py-1"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {l.label}
//                 </Link>
//               ))}
//             </div>

//           </div>
//         </div>
//       )}
//     </header>
//   )
// }