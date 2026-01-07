import Image from 'next/image'
import Link from 'next/link'

const cards = [
  {
    title: 'Become a Member',
    description:
      "Connect, collaborate, and advance your career and organisation with IAAM's global scientific community.",
    variant: 'primary',
  },
  {
    title: 'Support Our Mission',
    description:
      'Engage in initiatives that promote climate-neutral growth and sustainable innovation.',
    variant: 'primary',
  },
  {
    title: 'Apply for Funding',
    description:
      'Access grants for research, travel, collaboration, conferences, and scientific outreach.',
    variant: 'light',
  },
  {
    title: 'Get to Know IAAM',
    description:
      'Learn our mission, impact, partnerships, & global programs that AM for a better planet.',
    variant: 'light',
  },
]

export default function JoinSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[hsl(210,20%,20%)] mb-8 md:mb-12">
          How will you join IAAM?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 🔹 Left Card */}
          <div className="lg:col-span-4">
            <div className="bg-[hsl(197,63%,22%)] text-white p-6 md:p-8 h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Explore Our R&amp;D World Links &amp; Communities
              </h3>

              <p className="text-white/90 mb-8 grow">
                Building global partnerships that accelerate translational
                research and innovation.
              </p>

              <Link
                href="#"
                className="inline-block border border-white text-white text-center py-4 px-6 font-semibold hover:bg-white hover:text-[hsl(197,63%,22%)] transition-color rounded-xl"
              >
                Join Our Council
                <br />
                or Experts Group
              </Link>
            </div>
          </div>

          {/* 🔹 Center Image */}
          <div className="lg:col-span-3 hidden lg:block">
            <Image
              src="/speaker-discussion.png"
              alt="IAAM Speaker at Auditorium"
              width={400}
              height={600}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          {/* 🔹 Right Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div>
    </section>
  )
}
