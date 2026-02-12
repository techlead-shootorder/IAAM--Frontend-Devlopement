import Image from "next/image";
import Link from "next/link";

const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "https://admin.iaamonline.org";

// Cache the fetch request at module level to prevent repeated calls
let heroDataCache: any = null;
let cacheTime = 0;
const CACHE_DURATION = 300000; // 5 minutes in milliseconds

async function getHeroData() {
  try {
    // Check if we have valid cached data
    const now = Date.now();
    if (heroDataCache && (now - cacheTime) < CACHE_DURATION) {
      return heroDataCache;
    }

    const response = await fetch(
      `${STRAPI_BASE_URL}/api/home?populate[HeroBanner][populate]=*`,
      {
        cache: "force-cache",
        next: { revalidate: 300 }
      }
    );

    if (!response.ok) {
      console.error("Hero API Error:", response.status, response.statusText);
      return heroDataCache || null;
    }

    const result = await response.json();
    const heroData = result?.data?.HeroBanner || null;
    
    // Update cache
    heroDataCache = heroData;
    cacheTime = now;
    
    return heroData;
  } catch (error) {
    console.error("Error in getHeroData:", error);
    // Return cached data if available, otherwise null
    return heroDataCache || null;
  }
}

export default async function HeroSection() {
  const heroData = await getHeroData();
  if (!heroData) return null;

  const imageObj = heroData?.HeroBanner;

  const imagePath =
    imageObj?.formats?.large?.url ||
    imageObj?.formats?.medium?.url ||
    imageObj?.url ||
    null;

  const imageUrl = imagePath
    ? `${STRAPI_BASE_URL}${imagePath}`
    : null;

  return (
    <section className="relative h-[400px] md:h-[460px] overflow-hidden">
      {/* Background */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={
            imageObj?.alternativeText ||
            heroData?.HeroBannerTitle ||
            "Hero Banner"
          }
          fill
          priority
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-2xl leading-tight">
          {heroData?.HeroBannerTitle}
        </h1>

        <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl">
          {heroData?.HeroBannerDescription}
        </p>

        {heroData?.HeroBannerButtonLabel && (
          <Link
            href="#"
            className="bg-iaam-primary font-bold hover:bg-white hover:text-iaam-primary text-white px-6 py-3 rounded-sm w-fit transition-colors"
          >
            {heroData.HeroBannerButtonLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
