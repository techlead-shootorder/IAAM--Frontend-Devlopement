'use client';

import { useState } from 'react';
import MainNav from '@/components/MainNav';
import HeroBanner from '@/components/HeroBanner';
import Footer from '@/components/FooterNew';
import BlogSection from '@/components/Home/BlogSection';
import HomeAbout from '@/components/Home/AboutSection';
import EventsSection from '@/components/Home/EventsSection';
import JoinSection from '@/components/Home/JoinSection';

export default function RootPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Navigation with dropdowns */}
      <MainNav mobileMenuOpen={mobileMenuOpen} />
      
      <main className="flex-1">
        {/* Hero Banner from src copy */}
        <HeroBanner />
        
        {/* Existing Home Sections */}
        {/* <HomeHero /> */}
        <JoinSection />
        <EventsSection />
        <HomeAbout />
        <BlogSection />
      </main>
      
      {/* New Footer with comprehensive links */}
      <Footer />
    </div>
  );
}