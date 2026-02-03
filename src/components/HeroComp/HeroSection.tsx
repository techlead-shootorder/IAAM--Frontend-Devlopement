const API =
  process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") ||
  "http://admin.iaamonline.org";

type Props = {
  data: any;
};

export default function HeroSection({ data }: Props) {
  const hero = data?.HeroBanner;

  const imageUrl = hero?.HeroBanner?.url? `${API}${hero.HeroBanner.url}`: "";
  const dynamicLabel = hero?.HeroBannerButtonLabel;
  const dynamicLink = hero?.HeroBannerButtonLink;

  const staticLabel = "Join or Renew Membership";
  const staticLink = "/membership";

  const ctaLabel = dynamicLabel || staticLabel;
  const ctaLink = dynamicLink || staticLink;

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
        <span className="text-sm uppercase tracking-wider text-[hsl(197,70%,38%)] mb-3">
          {data?.PageTitle}
        </span>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl leading-tight">
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
