'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface LinkItem {
  label: string
  href: string
  isExternal?: boolean
  isHighlighted?: boolean
}

interface LinkSection {
  title: string
  links: LinkItem[]
}

const membershipData = {
  description: "Become part of a truly global IAAM ecosystem spanning 150+ countries, 250,000+ researchers & professionals, 5000+ institutions & industries, and 80+ National Councils, Societies, and International Charters, enabling local collaboration with global impact.",
  learnMoreLink: "Learn More About Membership",
  leftPanel: {
    buttonText: "Join or Renew Membership",
    title: "Shaping the Future of Advanced Materials—Together",
    description: "Advance your career, institution, or organization within IAAM's global ecosystem of Advanced Materials science, technology, and sustainability.",
  },
  sections: [
    {
      title: "Join IAAM as an Individual",
      links: [
        { label: "Who Can Join", href: "#" },
        { label: "Join as a Professional", href: "#" },
        { label: "Join as a Student", href: "#" },
        { label: "Student & Emerging Talent Programs", href: "#", isHighlighted: true },
        { label: "Membership Regulations", href: "#", isHighlighted: true },
        { label: "IAAM Code of Conduct", href: "#", isHighlighted: true },
        { label: "Developing Countries Engagement", href: "#", isHighlighted: true },
      ],
    },
    {
      title: "Institutions & Industry",
      links: [
        { label: "How can one join as an academic institute, an industry, and a Government institution", href: "#" },
        { label: "Join as an Academic & Research Institution", href: "#", isHighlighted: true },
        { label: "Join as an Industry & Corporate", href: "#", isHighlighted: true },
        { label: "Join as a Government & Public Institution", href: "#", isHighlighted: true },
        { label: "Join a Society", href: "#", isExternal: true, isHighlighted: true },
        { label: "Join a Council", href: "#", isExternal: true, isHighlighted: true },
        { label: "Apply for a Student Chapter", href: "#", isExternal: true, isHighlighted: true },
      ],
    },
    {
      title: "Nomination for IAAM Fellow",
      links: [
        { label: "Fellow & Honors", href: "#" },
        { label: "Membership & Subscriptions Catalog", href: "#", isExternal: true, isHighlighted: true },
        { label: "Membership Fees", href: "#" },
      ],
    },
    {
      title: "Membership Benefits",
      links: [
        { label: "All Benefits", href: "#" },
        { label: "Lifetime Membership Program", href: "#", isExternal: true, isHighlighted: true },
      ],
    },
    {
      title: "Manage Your Membership",
      links: [
        { label: "Renew Your Membership", href: "#", isExternal: true, isHighlighted: true },
        { label: "FAQs – IAAM Memberships", href: "#" },
        { label: "Contact Membership Office", href: "#", isExternal: true, isHighlighted: true },
      ],
    },
  ] as LinkSection[],
}

export default function MembershipDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <button className="flex items-center gap-1 py-3 px-2 text-sm text-white font-bold hover:bg-white/10 transition-colors">
        Membership
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 top-[145px] z-50 w-screen bg-white border-t border-gray-200 shadow-lg overflow-hidden">
          <div className="flex h-full">
            {/* Left Panel - Hidden on smaller screens */}
            <div className="hidden lg:block w-1/5 flex-shrink-0 border-r border-gray-100 bg-gray-50 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">
                {membershipData.leftPanel.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {membershipData.leftPanel.description}
              </p>
              <a
                href="#"
                className="inline-block w-full text-center bg-[hsl(197,63%,22%)] text-white font-semibold text-sm px-4 py-3 rounded hover:bg-[hsl(197,63%,18%)] transition-colors"
              >
                {membershipData.leftPanel.buttonText}
              </a>
            </div>

            {/* Right Panel - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-7xl mx-auto px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                  <h2 className="font-bold text-gray-900 text-2xl mb-4">
                    Membership
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-2xl">
                    {membershipData.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[hsl(197,63%,22%)] font-semibold text-sm hover:text-[hsl(197,63%,32%)] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {membershipData.learnMoreLink}
                  </a>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {membershipData.sections.map((section, idx) => (
                    <div key={idx}>
                      {section.title && (
                        <h4 className="font-bold text-[hsl(197,63%,22%)] text-sm mb-4">
                          {section.title}
                        </h4>
                      )}
                      <div className="space-y-3">
                        {section.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.href}
                            className={`block text-sm leading-relaxed transition-colors ${
                              link.isHighlighted
                                ? 'text-[hsl(197,63%,22%)] font-medium hover:text-[hsl(197,63%,32%)]'
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            {link.label}
                            {link.isExternal && (
                              <ExternalLink className="inline-block w-3 h-3 ml-1" />
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}   
    </div>
  )
}