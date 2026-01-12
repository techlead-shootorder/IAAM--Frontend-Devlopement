import Image from "next/image";
import Link from "next/link";
import { AboutSectionData } from "@/types/home/aboutSection";

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

async function AboutSection() {
  try {
    const res = await fetch(
      `${NEXT_PUBLIC_STRAPI_URL}/api/home-pages?populate[aboutSection][populate]=*`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error("Failed to fetch about section");

    const json = await res.json();
    const about: AboutSectionData = json.data?.[0]?.aboutSection;

    if (!about) {
      return <section className="py-24 text-center">Loading...</section>;
    }

    const mainText = about.description
      .map(b => b.children.map(c => c.text).join(""))
      .join(" ");

    return (
      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="order-last md:order-first">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {about.title}
            </h2>

            <p className="text-slate-700 mb-8">{mainText}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {about.about_cards.map(card => {
                const cardText = card.description
                  .map(b => b.children.map(c => c.text).join(""))
                  .join(" ");

                return (
                  <div key={card.id} className="p-4 bg-gray-200 rounded">
                    <h4 className="font-bold text-slate-800 mb-2">
                      {card.title}
                    </h4>
                    <p className="text-sm text-slate-700">{cardText}</p>
                  </div>
                );
              })}
            </div>

            <Link
              href={about.buttonLink}
              className="block text-center bg-[hsl(197,63%,22%)] text-white px-6 py-3 font-semibold rounded hover:bg-[hsl(197,63%,15%)] transition"
            >
              {about.buttonText}
            </Link>
          </div>

          <div className="order-first md:order-last">
            <Image
              src={`${NEXT_PUBLIC_STRAPI_URL}${about.image.url}`}
              alt={about.image.alternativeText || "About Image"}
              width={600}
              height={550}
              className="w-full h-[550px] object-cover rounded shadow-lg"
            />
          </div>

        </div>
      </SectionContainer>
    );
  } catch (error) {
    console.error("AboutSection error:", error);
    return <section className="py-24 text-center text-red-500">Failed to load about section</section>;
  }
}

export default AboutSection;
