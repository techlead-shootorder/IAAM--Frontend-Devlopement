import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import JoinSection from '@/components/JoinSection'
import EventsSection from '@/components/EventsSection'
import AboutSection from '@/components/AboutSection'
import NewsSection from '@/components/NewsSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'IAAM - International Association of Advanced Materials',
  description:
    'Partnering with a global community committed to creating a net-zero future. Join IAAM to advance materials science toward a climate-neutral world.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <HeroSection />
         <JoinSection />

         {/* <div className="h-2 bg-[hsl(197,63%,22%)]" /> */}

        <EventsSection />
    
        {/* <div className="h-2 bg-[hsl(197,63%,22%)]" /> */}

        <AboutSection />

       {/* <div className="h-2 bg-[hsl(197,63%,22%)]" />*/}

        <NewsSection /> 
      </main>

      <Footer />
    </div>
  )
}
