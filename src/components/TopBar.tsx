'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import LazyImage from '@/components/common/LazyImage';

/* ===============================
   TYPES
================================= */

interface MenuItem {
  label: string;
  href: string;
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

/* ===============================
   API FUNCTION
================================= */

async function getTopMenu(): Promise<{
  left: MenuItem[];
  right: MenuItem[];
}> {
  try {
    const res = await fetch(
      'https://admin.iaamonline.org/api/top-menus?pagination[pageSize]=100',
      {
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      console.error('TopMenu API failed:', res.status);
      return { left: [], right: [] };
    }

    const json = await res.json();

    const left: MenuItem[] = [];
    const right: MenuItem[] = [];

    (json?.data || []).forEach((item: any) => {
      const slug = item?.LinkURL?.trim();

      const link: MenuItem = {
        label: item?.LinkLabel || '',
        href: slug ? `/${slug.replace(/^\/+/, '')}` : '#',
      };

      if (item?.Position === 'Left') {
        left.push(link);
      } else if (item?.Position === 'Right') {
        right.push(link);
      }
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
  const [topLeft, setTopLeft] = useState<MenuItem[]>(DEFAULT_LEFT);
  const [topRight, setTopRight] = useState<MenuItem[]>(DEFAULT_RIGHT);

  useEffect(() => {
    getTopMenu()
      .then((res) => {
        if (res?.left?.length) setTopLeft(res.left);
        if (res?.right?.length) setTopRight(res.right);
      })
      .catch((err) => {
        console.error('TopBar fetch error:', err);
      });
  }, []);

  return (
    <div className="hidden md:block w-full bg-iaam-bg-gray">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[30px]">
        <div className="flex items-center justify-between h-[34px] text-[13px]">
          
          {/* LEFT SECTION */}
          <div className="flex items-center flex-wrap">
            
            {/* Home Icon */}
            <Link href="/" className="mr-3">
              <LazyImage
                src="/Frame 2.svg"
                alt="Home"
                width={18}
                height={18}
                priority
              />
            </Link>

            {/* Dynamic Left Links */}
            {topLeft.map((link, index) => (
              <span key={link.label + index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-gray-400">|</span>
                )}
                <Link
                  href={link.href}
                  className="font-semibold text-iaam-text-dark hover:text-iaam-primary transition duration-200"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center">
            {topRight.map((link, index) => (
              <span key={link.label + index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-gray-400">|</span>
                )}
                <Link
                  href={link.href}
                  className="font-semibold text-iaam-text-dark hover:text-iaam-primary transition duration-200"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}