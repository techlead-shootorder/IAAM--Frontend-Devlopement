import { Suspense } from 'react';
import MainNav from '@/components/MainNav';
import HeroBanner from '@/components/HeroBanner';
import Footer from '@/components/FooterNew';
import BlogSection from '@/components/Home/BlogSection';
import HomeAbout from '@/components/Home/AboutSection';
import EventsSection from '@/components/Home/EventsSection';
import JoinSection from '@/components/Home/JoinSection';
import HomeHero from '@/components/Home/HeroSection';

export default function RootPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        {/* Hero Banner from src copy */}
        {/* <HeroBanner /> */}
        
        {/* Existing Home Sections with Suspense boundaries */}
        <Suspense fallback={<div className="h-[400px] bg-gray-100 animate-pulse" />}>
          <HomeHero />
        </Suspense>
        <Suspense fallback={<div className="h-[300px] bg-gray-100 animate-pulse" />}>
          <JoinSection />
        </Suspense>
        <Suspense fallback={<div className="h-[400px] bg-gray-100 animate-pulse" />}>
          <EventsSection />
        </Suspense>
        <Suspense fallback={<div className="h-[400px] bg-gray-100 animate-pulse" />}>
          <HomeAbout />
        </Suspense>
        <Suspense fallback={<div className="h-[400px] bg-gray-100 animate-pulse" />}>
          <BlogSection />
        </Suspense>
      </main>
      
      {/* New Footer with comprehensive links */}
      <Footer />
    </div>
  );
}