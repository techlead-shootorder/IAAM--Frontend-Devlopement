import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[550px]">
      {/* 🔹 Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-conference.png"
          alt="IAAM Conference with researchers and scientists"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* 🔹 Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-xl text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans leading-tight mb-4 animate-fade-in">
            Advancing Materials Toward a Climate-neutral World
          </h1>

          <p className="text-base md:text-lg text-white/90 mb-8 animate-fade-in [animation-delay:200ms]">
            Partnering with a global community committed to creating a net-zero
            future that is open, circular, and equitable.
          </p>

          {/* 🔹 Button (no shadcn) */}
          <Link
            href="/join"
            className="inline-block text-white bg-[hsl(197,63%,22%)] px-6 py-3 text-sm md:text-base font-semibold rounded hover:bg-gray-100 hover:text-[hsl(197,63%,22%)] transition-all animate-fade-in [animation-delay:400ms]"
          >
            Join or Renew Membership
          </Link>
        </div>
      </div>
    </section>
  )
}
