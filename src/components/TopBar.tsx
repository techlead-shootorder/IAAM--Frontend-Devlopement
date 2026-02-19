'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import LazyImage from '@/components/common/LazyImage';
import { getTopMenu } from '@/lib/api';

interface MenuItem {
  label: string;
  href: string;
}

const DEFAULT_LEFT = [
  { label: 'The Association', href: '#' },
  { label: 'Society', href: '#' },
  { label: 'Councils', href: '#' },
  { label: 'Join IAAM', href: '#' },
];

const DEFAULT_RIGHT = [
  { label: 'Programs', href: '#' },
  { label: 'Charters', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact us', href: '#' },
];

export default function TopBar() {
  const [topLeft, setTopLeft] = useState<MenuItem[]>(DEFAULT_LEFT);
  const [topRight, setTopRight] = useState<MenuItem[]>(DEFAULT_RIGHT);

  useEffect(() => {
    getTopMenu()
      .then((res) => {
        if (res?.left?.length) setTopLeft(res.left);
        if (res?.right?.length) setTopRight(res.right);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="hidden md:block w-full bg-iaam-bg-gray">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[30px]">
        <div className="flex items-center justify-between h-[34px] text-[13px]">
          
          {/* Left */}
          <div className="flex items-center flex-wrap">
            <Link href="/" className="mr-3">
              <LazyImage
                src="/Frame 2.svg"
                alt="Home"
                width={18}
                height={18}
                priority
              />
            </Link>

            {topLeft.map((link, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && <span className="mx-2 text-gray-400">|</span>}
                <Link
                  href={link.href}
                  className="font-semibold text-iaam-text-dark hover:text-iaam-primary transition"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center">
            {topRight.map((link, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && <span className="mx-2 text-gray-400">|</span>}
                <Link
                  href={link.href}
                  className="font-semibold text-iaam-text-dark hover:text-iaam-primary transition"
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
