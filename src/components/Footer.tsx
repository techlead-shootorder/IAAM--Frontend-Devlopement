import LazyImage from "@/components/common/LazyImage";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const footerLinks = {
  discoverMaterials: {
    title: "Discover Advanced Materials",
    links: [
      "Articles",
      "IAAM Symposium & Webinars",
      "Sustainability & Net-Zero",
      "Safety",
      "Advanced Matters Podcast",
      "News Releases",
      "Materials History Landmarks",
      "Headline Materials",
    ],
  },
  programs: {
    title: "Programs",
    links: [
      "Advanced Materials Society",
      "Broadening Participation",
      "Shared Interest Groups",
      "Focus on Sustainability",
      "Advocacy",
      "Our Impact",
      "Funding Opportunities",
      "Grant Recipients",
      "Donor Recognition",
      "Student Engagement",
    ],
  },
  programsContinued: {
    links: [
      "Volunteer with IAAM",
      "University Chapters",
      "Industry Chapters",
      "Policy & Governance Chapters",
      "Sustainability Charters",
      "Net Zero Technology Programs",
      "Funding Opportunities",
    ],
  },
  communities: {
    title: "Communities",
    links: [
      "IAAM Divisions",
      "Local Sections",
      "Industry Resources",
      "International Chapters",
      "International Resources",
      "Net Zero Technology",
      "Roundtables",
      "IAAM Fellow Club",
      "Student Chapters",
      "High School Club",
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-white text-[hsl(210,24%,46%)] py-12 md:py-16 border-t border-[hsl(210,20%,88%)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Discover */}
          <FooterColumn {...footerLinks.discoverMaterials} />

          {/* Programs */}
          <FooterColumn {...footerLinks.programs} />

          {/* Programs Continued */}
          <div className="sm:mt-8 lg:mt-10">
            <ul className="space-y-2">
              {footerLinks.programsContinued.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="footer-link">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <FooterColumn {...footerLinks.communities} />

          {/* Contact */}
          <div>
            <h3 className="font-bold text-[hsl(210,20%,20%)] mb-4">
              Contact Info
            </h3>

            <div className="space-y-4 text-sm">
              <ContactRow label="Office Address" icon={FaMapMarkerAlt}>
                Gammalkilsvägen 18, Ulrika 590 53, Sweden
              </ContactRow>
              <ContactRow label="Our Phone Number" icon={FaPhone}>
                (+46) 1313-2424
              </ContactRow>
              <ContactRow label="Our Email" icon={FaEnvelope}>
                contact@iaamonline.org
              </ContactRow>

              {/* Social */}
              <div className="flex gap-8 mt-6">
                <div>
                  <p className="font-bold mb-2 text-black">WeChat</p>
                  <div className="w-16 h-16 relative">
                    <LazyImage
                      src="/QR.png"
                      alt="WeChat QR Code"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-bold mb-2 text-black">Follow Us On</p>
                  <div className="flex gap-1">
                    <SocialIcon
                      icon={FaFacebookF}
                      href="https://facebook.com"
                    />
                    <SocialIcon icon={FaTwitter} href="https://twitter.com" />
                    <SocialIcon
                      icon={FaLinkedinIn}
                      href="https://linkedin.com"
                    />
                    <SocialIcon icon={FaYoutube} href="https://youtube.com" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(210,20%,88%)] pt-6 text-center text-sm text-[hsl(211,37%,34%)]">
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="#" className="underline">
              Legal Information
            </Link>
            <span>|</span>
            <Link href="#" className="underline">
              Privacy Statement
            </Link>
            <span>|</span>
            <Link href="#">Accessibility Statement</Link>
            <span>|</span>
            <span>© 2026 IAAM</span>
            <span>|</span>
            <Link href="#">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Small Components ---------- */

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-bold text-[hsl(210,20%,20%)] mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="footer-link">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({
  label,
  children,
  icon: Icon,
}: {
  label: string;
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex items-start gap-3">
      {Icon && (
        <Icon className="text-[hsl(197,63%,22%)]  h-10 w-4 flex shrink-0" />
      )}
      <div>
        <p className="text-gray-500">{label}</p>
        <p className="text-[hsl(210,20%,20%)]">{children}</p>
      </div>
    </div>
  );
}

function SocialIcon({
  icon: Icon,
  href = "#",
}: {
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
      aria-label={Icon.name || "Social icon"}
    >
      <Icon className="text-gray-600" />
    </Link>
  );
}
