import Link from 'next/link';
import Image from 'next/image';
import { User, Calendar, Clock, Eye } from 'lucide-react';
import Footer from '@/components/FooterNew';
import SecureCloudflareVideo from '@/components/WebTalk/SecureCloudflareVideo';
import Breadcrumb from '@/components/common/Breadcrumb';

/* ────────────────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────────────────── */
interface VideoCardProps {
  thumbnail: string;
  duration?: string;
  title: string;
  author: string;
  date: string;
  views: string;
  category: string;
  videoId: string;
}

interface CloudflareVideoResult {
  uid: string;
  thumbnail: string;
  duration: number;
  meta: {
    name: string;
    filename: string;
  };
  created: string;
  readyToStream: boolean;
  playback: {
    hls: string;
    dash: string;
  };
}

async function fetchCloudflareVideo(videoId: string): Promise<CloudflareVideoResult | null> {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !apiToken) {
    console.error('Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN env vars');
    return null;
  }

  try {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/${videoId}`,
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error(`Cloudflare API error: ${res.status} ${res.statusText}`);
      return null;
    }

    const json = await res.json();
    if (!json.success) return null;

    return json.result as CloudflareVideoResult;
  } catch (err) {
    console.error('Failed to fetch Cloudflare video:', err);
    return null;
  }
}

function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function VideoCard({
  thumbnail,
  duration = '05:32',
  title,
  author,
  date,
  views,
  category,
  videoId,
}: VideoCardProps) {
  return (
    <Link href={`/web-talks/${encodeURIComponent(category)}/${videoId}`}>
      <div className="bg-white rounded-[10px] shadow-[2.7px_5.4px_25.6px_rgba(0,0,0,0.10)] overflow-hidden ring-[8px] ring-white flex flex-col group cursor-pointer hover:shadow-[2.7px_5.4px_40px_rgba(0,0,0,0.16)] transition-shadow duration-300">
        <div className="relative w-full aspect-[449/269] bg-[#F3F3F3] overflow-hidden flex-shrink-0">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
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
          <div className="absolute bottom-[10px] right-[11px] bg-[#202020]/90 rounded-[3px] px-[11px] py-[6px]">
            <span className="text-white text-[14px] tracking-[0.27px]">{duration}</span>
          </div>
        </div>

        <div className="px-[18px] pt-[10px] pb-[18px] flex flex-col gap-4 flex-1">
          <h3 className="text-[#1E1E1E] text-[18px] lg:text-[20px] font-bold leading-snug tracking-[0.30px] line-clamp-2 min-h-[50px]">
            {title}
          </h3>
          <div className="flex flex-col gap-[18px] mt-auto">
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

const RELATED_VIDEOS: VideoCardProps[] = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    videoId: 'ba9870a482ae23109e437e6d56e53242',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    videoId: 'different-video-id-1',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80',
    duration: '05:32',
    title: 'Shaping the Future of Advanced Materials — Together',
    author: 'Dr. John Smith',
    date: 'Dec 14, 2023',
    views: '12.2K Views',
    category: 'Research Highlights',
    videoId: 'different-video-id-2',
  },
];

export default async function WebTalksDetailPage({
  params,
}: {
  params: Promise<{ category: string; videoId: string }>;
}) {
  const { category, videoId } = await params;

  const cfVideo = await fetchCloudflareVideo(videoId);

  const title = cfVideo?.meta?.name?.replace(/\.[^/.]+$/, '') ?? 'Untitled Video';
  const duration = cfVideo ? formatDuration(cfVideo.duration) : '—';
  const createdAt = cfVideo ? formatDate(cfVideo.created) : '—';
  const decodedCategory = decodeURIComponent(category);

  return (
    <>
      <main className="flex-1 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[30px] py-10">
          <div className="lg:pt-8 pt-28 pb-4 translate-x-[-20px]">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Webtalks', href: '/web-talks' },
                { label: decodedCategory },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[31px] mb-[80px]">
            <div className="w-full lg:w-[696px] flex-shrink-0">
              <div className="bg-[#F2F0F0] rounded-[12px] overflow-hidden aspect-video touch-manipulation">
                <SecureCloudflareVideo videoId={videoId} />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-[20px]">
              <div className="flex flex-col gap-4">
                <div className="inline-flex">
                  <span className="px-[10px] py-[7px] bg-[rgba(28,62,156,0.05)] rounded-[27px] text-[#1C3E9C] text-[16px] capitalize tracking-[0.24px] opacity-87">
                    {decodedCategory}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <h1 className="text-[#1E1E1E] text-[24px] sm:text-[28px] font-bold leading-tight tracking-[0.42px]">
                    {title}
                  </h1>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center gap-[6px]">
                  <Calendar size={20} strokeWidth={2.25} className="text-[#333333] flex-shrink-0" />
                  <span className="text-[#333333] text-[16px] sm:text-[18px] capitalize tracking-[0.27px] opacity-87">
                    {createdAt}
                  </span>
                </div>

                <div className="flex items-center gap-[6px]">
                  <Clock size={20} strokeWidth={2.25} className="text-[#333333] flex-shrink-0" />
                  <span className="text-[#333333] text-[16px] sm:text-[18px] capitalize tracking-[0.27px] opacity-87">
                    {duration}
                  </span>
                </div>

                <div className="flex items-center gap-[6px]">
                  <Eye size={20} strokeWidth={2.25} className="text-[#333333] flex-shrink-0" />
                  <span className="text-[#333333] text-[16px] sm:text-[18px] capitalize tracking-[0.27px] opacity-87">
                    0 Views
                  </span>
                </div>
              </div>
            </div>
          </div>

          <section className="flex flex-col gap-10 pb-[90px]">
            <h2 className="text-[#1E1E1E] text-[22px] sm:text-[28px] font-bold tracking-[0.42px]">
              Related Videos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {RELATED_VIDEOS.map((v, i) => (
                <VideoCard key={i} {...v} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
