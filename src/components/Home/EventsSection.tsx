import Image from "next/image";
import Link from "next/link";
import { EventsSectionData } from "@/types/home/eventsSection";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

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

async function EventsSection() {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_STRAPI_URL}/api/home-pages?populate[eventsSection][populate][leftSubmit][populate]=image&populate[eventsSection][populate]=events`,
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch events section");
    }

    const data = await response.json();
    const eventsSection: EventsSectionData = data.data?.[0]?.eventsSection;

    if (!eventsSection) {
      return (
        <SectionContainer>
          <p className="text-center">Loading events...</p>
        </SectionContainer>
      );
    }

    const left = eventsSection.leftSubmit?.[0];

    return (
      <SectionContainer>
        <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl text-[hsl(210,20%,20%)] font-bold mb-10 md:mb-12">
          {eventsSection.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Fellow Summit */}
          <div className="space-y-4">
            {left?.image?.url && (
              <Image
                src={`${NEXT_PUBLIC_STRAPI_URL}${left.image.url}`}
                alt={left.title || "Event image"}
                width={800}
                height={400}
                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-sm shadow-md"
                priority
              />
            )}

            <div className="space-y-4">
              <h3 className="font-sans text-2xl md:text-3xl font-bold text-[hsl(197,63%,22%)]">
                {left?.title}
              </h3>

              <p className="text-[hsl(210,20%,30%)] leading-relaxed">
                {left?.paragraph1}
              </p>

              <p className="text-[hsl(210,20%,30%)] leading-relaxed">
                {left?.paragraph2}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-8">
                <Link
                  href={left?.primaryButtonLink || "#"}
                  className="inline-block text-center bg-[hsl(197,63%,22%)] text-white px-5 py-3 font-semibold rounded hover:bg-[hsl(197,63%,18%)] transition-colors"
                >
                  {left?.primaryButtonText}
                </Link>

                <Link
                  href={left?.secondaryButtonLink || "#"}
                  className="inline-block text-center bg-[hsl(197,63%,22%)] text-white px-5 py-3 font-semibold rounded hover:bg-[hsl(197,63%,18%)] transition-colors"
                >
                  {left?.secondaryButtonText}
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
              <p className="text-sm md:text-base text-[hsl(197,63%,40%)] mt-1">
                Assemblies
              </p>
            </div>

            <div className="divide-y-2 divide-[hsl(197,63%,22%)]">
              {eventsSection.events.map((event) => (
                <div key={event.id} className="flex">
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
                      <span className="font-bold text-[hsl(197,63%,22%)]">
                        {event.title}
                      </span>
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    );
  } catch (error) {
    console.error("EventsSection error:", error);

    return (
      <SectionContainer>
        <p className="text-center text-red-500">Failed to load events</p>
      </SectionContainer>
    );
  }
}

export default EventsSection;
