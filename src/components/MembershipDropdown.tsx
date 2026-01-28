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
        <div className="fixed inset-0 top-[145px] z-50 w-screen bg-white border-t border-gray-200 shadow-xl overflow-hidden">
          <div className="flex h-full">
            {/* Left Panel - Fixed */}
            <div className="w-[280px] flex-shrink-0 border-r border-gray-200">
              {/* Image */}
              <div className="h-[180px] overflow-hidden relative">
                <Image
                  src="./Contact_IAAM.jpg"
                  alt="Membership"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Button */}
              <div className="bg-[hsl(197,63%,22%)] px-4 py-3">
                <a
                  href="#"
                  className="text-white font-semibold text-sm hover:text-white/80 transition-colors"
                >
                  {membershipData.leftPanel.buttonText}
                </a>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-base leading-tight mb-3">
                  {membershipData.leftPanel.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {membershipData.leftPanel.description}
                </p>
              </div>
            </div>

            {/* Right Panel - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="font-bold text-gray-900 text-xl mb-3">
                      Membership
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {membershipData.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-[hsl(197,63%,22%)] font-semibold text-sm hover:text-[hsl(197,63%,32%)] transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {membershipData.learnMoreLink}
                    </a>
                  </div>

                  {/* Links Grid */}
                  <div className="grid grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="space-y-6">
                      {membershipData.sections.slice(0, 2).map((section, idx) => (
                        <div key={idx}>
                          {section.title && (
                            <h4 className="font-bold text-[hsl(197,63%,22%)] text-sm mb-2">
                              {section.title}
                            </h4>
                          )}
                          <div className="space-y-1.5">
                            {section.links.map((link, linkIdx) => (
                              <a
                                key={linkIdx}
                                href={link.href}
                                className={`block text-xs leading-relaxed transition-colors ${
                                  link.isHighlighted
                                    ? 'text-[hsl(197,63%,22%)] hover:text-[hsl(197,63%,32%)]'
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

                    {/* Column 2 */}
                    <div className="space-y-6">
                      {membershipData.sections.slice(2, 4).map((section, idx) => (
                        <div key={idx}>
                          {section.title && (
                            <h4 className="font-bold text-[hsl(197,63%,22%)] text-sm mb-2">
                              {section.title}
                            </h4>
                          )}
                          <div className="space-y-1.5">
                            {section.links.map((link, linkIdx) => (
                              <a
                                key={linkIdx}
                                href={link.href}
                                className={`block text-xs leading-relaxed transition-colors ${
                                  link.isHighlighted
                                    ? 'text-[hsl(197,63%,22%)] hover:text-[hsl(197,63%,32%)]'
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

                    {/* Column 3 */}
                    <div className="space-y-6">
                      {membershipData.sections.slice(4).map((section, idx) => (
                        <div key={idx}>
                          {section.title && (
                            <h4 className="font-bold text-[hsl(197,63%,22%)] text-sm mb-2">
                              {section.title}
                            </h4>
                          )}
                          <div className="space-y-1.5">
                            {section.links.map((link, linkIdx) => (
                              <a
                                key={linkIdx}
                                href={link.href}
                                className={`block text-xs leading-relaxed transition-colors ${
                                  link.isHighlighted
                                    ? 'text-[hsl(197,63%,22%)] hover:text-[hsl(197,63%,32%)]'
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
        </div>
      )}   
    </div>
  )
}