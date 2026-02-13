export interface DropdownSection {
  header: string;
  links?: string[];
}

export interface DropdownDataItem {
  card: {
    image: string;
    title: string;
    description: string;
    cta: string;
  };
  title: string;
  description: string;
  outlineCta?: string;
  rightLinks?: { header: string; links: string[] }[];
  columns: DropdownSection[][];
}

export const dropdownData: DropdownDataItem[] = [
  // 0: Membership
  {
    card: {
      image: "Membership 1_ 457x380px.jpg",
      title: "Shaping the Future of Advanced Materials — Together",
      description: "Advance your career, institution, or organization within IAAM's global ecosystem of Advanced Materials science, technology, and sustainability.",
      cta: "Join or Renew Membership",
    },
    title: "Membership",
    description: "Become part of a truly global IAAM ecosystem spanning 150+ countries, 250,000+ researchers & professionals, 5000+ institutions & industries, and 80+ National Councils, Societies, and International Charters, enabling local collaboration with global impact.",
    outlineCta: "Join or Renew Membership",
    columns: [
      [
        {
          header: "Join IAAM As An Individual",
          links: [
            "Who Can Join",
            "Join As Professional",
            "Join As Student",
            "Student & Emerging Talent Programs",
            "Membership Regulations",
            "IAAM Code Of Conduct",
            "Developing Countries Engagement",
          ],
        },
      ],
      [
        {
          header: "Institution & Industry",
          links: [
            "How Can One Join As An Academic Institute, An Industry, And A Government Institution",
            "Join As An Academic & Research Institution",
            "Join As An Industry & Corporate",
            "Join As A Government & Public Institution",
          ],
        },
        { header: "Join A Society" },
        { header: "Join A Council" },
        { header: "Apply For Student Chapter" },
      ],
      [
        {
          header: "Nomination For IAAM Fellow",
          links: ["Follow & Honors"],
        },
        {
          header: "Membership & Subscription Catalog",
          links: ["Follow & Honors"],
        },
        {
          header: "Membership Benefits",
          links: ["All Benefits"],
        },
        {
          header: "Life Time Membership Program",
        },
        {
          header: "Manage Your Membership",
          links: ["Renew Your Membership", "FAQs - IAAM Membership"],
        },
        { header: "Contact Membership Office" },
      ],
    ],
  },
  // 1: Meetings & Events
  {
    card: {
      image: "Meeting 1_ 457x380px.jpg",
      title: "Advance Materials Through Global Collaboration",
      description: "Bringing Together Researchers, Industry Leaders, Policymakers, And Innovators To Accelerate Progress In Advanced Materials, Sustainability, And Technological Innovation.",
      cta: "Submit Conference Proposal",
    },
    title: "Meeting & Events",
    description: "IAAM Has Brought Together 30,000+ Delegates From Over 125 Countries Across 75+ Global Congress Assemblies In Europe, America, Asia & Australia, And 2,500+ Sessions And Symposia. IAAM Meetings & Events Serve As A Global Platform For Scientific Exchange And Collaboration In Materials Science, Engineering, And Technology. These Forums Connect Academia, Industry, Policymakers, And Innovators To Translate Research Into Real-World Impact.",
    outlineCta: "Explore IAAM Meetings & Events",
    rightLinks: [
      { header: "Find An IAAM Conference Or Event Near You", links: [] },
      { header: "Upcoming Conferences", links: [] },
      { header: "Plan A Conference", links: [] },
      { header: "Conference Application", links: [] },
    ],
    columns: [
      [
        {
          header: "Advance Material Congress",
          links: [
            "Advanced Materials World Congress",
            "European Advanced Materials Congress",
            "American Advanced Materials Congress",
            "Asian Advanced Materials Congress",
            "Australian Advanced Materials Congress",
          ],
        },
        { header: "Baltic Conference Series" },
        { header: "World Congress Series" },
        {
          header: "International Conclaves",
          links: ["International Conclave On Materials, Energy & Climate"],
        },
        {
          header: "Thematic & Specialized Events",
          links: [
            "Advanced Nanomaterials Congress",
            "Advanced Composite Materials Congress",
            "Energy Materials & Technology Conference",
            "Advanced Functional Materials Congress",
          ],
        },
      ],
      [
        {
          header: "Participate & Contribute",
          links: [
            "Call For Event Proposals",
            "Invite A Thematic Session/ Symposium",
            "Nominate A Speaker",
            "Nominate A Session / Symposium Chair",
            "Join As Co-Host Or Supporting Organization",
            "Sponsorship For IAAM Event",
          ],
        },
        {
          header: "Lecture & Knowledge Platforms",
          links: [
            "Advanced Materials Lecture Series",
            "Video Proceedings Of Advanced Materials",
          ],
        },
        { header: "Online & Hybrid Events" },
        { header: "Advanced Materials WebCongress™" },
        { header: "Live Knowledge At Web™" },
        {
          header: "Online LIVE & WebEvents",
          links: ["Web Conferences", "WebSymposia", "WebSchools"],
        },
      ],
      [
        {
          header: "Support & Information",
          links: [
            "Follow & Honors",
            "Event Guidelines",
            "FAQs – IAAM Meetings & Events",
            "Apply For Conference Grant",
            "IAAM Code Of Conduct",
            "Developing Countries Engagement",
          ],
        },
        {
          header: "Past & Reports",
          links: ["Past Conference Reports"],
        },
        { header: "Quick Actions" },
        { header: "View Upcoming Events" },
        { header: "Submit Event Proposal" },
        { header: "Contact Meetings & Events Office" },
      ],
    ],
  },
  // 2: Innovation & Sustainability
  {
    card: {
      image: "Innovation 1_ 457x380px.jpg",
      title: "Inspiring Global Innovation Through Advanced Materials",
      description: "Connecting Research, Industry, And Policy To Transform Ideas Into Sustainable, Real-World Impact.",
      cta: "Join R&D World Links",
    },
    title: "Innovation & Sustainability",
    description: "IAAM Drives The Translation Of Advanced Materials Research Into Real-World Impact, Supporting Global Goals In Sustainability, Climate Neutrality, And Responsible Innovation.",
    outlineCta: "Discover IAAM's Innovation & Sustainability Initiatives",
    columns: [
      [
        {
          header: "Innovation Platforms",
          links: [
            "Translational Research & Innovation Programs",
            "Industry–Academia Collaboration Platforms",
            "Technology Transfer & Scale-up Initiatives",
            "Startup, SME & Innovation Hub Engagement",
          ],
        },
        {
          header: "Sustainability & Net-Zero Initiatives",
          links: [
            "Net-Zero Materials & Technologies",
            "Climate-Neutral R&D Programs",
            "Circular Economy & Sustainable Manufacturing",
            "Energy Transition & Green Technologies",
          ],
        },
        {
          header: "Global Consortia & Partnerships",
          links: [
            "R&D World Links & Consortia",
            "Cross-Sector Global Partnerships",
            "Regional & International Innovation Networks",
          ],
        },
        {
          header: "Policy, Strategy & Impact",
          links: [
            "Science-Policy Dialogue",
            "Sustainability Strategy & Foresight",
            "Climate Action & Global Framework Alignment",
            "Societal & Environmental Impact Programs",
          ],
        },
        {
          header: "Education & Capacity Building",
          links: [
            "Innovation & Sustainability Training Programs",
            "Student & Early-Career Innovation Pathways",
            "Leadership & Skills Development",
          ],
        },
      ],
      [
        {
          header: "Get Involved",
          links: [
            "IAAM Invites Researchers, Institutions, Industries, Startups, And Policymakers To:",
            "Join Innovation And Sustainability Programs",
            "Participate In Global Consortia And Pilots",
            "Collaborate On Net-Zero And Climate Initiatives",
            "Contribute To Policy Dialogue And Strategic Foresight",
          ],
        },
        { header: "Explore Innovation Programs" },
        { header: "Join Sustainability Initiatives" },
        { header: "WebCongress™" },
        { header: "Contact Innovation & Sustainability Office" },
      ],
    ],
  },
  // 3: Awards & Recognition
  {
    card: {
      image: "Award 1_ 457x380px.jpg",
      title: "Celebrating Excellence. Inspiring Leadership. Advancing Scientific Impact.",
      description: "Celebrating Scientific Excellence And Leadership That Shape The Future Of Materials Research And Innovation.",
      cta: "Submit Award Nomination",
    },
    title: "Awards & Recognition",
    description: "IAAM Is Structured To Honour Excellence, Leadership, And Impact Across Individuals, Institutions, And Sectors, While Also Commemorating The Legacy Of Pioneer Scientists Who Shaped The Foundations Of Materials Science And Technology.",
    outlineCta: "Learn More about Awards & Recognition Program",
    columns: [
      [
        {
          header: "Awards & Recognition Overview",
          links: ["Awards & Recognitions At IAAM", "Why IAAM Awards Matter"],
        },
        {
          header: "Individual Awards",
          links: [
            "Advanced Materials Laureate",
            "Research Of The Year",
            "Advanced Materials Award",
            "Innovation Award",
            "Lifetime Achievement Award",
            "IAAM Scientist Award",
            "IAAM Medal",
            "Scientist Medal",
            "Mid-Career Excellence Award",
            "Early-Career Researcher Award",
            "Young Scientist Award",
          ],
        },
        {
          header: "Fellow & Honors",
          links: [
            "IAAM Fellow (FIAAM)",
            "Distinguished IAAM Fellow (DFIAAM)",
            "Honorary & Special Fellowships",
          ],
        },
      ],
      [
        {
          header: "Academic & Research Institution Awards",
          links: [
            "Excellence In Academic Research",
            "Outstanding Research Institution",
            "University Leadership Award",
            "Emerging Research Institution Award",
          ],
        },
        {
          header: "Industry & Corporate Awards",
          links: [
            "Industry Innovation Award",
            "Excellence In Industrial R&D",
            "Startup & Scale-Up Innovation Award",
            "Sustainable Technology & Innovation Award",
          ],
        },
        {
          header: "Government & Public Institution Awards",
          links: [
            "Excellence In Science Policy",
            "Government Leadership In Innovation",
            "Public Institution Impact Award",
            "Sustainability & Net-Zero Leadership Award",
          ],
        },
        {
          header: "Named Honors & Pioneer Scientist Awards",
          links: [
            "Pioneer Scientist Memorial Awards",
            "Named Medals & Lectures",
            "Legacy & Distinguished Honors",
          ],
        },
        {
          header: "Thematic & Special Awards",
          links: [
            "Sustainability & Climate Action Award",
            "Net-Zero Materials Award",
            "Interdisciplinary Research Excellence",
            "Education & Mentorship Award",
            "Diversity & Global Engagement Award",
          ],
        },
      ],
      [
        { header: "Nominate A Candidate" },
        { header: "View Awards Calendar" },
        {
          header: "Nomination & Selection",
          links: [
            "Nomination Guidelines",
            "Eligibility Criteria",
            "Evaluation & Selection Process",
            "Important Dates & Deadlines",
          ],
        },
        {
          header: "Award Lectures & Ceremonies",
          links: [
            "Award Lectures",
            "Recognition Ceremonies",
            "Fellow Summits & Special Sessions",
          ],
        },
        {
          header: "Past Awardees",
          links: [
            "Awardee Directory",
            "Past Honorees & Laureates",
            "Award Highlights & Citations",
          ],
        },
        {
          header: "Support & Information",
          links: [
            "FAQs – IAAM Awards",
            "IAAM Code Of Conduct",
            "Contact Awards & Recognition Office",
          ],
        },
      ],
    ],
  },
  // 4: Journal & Proceedings
  {
    card: {
      image: "Publication 1_ 457x380px.jpg",
      title: "Celebrating Excellence. Inspiring Leadership. Advancing Scientific Impact.",
      description: "Celebrating Scientific Excellence And Leadership That Shape The Future Of Materials Research And Innovation.",
      cta: "Submit Award Nomination",
    },
    title: "Journal & Proceedings",
    description: "IAAM Publishes Nonprofit, Peer-Reviewed Journals, Conference Proceedings, And Technical Literature, Including Research Articles, Video Lectures, White Papers, Books, And Case Studies.",
    outlineCta: "Learn More About IAAM's Literature",
    columns: [
      [
        {
          header: "Technical Publications",
          links: [
            "Advanced Materials Letters",
            "Advanced Materials Proceedings",
            "Video Proceedings Of Advanced Materials",
            "Advanced Materials Charters",
            "IAAM Publications Recommender",
          ],
        },
      ],
      [
        {
          header: "Publish With IAAM",
          links: [
            "Why Choose IAAM Publications?",
            "How To Publish With IAAM",
            "Submit Proposal For Special Issue",
            "Nonprofit Publication",
            "Open Access Solutions",
            "Submit An Article",
          ],
        },
      ],
      [
        { header: "IAAM Blog" },
        {
          header: "Advanced Materials Video Lectures",
          links: [
            "How To Join As A Publication Partner",
            "How To Join As Editor",
            "Publication Guidelines",
            "FAQs – IAAM Publications",
          ],
        },
        { header: "Contact Editorial Office" },
      ],
    ],
  },
  // 5: Discover IAAM
  {
    card: {
      image: "Discover IAAM 1_ 457x380px.jpg",
      title: "Connecting Science. Innovation. Global Impact.",
      description: "IAAM Is A Global, Nonprofit Organization Dedicated To Advancing Materials Science, Engineering, And Technology Through Collaboration, Innovation, And Sustainability.",
      cta: "Collaborate with IAAM",
    },
    title: "Discover IAAM",
    description: "IAAM Operates In 150+ Countries, Engages Hundreds Of Thousands Of Researchers, Professionals, And Institutions, And Fosters Long-Term Partnerships To Address Global Challenges In Energy, Sustainability, Health, And Advanced Technologies.",
    outlineCta: "Read More about IAAM",
    columns: [
      [
        {
          header: "About IAAM",
          links: [
            "About The Association",
            "Vision, Mission & Values",
            "IAAM Leadership & Governance",
            "Global Presence & Reach",
          ],
        },
        {
          header: "What We Do",
          links: [
            "Meetings & Events",
            "Innovation & Sustainability",
            "Journals & Proceedings",
            "Awards & Recognitions",
          ],
        },
        {
          header: "Global Network",
          links: [
            "National Councils",
            "Societies & ChartersQ",
            "R&D World Links & Consortia",
            "International Partnerships",
          ],
        },
      ],
      [
        {
          header: "Community & Membership",
          links: [
            "Why Join IAAM",
            "Individual Membership",
            "Institutional Membership",
            "Student & Emerging Talent Programs",
          ],
        },
        {
          header: "Impact & Initiatives",
          links: [
            "Net-Zero & Sustainability Initiatives",
            "Industry–Academia Collaboration",
            "Policy & Science Dialogue",
            "Capacity Building & Education",
          ],
        },
        {
          header: "History & Milestones",
          links: [
            "IAAM Journey",
            "Key Achievements",
            "Past Conferences & Programs",
          ],
        },
      ],
      [
        { header: "Quick Actions" },
        { header: "Join IAAM" },
        { header: "Explore Events" },
        { header: "Discover Publications" },
        { header: "Contact IAAM" },
        {
          header: "Support & Information",
          links: [
            "FAQs",
            "IAAM Code Of Conduct",
            "Developing Countries Engagement",
            "Contact IAAM Office",
          ],
        },
      ],
    ],
  },
];