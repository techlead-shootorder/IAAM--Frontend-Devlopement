import LazyImage from "@/components/common/LazyImage";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import { NewsSectionData } from "@/types/home/newsSection";
import SectionContainer from "../common/SectionContainer";
import { getProxiedImageUrl } from "@/lib/imageProxy";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function NewsSection() {
  try {
    const baseUrl = NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, '') || 'http://13.53.89.25:1337';
    const res = await fetch(
      `${baseUrl}/api/home-pages?populate[newsSection][populate]=*`,
      {
        next: { revalidate: 60 },
      }
    );

    let news: NewsSectionData | null = null;
    try {
      if (res.ok) {
        const json = await res.json();
        news = json.data?.[0]?.newsSection;
      }
    } catch (e) {
      console.error("Error parsing news data:", e);
    }

    if (!news) {
      news = {
        id: 0,
        title: "Latest News",
        subtitle: "Stay updated",
        featuredTitle: "Featured Article",
        featuredDescription: [{ type: "paragraph", children: [{ type: "text", text: "Check back soon for the latest news and updates." }] }],
        featuredImage: { url: "/news-placeholder.jpg", alternativeText: "News" },
        allArticlesText: [{ type: "paragraph", children: [{ type: "text", text: "View All" }] }],
        allArticlesLink: "/news",
        newsletterButtonText: "Subscribe",
        newsletterButtonLink: "/newsletter",
        newsItems: [],
      };
    }

    const descriptionText = news.featuredDescription
      ?.map((b) => b.children.map((c) => c.text).join(""))
      .join("\n")
      .trim();

    const allArticlesText = news.allArticlesText
      ?.map((b) => b.children.map((c) => c.text).join(""))
      .join("");

    const imageUrl = getProxiedImageUrl(news.featuredImage?.url) || "/sdsg-goals.jpg";

    return (
      <SectionContainer bgColor="bg-[hsl(210,20%,96%)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            {news.title}
          </h2>

          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="text-sm text-slate-500">{news.subtitle}</span>

            <Link
              href={news.newsletterButtonLink}
              className="bg-[hsl(197,63%,22%)] text-white px-5 py-2 text-sm font-semibold rounded hover:bg-[hsl(197,63%,15%)] transition"
            >
              {news.newsletterButtonText}
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded overflow-hidden shadow">
              <LazyImage
                src={imageUrl}
                alt={news.featuredImage?.alternativeText || news.featuredTitle}
                width={600}
                height={350}
                className="w-full h-48 object-cover"
              />

              <div className="bg-[hsl(197,63%,22%)] p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  {news.featuredTitle}
                </h3>
                <p className="text-sm text-white/90">{descriptionText}</p>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="lg:col-span-8">
            <Link
              href={news.allArticlesLink}
              className="inline-flex items-center gap-1 border text-[hsl(197,63%,22%)] bg-gray-200 px-4 py-2 text-sm rounded mb-6 hover:bg-gray-100"
            >
              {allArticlesText} <ChevronRight className="w-4 h-4" />
            </Link>

            <div className="grid sm:grid-cols-2 gap-4 text-[hsl(197,63%,22%)]">
              {news.newsItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="bg-white border-l-4 border-transparent hover:border-[hsl(197,63%,22%)] p-4 rounded shadow transition"
                >
                  <h4 className="font-bold mb-2 text-sm md:text-base">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(item.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    );
  } catch (err) {
    console.error(err);
    return (
      <section className="py-24 text-center text-red-500">
        Failed to load news section
      </section>
    );
  }
}

export default NewsSection;
