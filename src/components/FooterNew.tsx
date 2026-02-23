import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-border pt-12">
      <div className="max-w-[1440px] mx-auto px-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-[14px] gap-y-10">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-10">
            <FooterSection title="Advance Material Congress" links={[
              "About IAAM​","Vision, Mission & Values​","Leadership & Governance​","Global Presence​",
              "Our Impact","IAAM Structure (Societies, Councils & Institutes)","IAAM Divisions",
              "History & Milestones​","Ethics, Integrity & Compliance​","Donation Options​",
            ]}/>
            <FooterSection title="What we do" links={[
              "Research & Innovation","Net-Zero & Sustainability","Programs & Initiatives",
              "Innovation & Technology Transfer","Education & Training","Policy & Strategy Engagement",
            ]}/>
            <FooterSection title="Engage with IAAM" links={[
              "Partner with IAAM​","Propose a Program or Society","Host an IAAM Event",
              "Volunteer & Ambassador Program​","Careers & Opportunities​",
            ]}/>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-10">
            <FooterSection title="Membership" links={[
              "Membership Overview","Join IAAM","IAAM Fellow Club​","IAAM Societies",
              "National & Regional Councils​","Student & Young Researcher Chapters​",
              "Industry & Institutional","Membership",
            ]}/>
            <FooterSection title="Community" links={[
              "Advanced Materials Society​","Broadening Participation​","Shared Interest Groups​",
              "Student Engagement​","Volunteer with IAAM​","University Chapters",
              "Industry Chapters","Policy & Governance Chapters​",
            ]}/>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-10">
            <FooterSection title="Meetings, Knowledge & Publishing​" links={[
              "Conferences & Congresses​","Upcoming Events​","Call for Abstracts​",
              "WebTalks & Lecture Series​","Journals & Proceedings​",
              "Video Proceedings of Advanced Materials​",
            ]}/>
            <FooterSection title="Research, Innovation & Net-Zero" links={[
              "Research & Development​","Innovation & Technology","Transfer",
              "Net-Zero & Sustainability","Climate-Neutral Materials Initiative",
              "Centres of Excellence","Translational Research","Programs",
              "Focus on Sustainability","Advocacy","Sustainability Charters​",
            ]}/>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-10">
            <FooterSection title="Recognition & Engagement​" links={[
              "Awards & Recognition​","Fellowships & Honors​","Nominate Excellence​",
              "Partner with IAAM​","Host an IAAM Event​","Volunteer & Ambassador​",
              "Local Sections​","Industry Resources​","International Chapters​",
              "International Resources​","Student Chapters​","High School Club",
            ]}/>
            <FooterSection title="Funding and Undertakings​" links={[
              "Funding Opportunities​","Grant Recipients​","Net Zero Technology​",
              "Donor Recognition​","Low Carbon Roundtables​",
            ]}/>
            <FooterSection title="Learn Advanced Materials​" links={[
              "Articles​","IAAM Symposium & Webinars​","Sustainability & Net-Zero​",
              "Safety","Advanced Matters Podcast","News Releases",
              "Reactions Videos​","Materials History Landmarks​","Headline Materials​",
            ]}/>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col gap-10">
            <FooterSection title="Contact & Connect" links={[
              "Contact Us","Secretariat Offices","Email & Phone",
              "Newsletter Subscription",
              "LinkedIn | X | WeChat | YouTube | Blog | Podcast",
            ]}/>
            <FooterSection title="Legal & Policies" links={[
              "Privacy Policy","Terms & Conditions​","Cookie Policy",
              "Data Protection (GDPR)","Accessibility Statement",
            ]}/>
            <FooterSection title="Resources​" links={[
              "News & Press Releases","Media Kit","Reports & Roadmaps",
              "FAQs","Sitemap​",
            ]}/>
          </div>
        </div>
      </div>

{/* ===== EXACT MATCH BLUE SECTION ===== */}
<div className="w-full bg-black/70 mt-16">
  <div className="max-w-[1440px] mx-auto px-6 md:px-[30px] py-6 relative">

    {/* RIGHT WATERMARK LOGO */}
    <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block">
      <Link href="/">
        <Image
          src="/1704818354IAAM-Logo-SVG 1 (2).svg"
          alt="IAAM Logo"
          width={90}
          height={80}
          className="object-contain"
          priority
        />
      </Link>
    </div>

    {/* CENTER CONTENT */}
    <div className="flex flex-col items-center text-center gap-3">

      {/* LEGAL LINKS */}
      <div className="flex flex-wrap justify-center items-center text-white font-semibold text-[15px] md:text-[16px] tracking-wide">

        <span className="hover:underline cursor-pointer px-2">
          Legal Information
        </span>

        <span className="px-2 opacity-70">|</span>

        <span className="hover:underline cursor-pointer px-2">
          Privacy Statement
        </span>

        <span className="px-2 opacity-70">|</span>

        <span className="hover:underline cursor-pointer px-2">
          Accessibility Statement
        </span>

        <span className="px-2 opacity-70">|</span>

        <span className="hover:underline cursor-pointer px-2">
          Cookie Settings
        </span>

      </div>

      {/* COPYRIGHT TEXT */}
      <p className="text-white text-[13.5px] md:text-[14px] opacity-90 leading-relaxed max-w-[900px]">
        © International Association of Advanced Materials.
        All rights reserved.
      </p>

    </div>
    <p className="text-center text-white text-[13.5px] md:text-[14px]">
        IAAM is a global, non-profit scientific organization dedicated to advancing
        materials science, engineering, and technology for the benefit of society.
      </p>
  </div>
</div>
    </footer>
  );
}

/* ========================= */

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <div className="flex flex-col gap-3">
    <h3 className="font-bold text-[18px] text-[#1C3E9C] capitalize tracking-[0.27px]">
      {title}
    </h3>
    <div className="flex flex-col gap-2">
      {links.map((link, i) => (
        <a
          key={i}
          href="#"
          className="text-[16px] text-[#1E1E1E] opacity-[0.87] capitalize tracking-[0.24px] hover:text-[#1C3E9C] hover:opacity-100 transition"
        >
          {link}
        </a>
      ))}
    </div>
  </div>
);