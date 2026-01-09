import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'

export const metadata = {
  title: 'Global Connect Program - IAAM',
  description: 'Advanced Materials Global Connect Program - Connecting Science, Industry & Policy for Global Impact',
}

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

export default function Program() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <HeroSection />
      <AboutSection />
      <OverviewSection />
      <WhyGlobalConnectSection />
      <StrategicObjectivesSection />
      <CollaborationFrameworkSection />
      <WhoCanParticipateSection />
      <GetInvolvedSection />
      <CTASection />
      <BenefitsSection />
      <PriorityThemesSection />
      <IntegrationSection />
      <PriorityThemesSection />

      <Footer />
    </div>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative h-[400px] md:h-[500px]">
      <div className="absolute inset-0">
        <Image
          src="/Association_Banner.jpg"
          alt="IAAM Conference"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
        <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-2xl leading-tight">
          Connecting the Advance<br />
          Materials Science, Industry &<br />
          Policy for Global Impact
        </h1>
        <p className="text-white/90 text-base md:text-lg mb-6 max-w-xl">
          A flagship global initiative by the International Associations of the Advance Materials
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="bg-[hsl(197,63%,22%)] font-bold hover:bg-white hover:text-[hsl(197,63%,22%)] text-white px-6 py-3 rounded-sm transition-colors">
            Apply for Membership
          </button>
          <button className="bg-[hsl(197,63%,22%)] font-bold hover:bg-white hover:text-[hsl(197,63%,22%)] text-white px-6 py-3 rounded-sm transition-colors">
            Get Involved
          </button>
          <button className="bg-[hsl(197,63%,22%)] font-bold hover:bg-white hover:text-[hsl(197,63%,22%)] text-white px-6 py-3 rounded-sm transition-colors">
            Explore IAAM
          </button>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <SectionContainer>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-6 leading-tight">
            The Advanced Materials Global Connect Program is a flagship global initiative of the International Association of Advanced Materials
          </h2>
          <p className="text-[hsl(210,20%,20%)]/70 mb-4">
            Accredited by the United Nations Environment Programme (UNEP). It is designed as a single, integrated global platform that connects researchers, industries, innovators, and policymakers working across the advanced materials value chain.
          </p>
          <p className="text-[hsl(210,20%,20%)]/70">
            IAAM's global ecosystem today spans 150+ countries, 100,000+ researchers and professionals, and a structured network of 35+ National Councils, Societies, and International Charters. The Global Connect Program builds on this foundation to make collaboration simpler, more accessible, and more impactful at a global scale.
          </p>
        </div>
        <div>
          <Image
            src="/Association_2_img.jpg"
            alt="Conference auditorium"
            width={600}
            height={450}
            className="w-full h-auto rounded-sm shadow-lg"
          />
        </div>
      </div>
    </SectionContainer>
  )
}

// Overview & Vision Section
function OverviewSection() {
  return (
    <SectionContainer bgColor="bg-gray-50">
      <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-2">
        Overview & Vision
      </h2>
      <p className="text-[hsl(210,20%,20%)]/70 mb-8">One Global Network. One Shared Future.</p>
      
      <div className="flex flex-col md:flex-row overflow-hidden rounded-sm shadow-sm">
        <div className="md:w-2/5">
          <Image 
            src="/Our_Role.jpg" 
            alt="Overview" 
            width={400}
            height={230}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-3/5 bg-[hsl(197,63%,22%)] p-6 md:p-8 flex flex-col justify-center">
          <h3 className="font-sans text-2xl text-white font-bold mb-4">
            The Advanced Materials Global Connect Program
          </h3>
          <p className="text-white/90">
            The Advanced Materials Global Connect Program aims to create a deeply connected international ecosystem where advanced materials research moves efficiently from discovery to deployment, supporting sustainability, industrial innovation, and societal progress worldwide.
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}

// Why Global Connect Section
function WhyGlobalConnectSection() {
  return (
    <SectionContainer>
      <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-2">
        Why Global Connect
      </h2>
      <p className="text-[hsl(210,20%,20%)]/70 mb-8">From fragmented efforts to coordinated global action</p>
      
      <div className="flex flex-col md:flex-row overflow-hidden rounded-sm shadow-sm">
        <div className="md:w-3/5 bg-[hsl(197,63%,22%)] p-6 md:p-8 flex flex-col justify-center">
          <h3 className="font-sans text-2xl text-white font-bold mb-4">
            The Advanced Materials Global Connect Program
          </h3>
          <p className="text-white/90">
            Advanced materials research is advancing rapidly, yet collaboration across regions, sectors, and policy frameworks often remains fragmented. The Global Connect Program addresses this gap by providing one trusted global framework for engagement, coordination, and long-term collaboration.
          </p>
        </div>
        <div className="md:w-2/5">
          <Image 
            src="/Our_Role.jpg" 
            alt="Meeting" 
            width={400}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </SectionContainer>
  )
}

// Strategic Objectives Section
function StrategicObjectivesSection() {
  return (
    <SectionContainer bgColor="bg-gray-50">
      <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-2">
        Strategic Objectives
      </h2>
      <p className="text-[hsl(210,20%,20%)]/70 mb-8">Turning collaboration into measurable outcomes</p>
      
      <div className="flex flex-col md:flex-row overflow-hidden rounded-sm shadow-sm">
        <div className="md:w-2/5">
          <Image 
            src="/global_impact.jpg" 
            alt="Group photo" 
            width={400}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-3/5 bg-[hsl(197,63%,22%)] p-6 md:p-8 flex flex-col justify-center">
          <h3 className="font-sans text-xl text-white font-bold mb-4">
            The program is structured to:
          </h3>
          <ul className="text-white/90 space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Enable cross-border research and innovation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Accelerate translation from laboratory to industry</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Align materials development with global sustainability and net-zero goals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Strengthen science–industry–policy dialogue</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  )
}

// Global Collaboration Framework Section
function CollaborationFrameworkSection() {
  return (
    <SectionContainer>
      <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-2">
        Global Collaboration Framework
      </h2>
      <p className="text-[hsl(210,20%,20%)]/70 mb-8">Global reach with local relevance</p>
      
      <div className="flex flex-col md:flex-row overflow-hidden rounded-sm shadow-sm bg-gray-100">
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <p className="text-[hsl(210,20%,20%)] font-semibold mb-3">
            The Advanced Materials Global Connect Program operates through:
          </p>
          <ul className="text-[hsl(210,20%,20%)]/70 space-y-1.5 mb-4">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
              <span>Regional hubs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
              <span>National Councils and Societies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-[hsl(210,20%,20%)] rounded-full mt-2 shrink-0" />
              <span>Thematic programs and task forces</span>
            </li>
          </ul>
          <p className="text-[hsl(210,20%,20%)]/70">
            This structure ensures coordinated global action while respecting regional priorities, strengths, and policy contexts.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/Leadership & Governance.jpg" 
            alt="Conference speaker" 
            width={450}
            height={320}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </SectionContainer>
  )
}

// Who Can Participate Section
function WhoCanParticipateSection() {
  return (
    <SectionContainer bgColor="bg-gray-50">
      <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-2">
        Who Can Participate
      </h2>
      <p className="text-[hsl(210,20%,20%)]/70 mb-8">Open, inclusive, and global</p>
      
      <div className="flex flex-col md:flex-row overflow-hidden rounded-sm shadow-sm">
        <div className="md:w-2/5">
          <Image 
            src="/Research, Education & Institutes.jpg" 
            alt="Networking" 
            width={400}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-3/5 bg-[hsl(197,63%,22%)] p-6 md:p-8 flex flex-col justify-center">
          <h3 className="font-sans text-xl text-white font-bold mb-4">
            Participation is open to:
          </h3>
          <ul className="text-white/90 space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Researchers and scientists</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Industry professionals and innovators</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Policymakers and institutions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Universities, startups, and research centers</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  )
}

// How to Get Involved Section
function GetInvolvedSection() {
  return (
    <SectionContainer>
      <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-2">
        How to Get Involved
      </h2>
      <p className="text-[hsl(210,20%,20%)]/70 mb-8">Your gateway to the global materials community</p>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <p className="text-[hsl(210,20%,20%)]/70">
            Professionals can join through the IAAM Member Portal, which serves as the single access point for membership, events, nominations, abstracts, and collaboration opportunities.
          </p>
        </div>
        <div>
          <Image 
            src="/Strategic_Priorities.jpg" 
            alt="Getting involved" 
            width={600}
            height={320}
            className="w-full h-auto rounded-sm shadow-lg"
          />
        </div>
      </div>
    </SectionContainer>
  )
}

// Be a Part CTA Section

function CTASection() {
  return (
    <SectionContainer bgColor="bg-white" className="py-0">
      <div className="grid md:grid-cols-2 gap-0 items-stretch">
        {/* Left side - CTA Content */}
        <div className="bg-[hsl(197,63%,22%)] p-8 md:p-12 flex flex-col justify-center">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            Be a Part of the Global IAAM Community
          </h2>
          <p className="text-white/90 mb-8 text-base">
            Connect Globally. Grow Professionally. Create impact
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[hsl(197,63%,15%)] font-semibold border border-white/30 text-white px-6 py-3 rounded hover:bg-[hsl(197,63%,10%)] transition-colors">
              Apply for Membership
            </button>
            <button className="bg-[hsl(197,63%,15%)] font-semibold border border-white/30 text-white px-6 py-3 rounded hover:bg-[hsl(197,63%,10%)] transition-colors">
              Renew Membership
            </button>
          </div>
        </div>
        
        {/* Right side - Gray area */}
        <div className="bg-gray-200 min-h-[300px] md:min-h-0">
          {/* Empty gray area matching the first image */}
        </div>
      </div>
    </SectionContainer>
  );
}

// Benefits Section
function BenefitsSection() {
  const benefits = [
    {
      title: 'Complimentary IAAM Membership (2026)',
      description: 'Experts in advanced materials receive a one-year complimentary IAAM membership for 2026, providing immediate access to IAAM\'s global ecosystem.'
    },
    {
      title: 'Single Digital Access Point',
      description: 'Through the IAAM Member Portal, participants can manage all IAAM interactions from one unified platform—membership, events, nominations, abstracts, and collaborations.'
    },
    {
      title: 'Digital Membership Recognition',
      description: 'Members receive an official digital IAAM membership certificate, confirming their participation in the Advanced Materials Global Connect Program.'
    },
    {
      title: 'Global Visibility & Engagement',
      description: 'Participants are integrated into IAAM\'s global communication and opportunity network, including newsletters, calls, announcements, and targeted initiatives.'
    },
    {
      title: 'Reduced Event Registration Fees',
      description: 'Members are eligible for a 50% reduction on registration fees for all IAAM events held in 2026.'
    },
    {
      title: 'Long-Term Professional Value',
      description: 'This program goes beyond short-term access by building a sustainable engagement pathway, supporting community building, verified networking, and long-term professional growth within the global advanced materials community'
    }
  ]

  return (
    <SectionContainer bgColor="bg-gray-50">
      <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-8">
        Benefits of Joining Advanced Materials Global Connect
      </h2>
      
      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <div key={index}>
            <h3 className="font-semibold text-[hsl(210,20%,20%)] mb-1.5">
              {benefit.title}
            </h3>
            <p className="text-[hsl(210,20%,20%)]/70 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

// Research-Industry-Policy Integration Section
function IntegrationSection() {
  return (
    <SectionContainer>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <h3 className="font-sans text-xl md:text-2xl text-[hsl(210,20%,20%)] font-bold mb-2">
            Research–Industry–Policy Integration
          </h3>
          <p className="font-semibold text-[hsl(210,20%,20%)] mb-3">
            Where science meets real-world decision-making
          </p>
          <p className="text-[hsl(210,20%,20%)]/70 leading-relaxed">
            The program creates structured platforms where researchers, industry leaders, and policymakers jointly define priorities, standards, and deployment pathways, ensuring that innovation translates into real industrial and societal impact.
          </p>
        </div>
        
        <div>
          <h3 className="font-sans text-xl md:text-2xl text-[hsl(210,20%,20%)] font-bold mb-2">
            Net-Zero & Sustainability Alignment
          </h3>
          <p className="font-semibold text-[hsl(210,20%,20%)] mb-3">
            Materials innovation for a climate-positive future
          </p>
          <p className="text-[hsl(210,20%,20%)]/70 leading-relaxed">
            Advanced Materials Global Connect is aligned with global sustainability agendas, enabling advanced materials to contribute directly to climate mitigation, resource efficiency, and net-zero transition strategies.
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}

// Priority Themes Section
function PriorityThemesSection() {
  return (
    <SectionContainer bgColor="bg-gray-50">
      <h2 className="font-sans text-2xl md:text-3xl text-[hsl(210,20%,20%)] font-bold mb-2">
        Priority Themes & Focus Areas
      </h2>
      <p className="text-[hsl(210,20%,20%)]/70 mb-8">Materials shaping the next decade</p>
      
      <div className="flex flex-col md:flex-row overflow-hidden rounded-sm shadow-sm">
        <div className="md:w-2/5">
          <Image 
            src="/global_impact.jpg" 
            alt="Group photo" 
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-3/5 bg-[hsl(197,63%,22%)] p-6 md:p-8 flex flex-col justify-center">
          <h3 className="font-sans text-xl text-white font-bold mb-4">
            Key focus areas include:
          </h3>
          <ul className="text-white/90 space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Net-zero and climate-positive materials</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Energy systems, hydrogen, and storage technologies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Advanced functional and smart materials</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Materials for healthcare, AI, and digital technologies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span>Circular economy and sustainable manufacturing</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  )
}