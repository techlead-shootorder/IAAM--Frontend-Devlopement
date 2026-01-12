import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Home/HeroSection";
import JoinSection from "@/components/Home/JoinSection";
import EventsSection from "@/components/Home/EventsSection";
import AboutSection from "@/components/Home/AboutSection";
import NewsSection from "@/components/Home/NewsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main>
        <HeroSection />
        <JoinSection />
        <EventsSection />
        <AboutSection />
        <NewsSection />
      </main>

      <Footer />
    </div>
  );
}