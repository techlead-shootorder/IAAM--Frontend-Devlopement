'use client';

import { use } from 'react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/FooterNew';
import SecureCloudflareVideo from '@/components/WebTalk/SecureCloudflareVideo';

interface VideoDetailPageProps {
  params: Promise<{
    videoId: string;
  }>;
}

const VIDEO_DETAILS: Record<string, {
  title: string;
  author: string;
  date: string;
  category: string;
  description: string;
  views: string;
  duration: string;
}> = {
  'ba9870a482ae23109e437e6d56e53242': {
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'December 14, 2023',
    category: 'Research Highlights',
    description: 'Explore groundbreaking research in advanced materials science. This comprehensive lecture covers the latest innovations, methodologies, and future directions in materials engineering. Dr. John Smith presents cutting-edge findings from his team\'s research into sustainable and high-performance materials.',
    views: '12.2K Views',
    duration: '5:32',
  },
};

export default function VideoDetailPage({ params }: VideoDetailPageProps) {
  const { videoId } = use(params);
  const video = VIDEO_DETAILS[videoId] || {
    title: 'Video',
    author: 'Unknown',
    date: 'Unknown',
    category: 'General',
    description: 'Video details not available.',
    views: '0 Views',
    duration: '0:00',
  };

  return (
    <>
      <main className="flex-1 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[30px] py-10 flex flex-col gap-10">

          {/* Back button */}
          <Link
            href="/web-talks"
            className="flex items-center gap-2 text-[#1C3E9C] text-[16px] font-semibold hover:underline w-fit"
          >
            <ChevronLeft size={16} />
            Back to Web Talks
          </Link>

          {/* Video player */}
          <div className="w-full">
            <SecureCloudflareVideo videoId={videoId} />
          </div>

          {/* Video details */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[#1E1E1E] text-[28px] sm:text-[36px] font-bold leading-snug tracking-[0.54px]">
              {video.title}
            </h1>

            {/* Meta information */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-[#333333] text-[14px] sm:text-[16px]">
              <div className="flex flex-col gap-1">
                <span className="text-[#757575] text-[12px] sm:text-[14px] uppercase tracking-[0.24px]">Speaker</span>
                <span className="font-semibold">{video.author}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#757575] text-[12px] sm:text-[14px] uppercase tracking-[0.24px]">Date</span>
                <span className="font-semibold">{video.date}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#757575] text-[12px] sm:text-[14px] uppercase tracking-[0.24px]">Category</span>
                <span className="px-[10px] py-[7px] bg-[rgba(28,62,156,0.05)] rounded-[27px] text-[#1C3E9C] text-[13px] sm:text-[14px] font-semibold w-fit">
                  {video.category}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#757575] text-[12px] sm:text-[14px] uppercase tracking-[0.24px]">Duration</span>
                <span className="font-semibold">{video.duration}</span>
              </div>
            </div>

            {/* Views */}
            <div className="text-[#757575] text-[14px] sm:text-[16px] border-t border-b border-[#E0E0E0] py-4">
              {video.views}
            </div>

            {/* Description */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[#1E1E1E] text-[18px] sm:text-[20px] font-bold tracking-[0.30px]">About</h2>
              <p className="text-[#333333] text-[14px] sm:text-[16px] leading-relaxed">
                {video.description}
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
