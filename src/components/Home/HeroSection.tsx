import Image from "next/image";
import Link from "next/link";
import { HeroData } from "@/types/heroSection";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function HeroSection() {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_STRAPI_URL}/api/home-pages?populate=hero.image`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch hero data");
    }

    const data = await response.json();
    const heroData: HeroData = data.data?.[0]?.hero;

    if (!heroData) {
      return (
        <section className="relative h-[400px] md:h-[500px] bg-gray-100 flex items-center justify-center">
          <p>Loading hero section...</p>
        </section>
      );
    }

    // Extract text from the rich text description
    const descriptionText = heroData.description
      .map((block) => block.children.map((child) => child.text).join(""))
      .join("\n")
      .trim();

    const imageUrl = heroData.image?.url
      ? `${NEXT_PUBLIC_STRAPI_URL}${heroData.image.url}`
      : "./hero-conference.png";

    return (
      <section className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={
              heroData.image?.data?.attributes?.alternativeText || "Hero Image"
            }
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-xl leading-tight">
            {heroData.title}
          </h1>
          <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl">
            {descriptionText}
          </p>
          <Link
            href={heroData.buttonLink}
            className="bg-[hsl(197,63%,22%)] font-bold hover:bg-white hover:text-[hsl(197,63%,22%)] text-white px-6 py-3 rounded-sm w-fit transition-colors"
          >
            {heroData.buttonText}
          </Link>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error in HeroSection:", error);
    // Fallback UI in case of error
    return (
      <section className="relative h-[400px] md:h-[500px] bg-gray-100 flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-500 mb-2">Error loading hero section</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }
}

export default HeroSection;
