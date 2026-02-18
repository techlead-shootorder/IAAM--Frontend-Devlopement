'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ChevronLeft, User, Calendar, Eye } from 'lucide-react';
import Footer from '@/components/FooterNew';
import Breadcrumb from '@/components/common/Breadcrumb';

/* ────────────────────────────────────────────────────────────────
   Video Card Component - Now with Link navigation
──────────────────────────────────────────────────────────────── */
const CATEGORIES = [
  'All',
  'Research Highlights',
  'Keynote Lectures',
  'Panel Discussions',
  'Workshops',
  'Member Spotlights',
  'Conferences',
];

interface VideoCardProps {
  thumbnail: string;
  duration?: string;
  title: string;
  author: string;
  date: string;
  views: string;
  category: string;
  slug: string; // ← IMPORTANT: unique identifier for navigation
}

function VideoCard({ 
  thumbnail, 
  duration = '05:32', 
  title, 
  author, 
  date, 
  views, 
  category,
  slug 
}: VideoCardProps) {
  return (
    <Link href={`/web-talks/${slug}`}>
      <div className="bg-white rounded-[10px] shadow-[2.7px_5.4px_25.6px_rgba(0,0,0,0.10)] overflow-hidden ring-[8px] ring-white flex flex-col group cursor-pointer hover:shadow-[2.7px_5.4px_40px_rgba(0,0,0,0.16)] transition-shadow duration-300">

        {/* Thumbnail */}
        <div className="relative w-full aspect-[449/269] bg-[#F3F3F3] overflow-hidden flex-shrink-0">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[56px] h-[56px] rounded-full bg-white/90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
              <div
                className="w-0 h-0 ml-[4px]"
                style={{
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  borderLeft: '17px solid #1C3E9C',
                }}
              />
            </div>
          </div>
          {/* Duration badge */}
          <div className="absolute bottom-[10px] right-[11px] bg-[#202020]/90 rounded-[3px] px-[11px] py-[6px]">
            <span className="text-white text-[14px] tracking-[0.27px]">{duration}</span>
          </div>
        </div>

        {/* Card body */}
        <div className="px-[18px] pt-[10px] pb-[18px] flex flex-col gap-4 flex-1">
          <h3 className="text-[#1E1E1E] text-[18px] lg:text-[20px] font-bold leading-snug tracking-[0.30px] line-clamp-2 min-h-[50px]">
            {title}
          </h3>
          <div className="flex flex-col gap-[18px] mt-auto">
            {/* Row 1: Author + Date */}
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-[6px] text-[#333333] text-[14px] lg:text-[16px] capitalize tracking-[0.24px] opacity-90">
                <User size={18} strokeWidth={2} className="flex-shrink-0 text-[#1E1E1E]" />
                {author}
              </span>
              <span className="flex items-center gap-[6px] text-[#333333] text-[14px] lg:text-[16px] capitalize tracking-[0.24px] opacity-90">
                <Calendar size={18} strokeWidth={2.25} className="flex-shrink-0" />
                {date}
              </span>
            </div>
            {/* Row 2: Views + Category */}
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-[6px] text-[#333333] text-[14px] lg:text-[16px] capitalize tracking-[0.24px] opacity-90">
                <Eye size={18} strokeWidth={2.25} className="flex-shrink-0" />
                {views}
              </span>
              <span className="px-[10px] py-[7px] bg-[rgba(28,62,156,0.05)] rounded-[27px] text-[#1C3E9C] text-[13px] lg:text-[16px] capitalize tracking-[0.24px] opacity-90 whitespace-nowrap">
                {category}
              </span>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}

/* ────────────────────────────────────────────────────────────────
   Pagination
──────────────────────────────────────────────────────────────── */
function Pagination({ current, onChange }: { current: number; onChange: (p: number) => void }) {
  return (
    <div className="flex items-center gap-1 flex-wrap justify-center">
      {/* Previous */}
      <button
        disabled={current === 1}
        className="flex items-center gap-2 px-3 py-2 rounded-[8px] text-[#757575] text-[16px] opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={16} />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page numbers */}
      {[1, 2, 3].map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-[34px] h-[32px] rounded-[8px] text-[16px] transition-colors ${
            current === p ? 'bg-[#2C2C2C] text-[#F5F5F5]' : 'text-[#1E1E1E] hover:bg-gray-100'
          }`}
        >
          {p}
        </button>
      ))}

      <span className="px-2 text-[16px] font-bold text-black">...</span>

      {[67, 68].map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-[34px] h-[32px] rounded-[8px] text-[16px] transition-colors ${
            current === p ? 'bg-[#2C2C2C] text-[#F5F5F5]' : 'text-[#1E1E1E] hover:bg-gray-100'
          }`}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onChange(Math.min(current + 1, 68))}
        className="flex items-center gap-2 px-3 py-2 rounded-[8px] text-[#1E1E1E] text-[16px] hover:bg-gray-100"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   VIDEO DATA - Each video now has a slug field
──────────────────────────────────────────────────────────────── */
const FEATURED_VIDEOS: VideoCardProps[] = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'shaping-future-advanced-materials-1', // ← SLUG for navigation
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'shaping-future-advanced-materials-2',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'shaping-future-advanced-materials-3',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80',
    duration: '12:45',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'shaping-future-advanced-materials-4',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'shaping-future-advanced-materials-5',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'shaping-future-advanced-materials-6',
  },
];

const CATEGORY_VIDEOS: VideoCardProps[] = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'category-video-1',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'category-video-2',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'category-video-3',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'category-video-4',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'category-video-5',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'category-video-6',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'category-video-7',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'category-video-8',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    slug: 'category-video-9',
  },
];

/* ────────────────────────────────────────────────────────────────
   MAIN PAGE EXPORT
──────────────────────────────────────────────────────────────── */
export default function WebTalksPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <main className="flex-1 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[30px] py-10 flex flex-col">

          {/* ── Breadcrumb ── */}
          <div className="pt-20 lg:pt-2 translate-x-[-20px]">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Webtalks' },
            ]}
          />
          </div>

          {/* ══════════════════════════════
              FEATURED VIDEOS
          ══════════════════════════════ */}
          <section className="flex flex-col gap-10">

            {/* Section header */}
            <div className="flex items-center justify-between">
              <h2 className="text-[#1E1E1E] text-[22px] sm:text-[28px] font-bold tracking-[0.42px]">
                Featured Videos
              </h2>
              <Link
                href="#"
                className="flex items-center gap-[3px] text-[#2C679E] text-[14px] sm:text-[18px] font-semibold hover:underline whitespace-nowrap"
              >
                View all featured
                <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Grid row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_VIDEOS.slice(0, 3).map((v, i) => (
                <VideoCard key={i} {...v} />
              ))}
            </div>

            {/* Grid row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_VIDEOS.slice(3, 6).map((v, i) => (
                <VideoCard key={i} {...v} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center pt-2">
              <Pagination current={currentPage} onChange={setCurrentPage} />
            </div>

          </section>

          {/* ══════════════════════════════
              BROWSE BY CATEGORY
          ══════════════════════════════ */}
          <section className="flex flex-col gap-10 pb-[90px]">

            <h2 className="text-[#1E1E1E] text-[22px] sm:text-[28px] font-bold tracking-[0.42px]">
              Browse by Category
            </h2>

            {/* Category pills */}
            <div className="flex flex-wrap gap-[10px] sm:gap-[11px]">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-[15px] py-[7px] sm:py-[10px] rounded-[27px] text-[15px] sm:text-[18px] capitalize tracking-[0.27px] transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#1C3E9C] text-white'
                      : 'bg-[rgba(28,62,156,0.05)] text-[#1C3E9C] hover:bg-[rgba(28,62,156,0.12)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORY_VIDEOS.slice(0, 3).map((v, i) => (
                <VideoCard key={i} {...v} />
              ))}
            </div>

            {/* Grid row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORY_VIDEOS.slice(3, 6).map((v, i) => (
                <VideoCard key={i} {...v} />
              ))}
            </div>

            {/* Grid row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORY_VIDEOS.slice(6, 9).map((v, i) => (
                <VideoCard key={i} {...v} />
              ))}
            </div>

          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}