import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import HeroSection from "@/components/Home/HeroSection";
import JoinSection from "@/components/Home/JoinSection";
import EventsSection from "@/components/Home/EventsSection";

// Reusable Section Container
const SectionContainer = ({
  children,
  className = "",
  bgColor = "bg-white",
}: {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}) => (
  <section className={`py-16 ${bgColor} ${className}`}>
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  </section>
);

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



// About Section
function AboutSection() {
  return (
    <SectionContainer>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-last md:order-first">
          <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl text-[hsl(210,20%,20%)] font-bold mb-6 leading-tight">
            We Advance Materials for the Benefit of Society and the Planet
          </h2>
          <p className="text-[hsl(210,20%,20%)]/80 mb-8">
            IAAM is a non-profit global scientific organization accredited by
            the United Nations Environment Programme (UNEP). We engage
            researchers, industry professionals, policymakers, and organizations
            to advance materials innovation and develop low-carbon, sustainable
            solutions for a net-zero future.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-gray-200 rounded h-full flex flex-col">
              <h4 className="font-bold text-[hsl(210,20%,20%)] mb-2">
                Celebrating 15+ Years of Excellence
              </h4>
              <p className="text-sm text-[hsl(210,20%,20%)]/70 flex-1">
                Advancing global innovation, leadership, and collaboration in
                materials science and technology.
              </p>
            </div>

            <div className="p-4 bg-gray-200 rounded h-full flex flex-col">
              <h4 className="font-bold text-[hsl(210,20%,20%)] mb-2">
                Driving Circular and Net-Zero Innovation
              </h4>
              <p className="text-sm text-[hsl(210,20%,20%)]/70 flex-1">
                Accelerating the adoption of climate-neutral technologies and
                supporting the green transition worldwide.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-block w-full sm:w-full text-center bg-[hsl(197,63%,22%)] text-white px-6 py-3 text-sm font-semibold rounded hover:bg-[hsl(197,63%,15%)] transition-colors"
          >
            Read More
          </Link>
        </div>

        <div className="order-first md:order-last">
          <Image
            src="/conference-auditorium.jpg"
            alt="IAAM Conference auditorium with researchers"
            width={600}
            height={550}
            className="w-full h-48 md:h-[550px] object-cover rounded-sm shadow-lg"
          />
        </div>
      </div>
    </SectionContainer>
  );
}


// News Section
function NewsSection() {
  const newsItems = [
    { title: "Advanced Materials Research 2025", date: "26 November 2025" },
    { title: "Advanced Materials Research 2025", date: "26 November 2025" },
    { title: "Advanced Materials Research 2025", date: "26 November 2025" },
    { title: "Advanced Materials Research 2025", date: "26 November 2025" },
    { title: "Advanced Materials Research 2025", date: "26 November 2025" },
    { title: "Advanced Materials Research 2025", date: "26 November 2025" },
  ];

  return (
    <SectionContainer bgColor="bg-[hsl(210,20%,96%)]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12">
        <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl text-[hsl(210,20%,20%)] font-bold mb-4 md:mb-0">
          Latest News & Updates
        </h2>

        <div className="flex flex-col gap-3 items-start md:items-end">
          <span className="text-sm text-[hsl(210,10%,45%)]">
            Stay up to date.
          </span>

          <Link
            href="#"
            className="inline-block bg-[hsl(197,63%,22%)] text-white px-5 py-2 text-sm font-semibold rounded hover:bg-[hsl(197,63%,15%)] transition-colors"
          >
            Sign Up for Newsletters
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Side – SDG Card */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-sm overflow-hidden shadow-sm">
            <Image
              src="/sdsg-goals.jpg"
              alt="UN Sustainable Development Goals"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="bg-[hsl(197,63%,22%)] p-6 text-white">
              <h3 className="font-sans text-xl md:text-2xl font-bold mb-4">
                Materials Innovation for Sustainability
              </h3>

              <p className="text-white/90 text-sm">
                IAAM is dedicated to supporting the UN Sustainable Development
                Goals through research, innovation, and global collaboration
                aimed at improving prosperity for all.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side – News Grid */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="#"
              className="inline-flex items-center gap-1 border border-[hsl(210,20%,88%)] px-4 py-2 text-sm text-[hsl(210,20%,20%)] hover:bg-[hsl(210,20%,96%)] transition-colors rounded"
            >
              All articles
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {newsItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="bg-white border-l-4 border-transparent hover:border-[hsl(197,63%,22%)] p-4 rounded-sm shadow-sm transition-all hover:shadow-md"
              >
                <h4 className="font-bold text-[hsl(210,20%,20%)] mb-2 text-sm md:text-base">
                  {item.title}
                </h4>

                <div className="flex items-center gap-2 text-[hsl(210,10%,45%)] text-xs md:text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
