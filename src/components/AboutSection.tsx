import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image - Mobile pe Upar */}
          <div className="order-first lg:order-last">
            <Image
              src="/conference-auditorium.jpg"
              alt="IAAM Conference auditorium with researchers"
              width={600}
              height={450}
              className="w-full h-80 md:h-96 lg:h-128 object-cover rounded-sm shadow-lg"
            />
          </div>

          {/* Text Content - Mobile pe Neeche */}
          <div className="order-last lg:order-first">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[hsl(210,20%,20%)] mb-6">
              We Advance Materials for the Benefit of Society and the Planet
            </h2>

            <p className="text-[hsl(210,20%,20%)]/80 text-sm md:text-base mb-8">
              IAAM is a non-profit global scientific organization accredited by
              the United Nations Environment Programme (UNEP). We engage
              researchers, industry professionals, policymakers, and
              organizations to advance materials innovation and develop
              low-carbon, sustainable solutions for a net-zero future.
            </p>

            {/* Cards with EQUAL HEIGHT on ALL screens including mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 items-stretch">
              <div className="p-4 bg-gray-200 h-full flex flex-col rounded">
                <h4 className="font-bold text-[hsl(210,20%,20%)] mb-2">
                  Celebrating 15+ Years of Excellence
                </h4>
                <p className="text-sm text-[hsl(210,20%,20%)]/70 flex-1">
                  Advancing global innovation, leadership, and collaboration in
                  materials science and technology.
                </p>
              </div>

              <div className="p-4 bg-gray-200 h-full flex flex-col rounded">
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
              className="inline-block w-full sm:w-auto bg-[hsl(197,63%,22%)] text-white px-6 py-3 text-sm font-semibold rounded hover:bg-[hsl(197,63%,15%)] transition-colors"
            >
              Read More
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}