import Link from "next/link"
import SectionContainer from "../common/SectionContainer"
import LazyImage from "@/components/common/LazyImage"
import { Calendar, ChevronRight } from "lucide-react"

export default function NewsSection() {
  const newsItems = [
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
    { title: 'Advanced Materials Research 2025', date: '26 November 2025' },
  ]

  return (
    <SectionContainer bgColor="bg-[hsl(210,20%,96%)]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12">
        <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl text-[hsl(210,20%,20%)] font-bold mb-4 md:mb-0">
          Latest News & Updates
        </h2>

        <div className="flex flex-col gap-3 items-start md:items-end">
          <span className="text-sm text-[hsl(210,10%,45%)]">
            Stay up to date.
          </span>

          <Link
            href="#"
            className="inline-block bg-[#1e40af] text-white px-5 py-2 text-sm font-semibold rounded hover:bg-[#152f8c] transition-colors"
          >
            Sign Up for Newsletters
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Side – SDG Card */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-sm overflow-hidden shadow-sm">
            <LazyImage
              src="/sdsg-goals.jpg"
              alt="UN Sustainable Development Goals"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="bg-[#1e40af] p-6 text-white">
              <h3 className="font-sans text-xl md:text-2xl font-bold mb-4">
                Materials Innovation for Sustainability
              </h3>

              <p className="text-white/90 text-sm">
                IAAM is dedicated to supporting the UN Sustainable Development Goals through research, innovation, and global collaboration aimed at improving prosperity for all.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side – News Grid */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="#"
              className="inline-flex items-center gap-1 border border-[hsl(210,20%,88%)] px-4 py-2 text-sm text-[hsl(210,20%,20%)] hover:bg-[hsl(210,20%,96%)] transition-colors rounded"
            >
              All articles
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {newsItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="bg-white border-l-4 border-transparent hover:border-[hsl(197,63%,22%)] p-4 rounded-sm shadow-sm transition-all hover:shadow-md"
              >
                <h4 className="font-bold text-[hsl(210,20%,20%)] mb-2 text-sm md:text-base">
                  {item.title}
                </h4>

                <div className="flex items-center gap-2 text-[hsl(210,10%,45%)] text-xs md:text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}





































// import LazyImage from "@/components/common/LazyImage";
// import Link from "next/link";
// import { Calendar, ChevronRight } from "lucide-react";
// import SectionContainer from "../common/SectionContainer";
// import { getProxiedImageUrl } from "@/lib/imageProxy";

// const API =
//   process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") ||
//   "http://admin.iaamonline.org";

// /* ================= FETCH HOME BLOG SECTION ================= */
// async function getBlogSection() {
//   const res = await fetch(
//     `${API}/api/home?populate[BlogSection][populate]=FeaturedImage`,
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) return null;

//   const json = await res.json();
//   return json?.data?.BlogSection || null;
// }

// /* ================= FETCH ARTICLES ================= */
// async function getArticles() {
//   const res = await fetch(
//     `${API}/api/articles?populate=blog_category&sort=createdAt:desc&pagination[limit]=6`,
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) return [];

//   const json = await res.json();
//   return json?.data || [];
// }

// /* ================= COMPONENT ================= */
// export default async function BlogSection() {
//   const blog = await getBlogSection();
//   const articles = await getArticles();

//   if (!blog) {
//     return (
//       <section className="py-24 text-center text-red-500">
//         Failed to load blog section on server
//       </section>
//     );
//   }

//   /* ---------- LEFT DESCRIPTION ---------- */
//   const featuredDesc =
//     blog.FeaturedDescription?.map((b: any) =>
//       b.children.map((c: any) => c.text).join("")
//     ).join(" ") || "";

//   /* ---------- FEATURED IMAGE ---------- */
//   const featuredImage =
//     blog.FeaturedImage?.formats?.large?.url
//       ? getProxiedImageUrl(blog.FeaturedImage.formats.large.url)
//       : blog.FeaturedImage?.url
//       ? getProxiedImageUrl(blog.FeaturedImage.url)
//       : "/news-placeholder.jpg";

//   return (
//     <SectionContainer bgColor="bg-[hsl(210,20%,96%)]">
//       {/* ================= HEADER ================= */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
//           {blog.Title}
//         </h2>

//         <div className="flex flex-col items-start md:items-end gap-3">
//           <span className="text-sm text-slate-500">{blog.SubTitle}</span>

//           <Link
//             href={blog.NewsLetterButtonLink}
//             className="bg-[hsl(197,63%,22%)] text-white px-5 py-2 text-sm font-semibold rounded hover:bg-[hsl(197,63%,15%)] transition"
//           >
//             {blog.NewsLetterButtonText}
//           </Link>
//         </div>
//       </div>

//       {/* ================= GRID ================= */}
//       <div className="grid lg:grid-cols-12 gap-8">
//         {/* ===== LEFT FEATURED ===== */}
//         <div className="lg:col-span-4">
//           <div className="bg-white rounded overflow-hidden shadow">
//             <LazyImage
//               src={featuredImage}
//               alt={blog.FeaturedTitle}
//               width={600}
//               height={350}
//               className="w-full h-48 object-cover"
//             />

//             <div className="bg-[hsl(197,63%,22%)] p-6 text-white">
//               <h3 className="text-xl font-bold mb-4">
//                 {blog.FeaturedTitle}
//               </h3>

//               <p className="text-sm text-white/90">
//                 {featuredDesc}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ===== RIGHT ARTICLES ===== */}
//         <div className="lg:col-span-8">
//           <Link
//             href={blog.AllArticlesLink}
//             className="inline-flex items-center gap-1 border text-[hsl(197,63%,22%)] bg-gray-200 px-4 py-2 text-sm rounded mb-6 hover:bg-gray-100"
//           >
//             All articles <ChevronRight className="w-4 h-4" />
//           </Link>

//           <div className="grid sm:grid-cols-2 gap-4 text-[hsl(197,63%,22%)]">
//             {articles.map((article: any) => (
//               <Link
//                 key={article.id}
//                 href={`/articles/${article.id}`}
//                 className="bg-white border-l-4 border-transparent hover:border-[hsl(197,63%,22%)] p-4 rounded shadow transition"
//               >
//                 <h4 className="font-bold mb-2 text-sm md:text-base">
//                   {article.Title.length > 40
//                     ? article.Title.slice(0, 40) + "..."
//                     : article.Title}
//                 </h4>

//                 <div className="flex items-center gap-2 text-xs text-slate-500">
//                   <Calendar className="w-4 h-4" />
//                   <span>
//                     {new Date(article.createdAt).toLocaleDateString("en-GB", {
//                       day: "2-digit",
//                       month: "long",
//                       year: "numeric",
//                     })}
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </SectionContainer>
//   );
// }
