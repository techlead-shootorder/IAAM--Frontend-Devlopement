import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    month: 'MARCH',
    day: '30',
    title:
      'The 10th Anniversary International Conference on Materials Science & Technology,',
    description:
      '30 March – 1 April 2026, joins global experts to explore and discuss breakthroughs in materials science and technological innovation.',
  },
  {
    month: 'JUNE',
    day: '01',
    title: 'The 8th Anniversary European Advanced Energy Materials Congress,',
    description:
      '01 – 03 June 2026, gathers researchers, industry professionals, policymakers, and academics to examine new developments shaping the future of energy materials.',
  },
  {
    month: 'AUGUST',
    day: '25',
    title: 'The European Advanced Materials Congress,',
    description:
      '25 – 27 August 2026, celebrates 12 years of leadership in advanced materials research and innovation. Participants will engage with cutting-edge findings, emerging technologies, and transformative solutions across the broader materials domain.',
  },
];

export default function EventsSection() {
  return (
    <section className="py-10 md:py-14 bg-[hsl(210,20%,96%)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-serif font-bold text-[hsl(210,20%,20%)] mb-10 md:mb-12">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[hsl(197,63%,22%)]">
                Fellow Summit
              </h3>

              <p className="text-[hsl(210,20%,30%)] text-base leading-relaxed">
                It provides an international forum for advancing scientific, technological, and policy responses to climate change.
              </p>

              <p className="text-[hsl(210,20%,30%)] text-base leading-relaxed">
                This summit fosters global collaboration among distinguished fellows to accelerate innovation, sustainability, and real-world impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-12">
                <Link
                  href="#"
                  className="inline-block text-center bg-[hsl(197,63%,22%)] text-white px-5 py-3 text-base font-semibold rounded hover:bg-[hsl(197,63%,18%)] transition-colors"
                >
                  Nominate Fellow
                </Link>
                <Link
                  href="#"
                  className="inline-block text-center bg-[hsl(197,63%,22%)] text-white px-5 py-3 text-base font-semibold rounded hover:bg-[hsl(197,63%,18%)] transition-colors"
                >
                  Visit Congress Website
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Advanced Materials Congress Assemblies */}
          <div className="bg-white border-2 border-[hsl(197,63%,22%)] rounded-sm overflow-hidden shadow-md self-start">
            <div className="text-center py-4 border-b-2 border-[hsl(197,63%,22%)] bg-[hsl(197,63%,95%)]">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[hsl(197,63%,22%)]">
                Advanced Materials Congress
              </h3>
              <p className="text-sm md:text-base text-[hsl(197,63%,40%)] mt-1">Assemblies</p>
            </div>

            <div className="divide-y-2 divide-[hsl(197,63%,22%)]">
              {events.map((event, index) => (
                <div key={index} className="flex">
                  <div className="w-20 md:w-24 shrink-0 border-r-2 border-[hsl(197,63%,22%)] flex flex-col items-center justify-center py-4 bg-[hsl(197,63%,98%)]">
                    <span className="text-xs uppercase tracking-wider text-[hsl(197,63%,40%)]">
                      {event.month}
                    </span>
                    <span className="text-3xl md:text-4xl font-bold text-[hsl(197,63%,22%)] mt-1">
                      {event.day}
                    </span>
                  </div>

                  <div className="p-4 md:p-5">
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
      </div>
    </section>
  );
}