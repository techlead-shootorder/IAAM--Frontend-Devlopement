import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, ChevronRight } from 'lucide-react'

// Reusable Section Container
const SectionContainer = ({ children, className = "", bgColor = "bg-white" }: { children: React.ReactNode; className?: string; bgColor?: string }) => (
  <section className={`py-16 ${bgColor} ${className}`}>
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
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
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative h-[400px] md:h-[500px]">
      <div className="absolute inset-0">
        <Image
          src="/hero-conference.png"
          alt="IAAM Conference with researchers and scientists"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
        <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-xl leading-tight">
          Advancing Materials Toward a Climate-neutral World
        </h1>
        <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl">
          Partnering with a global community committed to creating a net-zero future that is open, circular, and equitable.
        </p>
        <Link
          href="/join"
          className="bg-[hsl(197,63%,22%)] font-bold hover:bg-white hover:text-[hsl(197,63%,22%)] text-white px-6 py-3 rounded-sm w-fit transition-colors"
        >
          Join or Renew Membership
        </Link>
      </div>
    </section>
  )
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
            IAAM is a non-profit global scientific organization accredited by the United Nations Environment Programme (UNEP). We engage researchers, industry professionals, policymakers, and organizations to advance materials innovation and develop low-carbon, sustainable solutions for a net-zero future.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-gray-200 rounded h-full flex flex-col">
              <h4 className="font-bold text-[hsl(210,20%,20%)] mb-2">
                Celebrating 15+ Years of Excellence
              </h4>
              <p className="text-sm text-[hsl(210,20%,20%)]/70 flex-1">
                Advancing global innovation, leadership, and collaboration in materials science and technology.
              </p>
            </div>

            <div className="p-4 bg-gray-200 rounded h-full flex flex-col">
              <h4 className="font-bold text-[hsl(210,20%,20%)] mb-2">
                Driving Circular and Net-Zero Innovation
              </h4>
              <p className="text-sm text-[hsl(210,20%,20%)]/70 flex-1">
                Accelerating the adoption of climate-neutral technologies and supporting the green transition worldwide.
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
  )
}

// Join Section
function JoinSection() {
  const cards = [
    {
      title: 'Become a Member',
      description: "Connect, collaborate, and advance your career and organisation with IAAM's global scientific community.",
      variant: 'primary',
    },
    {
      title: 'Support Our Mission',
      description: 'Engage in initiatives that promote climate-neutral growth and sustainable innovation.',
      variant: 'primary',
    },
    {
      title: 'Apply for Funding',
      description: 'Access grants for research, travel, collaboration, conferences, and scientific outreach.',
      variant: 'light',
    },
    {
      title: 'Get to Know IAAM',
      description: 'Learn our mission, impact, partnerships, & global programs that AM for a better planet.',
      variant: 'light',
    },
  ]

  return (
    <SectionContainer bgColor="bg-gray-50">
      <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl text-[hsl(210,20%,20%)] font-bold mb-8 md:mb-12">
        How will you join IAAM?
      </h2>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Card */}
        <div className="lg:col-span-4">
          <div className="bg-[hsl(197,63%,22%)] text-white p-6 md:p-8 h-full flex flex-col rounded-sm">
            <h3 className="font-sans text-2xl md:text-3xl font-bold mb-4">
              Explore Our R&D World Links & Communities
            </h3>

            <p className="text-white/90 mb-8 flex grow">
              Building global partnerships that accelerate translational research and innovation.
            </p>

            <Link
              href="#"
              className="inline-block border-2 border-white text-white text-center py-4 px-6 font-semibold hover:bg-white hover:text-[hsl(197,63%,22%)] transition-colors rounded-xl"
            >
              Join Our Council
              <br />
              or Experts Group
            </Link>
          </div>
        </div>

        {/* Center Image */}
        <div className="lg:col-span-3 hidden lg:block">
          <Image
            src="/speaker-discussion.png"
            alt="IAAM Speaker at Auditorium"
            width={400}
            height={600}
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

        {/* Right Cards */}
        <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
          {cards.map(card => (
            <div
              key={card.title}
              className={`p-5 md:p-6 ${
                card.variant === 'primary'
                  ? 'bg-[hsl(197,63%,22%)] text-white'
                  : 'bg-[hsl(197,30%,95%)]'
              }`}
            >
              <h4
                className={`font-bold text-base md:text-lg mb-2 ${
                  card.variant === 'primary'
                    ? 'text-white'
                    : 'text-[hsl(197,63%,22%)]'
                }`}
              >
                {card.title}
              </h4>

              <p
                className={`text-sm ${
                  card.variant === 'primary'
                    ? 'text-white/90'
                    : 'text-[hsl(210,20%,20%)]/80'
                }`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

// Events Section
function EventsSection() {
  const events = [
    {
      month: 'MARCH',
      day: '30',
      title: 'The 10th Anniversary International Conference on Materials Science & Technology, 30 March',
      description: ' – 1 April 2026, joins global experts to explore and discuss breakthroughs in materials science and technological innovation.',
    },
    {
      month: 'JUNE',
      day: '01',
      title: 'The 8th Anniversary European Advanced Energy Materials Congress,',
      description: ' 01 – 03 June 2026, gathers researchers, industry professionals, policymakers, and academics to examine new developments shaping the future of energy materials.',
    },
    {
      month: 'AUGUST',
      day: '25',
      title: 'The European Advanced Materials Congress,',
      description: ' 25 – 27 August 2026, celebrates 12 years of leadership in advanced materials research and innovation. Participants will engage with cutting-edge findings, emerging technologies, and transformative solutions across the broader materials domain.',
    },
  ]

  return (
    <SectionContainer>
      <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl text-[hsl(210,20%,20%)] font-bold mb-10 md:mb-12">
        Upcoming Events
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left: Fellow Summit */}
        <div className="space-y-4">
          <Image
            src="/stockholm-waterfront.jpg"
            alt="Stockholm waterfront - Fellow Summit venue"
            width={800}
            height={400}
            className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-sm shadow-md"
            priority
          />

          <div className="space-y-4">
            <h3 className="font-sans text-2xl md:text-3xl font-bold text-[hsl(197,63%,22%)]">
              Fellow Summit
            </h3>

            <p className="text-[hsl(210,20%,30%)] leading-relaxed">
              It provides an international forum for advancing scientific, technological, and policy responses to climate change.
            </p>

            <p className="text-[hsl(210,20%,30%)] leading-relaxed">
              This summit fosters global collaboration among distinguished fellows to accelerate innovation, sustainability, and real-world impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-8">
              <Link
                href="#"
                className="inline-block text-center bg-[hsl(197,63%,22%)] text-white px-5 py-3 font-semibold rounded hover:bg-[hsl(197,63%,18%)] transition-colors"
              >
                Nominate Fellow
              </Link>
              <Link
                href="#"
                className="inline-block text-center bg-[hsl(197,63%,22%)] text-white px-5 py-3 font-semibold rounded hover:bg-[hsl(197,63%,18%)] transition-colors"
              >
                Visit Congress Website
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Advanced Materials Congress Assemblies */}
        <div className="bg-white border-2 border-[hsl(197,63%,22%)] rounded-sm overflow-hidden shadow-md">
          <div className="text-center py-2 border-b-2 border-[hsl(197,63%,22%)] bg-[hsl(197,63%,95%)]">
            <h3 className="font-sans text-xl md:text-2xl font-bold text-[hsl(197,63%,22%)]">
              Advanced Materials Congress
            </h3>
            <p className="text-sm md:text-base text-[hsl(197,63%,40%)] mt-1">Assemblies</p>
          </div>

          <div className="divide-y-2 divide-[hsl(197,63%,22%)]">
            {events.map((event, index) => (
              <div key={index} className="flex">
                <div className="w-16 md:w-24 shrink-0 border-r-2 border-[hsl(197,63%,22%)] flex flex-col items-center justify-center py-2 bg-[hsl(197,63%,98%)]">
                  <span className="text-xs uppercase tracking-wider text-[hsl(197,63%,40%)]">
                    {event.month}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-[hsl(197,63%,22%)] mt-1">
                    {event.day}
                  </span>
                </div>

                <div className="p-2 md:p-3">
                  <p className="text-sm md:text-base text-[hsl(210,20%,20%)] leading-relaxed">
                    <span className="font-bold text-[hsl(197,63%,22%)]">{event.title}</span>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

// News Section
function NewsSection() {
  const newsItems = [
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
  ]

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
                IAAM is dedicated to supporting the UN Sustainable Development Goals through research, innovation, and global collaboration aimed at improving prosperity for all.
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
  )
}