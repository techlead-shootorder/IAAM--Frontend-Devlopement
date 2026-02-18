import { notFound } from "next/navigation";
import { getTopContentBySlug } from "@/lib/api";
import HeroSection from "@/components/HeroComp/HeroSection";
import ContentSection from "@/components/HeroComp/ContentSection";
import Footer from "@/components/FooterNew";

interface Props {
  slug: string;
}

export default async function DynamicCategoryPage({ slug }: Props) {
  const page = await getTopContentBySlug(slug);

  if (!page) return notFound(); 

  return (
    <>
      <HeroSection data={page} />
      <ContentSection sections={page?.Section || []} />
      <Footer />
    </>
  );
}
