import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeHero from '@/components/Home/HeroSection';
import JoinSection from '@/components/Home/JoinSection';
import EventsSection from '@/components/Home/EventsSection';
import HomeAbout from '@/components/Home/AboutSection';
import BlogSection from '@/components/Home/BlogSection';

export default function RootPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <HomeHero />
        <JoinSection />
        <EventsSection />
        <HomeAbout />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}