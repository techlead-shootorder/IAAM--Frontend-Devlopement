import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import AssociationHero from "@/components/HeroComp/HeroSection";
import AssociationContent from "@/components/HeroComp/ContentSection";
import { getSocietiesData } from "@/lib/api";

export default async function Page() {
  const data = await getSocietiesData();

  if (!data) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="py-20 text-center">
          <p className="text-gray-600">Failed to load societies data</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main>
        <AssociationHero data={data} />

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Societies" },
          ]}
        />

        <AssociationContent sections={data.Section} />
      </main>

      <Footer />
    </div>
  );
}
