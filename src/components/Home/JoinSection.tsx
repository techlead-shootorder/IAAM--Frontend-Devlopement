import Image from "next/image"
import Link from "next/link"
import { JoinSectionData } from "@/types/home/joinSection"

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

async function getJoinSectionData(): Promise<JoinSectionData | null> {
  const res = await fetch(
    `${NEXT_PUBLIC_STRAPI_URL}/api/home-pages?populate[joinSection][populate]=*`,
    { next: { revalidate: 60 } }
  )

  const json = await res.json()
  return json?.data?.[0]?.joinSection ?? null
}

export default async function JoinSection() {
  const data = await getJoinSectionData()

  if (!data) return null

  const left = data.leftCard[0]

  const leftDescription =
    left?.description
      ?.map(block => block.children.map(c => c.text).join(""))
      .join("") || ""

  return (
    <SectionContainer bgColor="bg-gray-50">
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          {data.title}
        </h2>

        <div className="grid lg:grid-cols-12 gap-6">

          {/* Left Card */}
          <div className="lg:col-span-4">
            <div className="bg-[hsl(197,63%,22%)] text-white p-8 h-full flex flex-col rounded-sm">

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {left.title}
              </h3>

              <p className="text-white/90 mb-8 flex-grow">
                {leftDescription}
              </p>

              <Link
                href={left.buttonLink}
                className="border-2 border-white text-center py-4 px-6 font-semibold hover:bg-white hover:text-[hsl(197,63%,22%)] transition rounded-xl"
              >
                {left.buttonText}
              </Link>

            </div>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-3 hidden lg:block">
            <Image
              src="/speaker-discussion.png"
              alt="IAAM Speaker"
              width={400}
              height={600}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">

            {data.cards.map(card => (
              <div
                key={card.id}
                className={`p-6 ${
                  card.variant === "primary"
                    ? "bg-[hsl(197,63%,22%)] text-white"
                    : "bg-[hsl(197,30%,95%)]"
                }`}
              >
                <h4
                  className={`font-bold mb-2 ${
                    card.variant === "primary"
                      ? "text-white"
                      : "text-[hsl(197,63%,22%)]"
                  }`}
                >
                  {card.title}
                </h4>

                <p
                  className={`text-sm ${
                    card.variant === "primary"
                      ? "text-white/90"
                      : "text-gray-700"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
    </SectionContainer>
  )
}
