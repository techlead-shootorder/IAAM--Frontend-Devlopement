import Image from "next/image";
import Link from "next/link";
import SectionContainer from "../common/SectionContainer";
import { getProxiedImageUrl } from "@/lib/imageProxy";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function getAboutData() {
  try {
    const baseUrl = NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, '') || 'http://13.53.89.25:1337';
    const strapiUrl = new URL(`${baseUrl}/api/home`);
    strapiUrl.searchParams.append("populate[ThirdFold][populate]", "*");

    const response = await fetch(strapiUrl.toString(), {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("About API Error:", response.status, errorText);
      throw new Error("Failed to fetch About data");
    }

    const json = await response.json();
    return json?.data?.ThirdFold || null;
  } catch (error) {
    console.error("AboutSection fetch error:", error);
    return null;
  }
}

export default async function AboutSection() {
  const about = await getAboutData();

  if (!about) {
    return (
      <section className="py-24 text-center text-red-500">
        Failed to load about section
      </section>
    );
  }

  const descriptionText =
    about.Description?.map((block: any) =>
      block.children.map((child: any) => child.text).join("")
    ).join(" ") || "";

  const imageUrl =
    about?.Image?.formats?.large?.url
      ? getProxiedImageUrl(about.Image.formats.large.url)
      : about?.Image?.url
      ? getProxiedImageUrl(about.Image.url)
      : "/about-placeholder.jpg";

  return (
    <SectionContainer>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">

        <div className="order-last md:order-first">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
            {about.Heading}
          </h2>

          <p className="text-slate-700 mb-8">
            {descriptionText}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {about.Cards?.map((card: any) => (
              <div
                key={card.id}
                className="p-4 bg-gray-200 rounded"
              >
                <h4 className="font-bold text-slate-800 mb-2">
                  {card.Heading}
                </h4>
                <p className="text-sm text-slate-700">
                  {card.Description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="#"
            className="block text-center bg-[hsl(197,63%,22%)] text-white px-6 py-3 font-semibold rounded hover:bg-[hsl(197,63%,15%)] transition"
          >
            Learn More
          </Link>
        </div>

        <div className="order-first md:order-last relative h-[550px] w-full">
          <Image
            src={imageUrl}
            alt={about.Image?.alternativeText || "About Image"}
            fill
            priority
            className="object-cover rounded shadow-lg"
          />
        </div>

      </div>
    </SectionContainer>
  );
}
