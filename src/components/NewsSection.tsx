import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ChevronRight } from 'lucide-react'

const newsItems = [
  { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
  { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
  { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
  { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
  { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
  { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
]

export default function NewsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[hsl(210,20%,96%)]">
      <div className="container mx-auto px-4">
        {/* 🔹 Header - "Stay up to date." ab button ke UPAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[hsl(210,20%,20%)] mb-4 md:mb-0">
            Latest News &amp; Updates
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 🔹 Left Side – SDG Card */}
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
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-4">
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

          {/* 🔹 Right Side – News Grid */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-6">
              <Link
                href="#"
                className="inline-flex items-center gap-1 border border-[hsl(210,20%,88%)] px-4 py-2 text-sm text-[hsl(210,20%,20%)] hover:bg-[hsl(210,20%,96%)] transition-colors"
              >
                All articles
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div>
    </section>
  )
}