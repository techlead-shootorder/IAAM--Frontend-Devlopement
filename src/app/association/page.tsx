import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';

// Reusable Section Container
const SectionContainer = ({ children, className = "", bgColor = "bg-white" }: { children: React.ReactNode; className?: string; bgColor?: string }) => (
  <section className={`py-16 ${bgColor} ${className}`}>
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  </section>
);

// Hero Section Component
const HeroSection = () => (
  <section className="relative h-[400px] md:h-[500px]">
    <div className="absolute inset-0">
      <Image
        src="/Association_Banner.jpg"
        alt="IAAM Conference"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0" />
    </div>
    <div className="relative container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
      <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-2xl">
        International Associations of<br />Advance Materials
      </h1>
      <p className="text-white/90 text-base md:text-lg max-w-xl mb-6">
        A global Scientific Community shaping the future of materials technology and sustainability.
      </p>
      <button className="bg-[hsl(197,63%,22%)] font-bold hover:bg-white hover:text-[hsl(197,63%,22%)] text-white px-6 py-3 rounded-sm w-fit transition-colors">
        Join or Renew Membership
      </button>
    </div>
  </section>
);

// Content with Image Component (Left/Right Layout)
const ContentImageSection = ({ 
  title, 
  children, 
  imageSrc, 
  imageAlt,
  imagePosition = "right",
  bgColor = "bg-white",
  contentBgColor = null,
  titleColor = "text-[hsl(210,20%,20%)]",
  textColor = "text-[hsl(210,20%,20%)]/70"
}: {
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  bgColor?: string;
  contentBgColor?: string | null;
  titleColor?: string;
  textColor?: string;
}) => {
  const content = (
    <div className={`md:w-3/5 p-6 md:p-8 ${contentBgColor || ''}`}>
      <h3 className={`font-sans text-xl md:text-2xl font-bold mb-4 ${contentBgColor ? 'text-white' : titleColor}`}>
        {title}
      </h3>
      <div className={contentBgColor ? 'text-white/90' : textColor}>
        {children}
      </div>
    </div>
  );

  const image = (
    <div className="md:w-2/5">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <SectionContainer bgColor={bgColor}>
      <div className="flex flex-col md:flex-row overflow-hidden rounded-sm shadow-sm">
        {imagePosition === "left" ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </SectionContainer>
  );
};

// Two Column Text Section
const TwoColumnTextSection = ({ 
  title, 
  subtitle, 
  leftContent, 
  rightContent,
  bgColor = "bg-white"
}: {
  title: string;
  subtitle?: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  bgColor?: string;
}) => (
  <SectionContainer bgColor={bgColor}>
    <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-2">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[hsl(210,20%,20%)]/70 mb-8">
        {subtitle}
      </p>
    )}
    <div className="grid md:grid-cols-2 gap-8">
      <div>{leftContent}</div>
      <div>{rightContent}</div>
    </div>
  </SectionContainer>
);

// Vision Mission Component
const VisionMissionSection = () => (
  <SectionContainer>
    <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-2">
      Vision & Mission
    </h2>
    <p className="text-[hsl(210,20%,20%)]/70 mb-8">
      Where Scientific Excellence Meets Global Responsibility
    </p>
    <div className="grid md:grid-cols-2 gap-8 rounded-sm overflow-hidden shadow-sm w-full">
      <div className="bg-[hsl(197,63%,22%)] p-6 md:p-8">
        <h3 className="font-sans text-xl text-white font-bold mb-4">
          Vision
        </h3>
        <p className="text-white/90">
          To build a globally connected advanced materials community driving scientific excellence, sustainability, and technological innovation for societal and industrial transformation.
        </p>
      </div>
      <div className="bg-[hsl(197,63%,22%)] p-6 md:p-8">
        <h3 className="font-sans text-xl text-white font-bold mb-4">
          Mission
        </h3>
        <p className="text-white/90 mb-3">IAAM's mission is to:</p>
        <ul className="text-white/90 space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
            Advance scientific excellence and interdisciplinary collaboration
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
            Translate research into technologies with societal and industrial impact
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
            Accelerate climate-neutral and circular materials solutions
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
            Build an inclusive global community connecting science, industry, and policy
          </li>
        </ul>
      </div>
    </div>
  </SectionContainer>
);

// Main Association Page
export default function Association() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Component would go here */}
      <Header />

      <HeroSection />

      {/* About Section */}
      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-6">
              The International Association of Advanced Materials (IAAM) is a global, non-profit scientific organisation.
            </h2>
            <p className="text-[hsl(210,20%,20%)]/70 mb-4">
              Accredited by the United Nations Environment Programme (UNEP), dedicated to advancing materials science, engineering, and technology for the benefit of society. Established on Wednesday, 20 January 2010, IAAM has evolved into one of the world's leading platforms in advanced materials, connecting researchers, industry leaders, policymakers, and innovators across more than 150 countries.
            </p>
            <p className="text-[hsl(210,20%,20%)]/70">
              Guided by its founding principle, "Advancement of Materials to a Sustainable and Green World". IAAM operates at the intersection of science, sustainability, and innovation, ensuring that materials research translates into real-world solutions aligned with the United Nations Sustainable Development Goals (SDGs).
            </p>
          </div>
          <div>
            <Image
              src="/Association_2_Img.jpg"
              alt="IAAM Conference Auditorium"
              width={600}
              height={400}
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Our Role */}
      <ContentImageSection
        title="Our Role"
        imageSrc="/Our_Role.jpg"
        imageAlt="IAAM Conference"
        imagePosition="left"
        bgColor="bg-gray-50"
        contentBgColor="bg-[hsl(197,63%,22%)]"
      >
        <p className="text-sm md:text-base py-8">
          IAAM functions as a global ecosystem for advanced materials, covering the full value chain from research and education to translation, industrial deployment, and policy engagement. Through its institutes, councils, congresses, publications, awards, and net-zero initiatives, IAAM enables materials to address global challenges in energy, healthcare, electronics, AI, robotics, manufacturing, and climate action.
        </p>
      </ContentImageSection>

      <VisionMissionSection />

      {/* Global Impact Section */}
      <SectionContainer>
        <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-2">
          GLOBAL IMPACT
        </h2>
        <p className="text-[hsl(210,20%,20%)]/70 mb-8">
          Over 15 Years of Connecting Science, Industry, and Innovation Worldwide
        </p>
        
        <div className="flex flex-col md:flex-row overflow-hidden rounded-sm shadow-sm">
          <div className="md:w-2/5">
            <Image
              src="/global_impact.jpg"
              alt="IAAM Group Photo"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-3/5 bg-[hsl(197,63%,22%)] p-6 md:p-8">
            <h3 className="font-sans text-xl text-white font-bold mb-3">
              Impact & Milestones
            </h3>
            <p className="text-white/90 mb-4 text-sm">
              Over 15 years of advancing materials, IAAM has achieved:
            </p>
            <ul className="text-white/90 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
                100+ international conferences and 2,100+ symposia
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
                30,000+ delegates from over 135 countries
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
                Global Advanced Materials Congress (AMC) and IAAM Fellow Summit assemblies
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
                Headquarters in Sweden, 35 National Councils including Europe, North America, Latin America, Africa-Middle East, and Asia-Pacific HQ in China
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
                Active participation in United Nations (UN) platforms, including the UN Environment Assembly, UN Water Conference, and UN Framework Convention on Climate Change.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
                Launch of dedicated institutes and net-zero innovation programs
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Leadership & Governance */}
      <ContentImageSection
        title="Leadership & Governance"
        imageSrc="/Leadership & Governance.jpg"
        imageAlt="IAAM Leadership Meeting"
        imagePosition="right"
        bgColor="bg-gray-50"
      >
        <p className="mb-4">
          IAAM operates under a structured governance model that ensures scientific integrity, transparency, and global representation.
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
            Executive Leadership provides strategic direction and organizational oversight
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
            Scientific Committees guide research priorities, publications, and programs
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
            National & Regional Councils strengthen regional engagement across all continents
          </li>
        </ul>
      </ContentImageSection>

      {/* Research, Education & Institutes */}
      <ContentImageSection
        title="Research, Education & Institutes"
        imageSrc="/Research, Education & Institutes.jpg"
        imageAlt="IAAM Research Networking"
        imagePosition="right"
        contentBgColor="bg-[hsl(197,63%,22%)]"
      >
        <p className="mb-4">
          IAAM's research and education ecosystem includes:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
            R&D World Links connecting global research and industry networks
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
            Institute of Advanced Materials (IAM) focusing on functional, energy, healthcare, and translational materials
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
            Institute of AI & Robotics integrating AI, automation, and smart systems
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
            Institute of Industry Innovation and Development, and the International Centre for Net-Zero Research & Innovation
          </li>
        </ul>
      </ContentImageSection>

      {/* Strategic Priorities */}
      <SectionContainer bgColor="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/Strategic_Priorities.jpg"
              alt="IAAM Strategic Meeting"
              width={400}
              height={300}
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
          <div>
            <h3 className="font-sans text-2xl md:text-2xl text-[hsl(210,20%,20%)] font-bold mb-4">
              Strategic Priorities
            </h3>
            <p className="text-[hsl(210,20%,20%)]/70 mb-4">
              IAAM's strategy for 2025–2030 emphasizes:
            </p>
            <ul className="text-[hsl(210,20%,20%)]/70 space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
                Net-zero materials and technologies
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
                Global collaborations and R&D networks
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
                Industry partnerships and technology transfer
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
                Youth engagement and next-generation skill development
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
                Open-access dissemination of scientific knowledge
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
                Sustainability, circular economy, and responsible innovation
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Net-Zero Innovation Agenda */}
      <TwoColumnTextSection
        title="Net-Zero Innovation Agenda"
        bgColor="bg-white"
        leftContent={
          <p className="text-[hsl(210,20%,20%)]/70">
            <strong className="text-[hsl(210,20%,20%)]">IAAM's Net Zero Charter</strong> outlines a clear pathway from materials discovery to industrial deployment, scalability, and circularity.
          </p>
        }
        rightContent={
          <p className="text-[hsl(210,20%,20%)]/70">
            <strong className="text-[hsl(210,20%,20%)]">The Net Zero Materials & Technology Consortium</strong> serves as a global engine uniting academia, industry, policymakers, and financial stakeholders to deliver measurable emissions reductions and accelerate climate-neutral innovation.
          </p>
        }
      />

      {/* Global Community of Excellence */}
      <ContentImageSection
        title="A Global Community of Excellence"
        imageSrc="/Global_Community.jpg"
        imageAlt="IAAM Global Community"
        imagePosition="left"
        bgColor="bg-gray-50"
      >
        <p className="mb-4">
          With more than 250,000 members, IAAM offers unmatched opportunities for:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
            International networking
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
            Advanced materials research collaboration
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
            Participation in translational R&D programs
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
            Publishing in diamond open-access journals and proceedings
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
            Hosting global scientific events
          </li>
        </ul>
        <p className="mt-4">
          Recognized prestigious awards and fellowships
        </p>
      </ContentImageSection>

      {/* Contact the Secretariat */}
      <SectionContainer>
        <div className="flex flex-col md:flex-row overflow-hidden rounded-sm shadow-sm">
          <div className="md:w-1/2 bg-[hsl(197,63%,22%)] p-8 md:p-10 flex flex-col justify-center">
            <h3 className="font-sans text-xl md:text-2xl text-white font-bold mb-4 leading-snug">
              IAAM continues to shape the future of materials, ensuring research excellence translates into real-world impact.
            </h3>
            <h4 className="font-sans text-lg text-white font-bold mb-3">
              Contact the Secretariat
            </h4>
            <p className="text-white/90 text-sm">
              The IAAM Secretariat, headquartered in Sweden with regional offices worldwide, coordinates partnerships, programs, and global engagement.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/Contact_IAAM.jpg"
              alt="IAAM Networking"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Footer Component would go here */}
      <Footer />
    </div>
  );
}