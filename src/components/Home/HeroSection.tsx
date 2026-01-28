import Image from "next/image";
import Link from "next/link";
import { HeroBannerData } from "@/types/home/heroSection";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function getHeroData(): Promise<HeroBannerData | null> {
  try {
    const baseUrl = NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, '') || 'http://13.53.89.25:1337';
    const strapiUrl = new URL(`${baseUrl}/api/home`);
    strapiUrl.searchParams.append('populate[HeroBanner][populate]', '*');
    strapiUrl.searchParams.append('populate[SecondFold][populate][SecondCard][populate]', 'Image');
    strapiUrl.searchParams.append('populate[SecondFold][populate][FirstCard][populate]', '*');
    strapiUrl.searchParams.append('populate[SecondFold][populate][ThirdCards][populate]', '*');
    
    const response = await fetch(strapiUrl.toString(), {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", response.status, errorText);
      throw new Error(`Failed to fetch hero data: ${response.status}`);
    }

    const data = await response.json();
    console.log("Hero API Response:", JSON.stringify(data, null, 2));
    console.log("HeroBanner data:", data.data?.HeroBanner);
    return data.data?.HeroBanner;
  } catch (error) {
    console.error("Error in HeroSection:", error);
    return null;
  }
}

export default async function HeroSection() {
  const heroData = await getHeroData();

  if (!heroData) {
    return null;
  }

  const imageUrl = heroData.HeroBanner?.formats?.large?.url
    ? `${NEXT_PUBLIC_STRAPI_URL}${heroData.HeroBanner.formats.large.url.startsWith('/') ? '' : '/'}${heroData.HeroBanner.formats.large.url}`
    : "/hero-conference.png";

  return (
    <section className="relative h-[400px] md:h-[500px]">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={heroData.HeroBanner?.alternativeText || "Hero Banner"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
        <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-xl leading-tight">
          {heroData.HeroBannerTitle || "Welcome to IAAM"}
        </h1>
        <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl">
          {heroData.HeroBannerDescription || "International Association for Advanced Materials"}
        </p>
        <Link
          href="#"
          className="bg-[hsl(197,63%,22%)] font-bold hover:bg-white hover:text-[hsl(197,63%,22%)] text-white px-6 py-3 rounded-sm w-fit transition-colors"
        >
          {heroData.HeroBannerButtonLabel || "Learn More"}
        </Link>
      </div>
    </section>
  );
}
