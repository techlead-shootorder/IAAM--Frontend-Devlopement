const API =
  process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") ||
  "http://13.53.89.25:1337";

type Props = {
  data: any;
};

export default function HeroSection({ data }: Props) {
  const hero = data?.HeroBanner;

  const imageUrl = hero?.HeroBanner?.url
    ? `${API}${hero.HeroBanner.url}`
    : "";

  // 🔹 Dynamic (from Strapi)
  const dynamicLabel = hero?.HeroBannerButtonLabel;
  const dynamicLink = hero?.HeroBannerButtonLink;

  // 🔹 Static fallback
  const staticLabel = "Join or Renew Membership";
  const staticLink = "/membership";

  // 🔹 Final CTA (priority: dynamic > static)
  const ctaLabel = dynamicLabel || staticLabel;
  const ctaLink = dynamicLink || staticLink;

  // Debug (optional)
  console.log("CTA FINAL:", { ctaLabel, ctaLink });

  return (
    <section className="relative w-full h-[460px] overflow-hidden bg-black">
      {/* ===== BACKGROUND IMAGE ===== */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={data?.PageTitle || "Hero"}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* ===== OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
        {/* Page Title */}
        <span className="text-sm uppercase tracking-wider text-sky-300 mb-3">
          {data?.PageTitle}
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl leading-tight">
          {hero?.HeroBannerTitle}
        </h1>

        {/* Description */}
        {hero?.HeroBannerDescription && (
          <p className="mt-4 text-lg max-w-2xl text-white/90">
            {hero.HeroBannerDescription}
          </p>
        )}

        {/* ===== CTA BUTTON (ALWAYS VISIBLE) ===== */}
        <div className="mt-6 relative z-40">
          <a
            href={ctaLink}
            className="
              inline-flex items-center justify-center
              bg-[hsl(197,63%,22%)] hover:bg-[hsl(197,61%,30%)]
              text-white px-8 py-3
              rounded-md font-semibold
              shadow-lg transition
            "
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
