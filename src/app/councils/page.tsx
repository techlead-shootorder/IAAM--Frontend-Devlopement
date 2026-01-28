import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import AssociationHero from "@/components/AssociationHero";
import AssociationContent from "@/components/AssociationContent";
import { getCouncilsData } from "@/lib/api";

export default async function Page() {
  const data = await getCouncilsData();

  if (!data) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="py-20 text-center">
          <p className="text-gray-600">Failed to load councils data</p>
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
            { label: "Councils" },
          ]}
        />

        <AssociationContent sections={data.Section} />
      </main>

      <Footer />
    </div>
  );
}
