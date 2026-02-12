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
      title: "Join the Global Community Shaping the Future of Advanced Materials​",
      description: "IAAM Membership connects you with a worldwide network of researchers, innovators, and industry leaders driving breakthroughs in advanced materials science, engineering, and technology.​",
      cta: "Join IAAM Membership",
    },
    title: "Membership​",
    description: "At IAAM, membership is more than a credential — it is a gateway to a vibrant global community that accelerates knowledge exchange, fosters interdisciplinary collaboration, and empowers scientists, engineers, institutions, and industry leaders to make a lasting impact in materials science and beyond.",
    outlineCta: "Learn More about Membership​",
    columns: [
      [
        {
          header: "Join as Individual​",
          links: [
            "How to become an IAAM member​",
            "Membership Benefits​",
            "Membership Categories & Fees​",
            "Student Membership​",
            "Early-Career Researcher Membership​",
            "Regular / Professional Membership​",
            "Lifetime Membership Program​",
            "Senior / Retired Membership​",
          ],
        },
        {
          header: "Institution & Industry Membership​",
          links: [
            "Institutional Membership​",
            "Industry / Corporate Membership​",
            "Government & Public Sector Membership​",
            "Startup & Innovation Hub Membership​",
          ],
        },
      ],
      [
        {
          header: "Fellow Nominations & Honors​",
          links: [
            "IAAM Fellow (FIAAM) Program​",
            "Distinguished Fellow (DFIAAM)​",
            "Honorary Fellowships​",
            "Nominate a Fellow​",
          ],
        },
        {
          header: "Membership Benefits & Engagement​",
          links: [
            "Key Benefits Overview​",
            "Access to Journals & Publications​",
            "Event & Conference Privileges​",
            "Awards & Recognition Eligibility​",
            "Global Networking Opportunities​",
            "Committees & Working Groups​",
          ],
        },
        {
          header: "Lifetime Membership Program​",
          links: [
            "About Lifetime Membership​",
            "How to Apply​",
            "Privileges & Commitments​",
          ],
        },
      ],
      [
        { header: "Renew Membership​" },
        { header: "Membership Directory​" },
        { header: "Member Login / Dashboard​" },
        {
          header: "Support & Information​",
          links: [
            "FAQs – Membership​",
            "IAAM Code of Conduct​",
            "Contact Membership Office​",
          ],
        },
      ],
    ],
  },
  // 1: Meetings & Events
  {
    card: {
      image: "Meeting 1_ 457x380px.jpg",
      title: "Advance Materials Through Global Collaboration",
      description: "Bringing together researchers, industry leaders, policymakers, and innovators worldwide to accelerate progress in advanced materials, sustainability, and technological innovation.​",
      cta: "Submit Conference Proposal",
    },
    title: "Meeting & Events",
    description: "IAAM has brought together 30,000+ delegates from over 125 countries across 75+ global congress assemblies in Europe, America, Asia & Australia, and 2,500+ sessions and symposia. IAAM Meetings & Events serve as a global platform for scientific exchange and collaboration in materials science, engineering, and technology.",
    outlineCta: "Explore IAAM Meetings & Events​",
    rightLinks: [
      { header: "Find an IAAM conference or event near you​", links: [] },
      { header: "Upcoming Conferences", links: [] },
      { header: "Plan a Conference", links: [] },
      { header: "Conference Application", links: [] },
    ],
    columns: [
      [
        {
          header: "Advance Material Congress",
          links: [
            "Advanced Materials World Congress​",
            "European Advanced Materials Congress",
            "American Advanced Materials Congress​",
            "Asian Advanced Materials Congress​",
            "Australian Advanced Materials Congress​",
          ],
        },
        { header: "Baltic Conference series" },
        { header: "World congress series" },
        {
          header: "International Conclaves",
          links: ["International Conclave on Materials,", "Energy & Climate"],
        },
        {
          header: "Thematic & Specialized Events",
          links: [
            "Advanced Nanomaterials Congress​",
            "Advanced Composite Materials Congress​",
            "Energy Materials & Technology Conference​",
            "Advanced Functional Materials Congress",
          ],
        },
      ],
      [
        {
          header: "Participate & Contribute",
          links: [
            "Call for event proposals",
            "Invite a Thematic Session/ Symposium",
            "Nominate a Speaker",
            "Nominate a Session / Symposium Chair​",
            "Join as Co-host or Supporting Organization",
            "Sponsorship for IAAM Event​",
          ],
        },
        {
          header: "Lecture & Knowledge Platforms​",
          links: [
            "Advanced Materials Lecture Series",
            "Video Proceedings of Advanced Materials​",
          ],
        },
        { header: "Online & Hybrid events" },
        { header: "Advanced Materials WebCongress™" },
        { header: "Live Knowledge at Web™​" },
        {
          header: "Online LIVE & WebEvents​",
          links: ["Web Conferences", "WebSymposia", "WebSchools​"],
        },
      ],
      [
        {
          header: "Support & Information​",
          links: [
            "Follow & Honors",
            "Event Guidelines​",
            "FAQs – IAAM Meetings & Events​",
            "Apply for Conference Grant​",
            "IAAM Code of Conduct​",
            "Developing Countries Engagement​",
          ],
        },
        {
          header: "Past & Reports",
          links: ["Past Conference Reports​"],
        },
        { header: "Quick Actions" },
        { header: "View Upcoming Events" },
        { header: "Submit Event Proposal​" },
        { header: "Contact Meetings & Events Office​" },
      ],
    ],
  },
  // 2: Innovation & Sustainability
  {
    card: {
      image: "Innovation 1_ 457x380px.jpg",
      title: "Inspiring Global Innovation Through Advanced Materials",
      description: "Connecting research, industry, and policy to transform ideas into sustainable, real-world impact.",
      cta: "Join R&D World Links​",
    },
    title: "Innovation & Sustainability​",
    description: "IAAM drives the translation of advanced materials research into real-world impact, supporting global goals in sustainability, climate neutrality, and responsible innovation.",
    outlineCta: "Discover IAAM's Innovation & Sustainability Initiatives​",
    columns: [
      [
        {
          header: "Innovation Platforms",
          links: [
            "Translational Research & Innovation Programs​",
            "Industry–Academia Collaboration Platforms​",
            "Technology Transfer & Scale-up Initiatives​",
            "Startup, SME & Innovation Hub Engagement",
          ],
        },
        {
          header: "Sustainability & Net-Zero Initiatives",
          links: [
            "Net-Zero Materials & Technologies​",
            "Climate-Neutral R&D Programs",
            "Circular Economy & Sustainable Manufacturing​",
            "Energy Transition & Green Technologies",
          ],
        },
        {
          header: "Global Consortia & Partnerships​",
          links: [
            "R&D World Links & Consortia",
            "Cross-sector Global Partnerships​",
            "Regional & International Innovation Networks",
          ],
        },
        {
          header: "Policy, Strategy & Impact​",
          links: [
            "Science-Policy Dialogue​",
            "Sustainability Strategy & Foresight",
            "Climate Action & Global Framework Alignment​",
            "Societal & Environmental Impact Programs​",
          ],
        },
        {
          header: "Education & Capacity Building​",
          links: [
            "Innovation & Sustainability Training Programs​",
            "Student & Early-Career Innovation Pathways​",
            "Leadership & Skills Development",
          ],
        },
      ],
      [
        {
          header: "Get Involved",
          links: [
            "IAAM invites researchers, institutions, industries, startups, and policymakers to:",
            "Join innovation and sustainability programs​",
            "Participate in global consortia and pilots​",
            "Collaborate on net-zero and climate initiatives",
            "Contribute to policy dialogue and strategic foresight​",
          ],
        },
        { header: "Explore Innovation Programs​" },
        { header: "Join Sustainability Initiatives​" },
        { header: "WebCongress™" },
        { header: "Contact Innovation & Sustainability Office​" },
      ],
    ],
  },
  // 3: Journals & Proceedings
  {
    card: {
      image: "Publication 1_ 457x380px.jpg",
      title: "Celebrating Excellence. Inspiring Leadership. Advancing Scientific Impact.",
      description: "​Celebrating scientific excellence and leadership that shape the future of materials research and innovation.",
      cta: "Submit Award Nomination",
    },
    title: "Journal & Proceedings",
    description: "IAAM publishes nonprofit, peer-reviewed journals, conference proceedings, and technical literature, including research articles, video lectures, white papers, books, and case studies.",
    outlineCta: "Learn More About IAAM's Literature",
    columns: [
      [
        {
          header: "Technical Publications",
          links: [
            "Advanced Materials Letters",
            "Advanced Materials Proceedings",
            "Video Proceedings of Advanced Materials",
            "Advanced Materials Charters",
            "IAAM Publications Recommender",
          ],
        },
      ],
      [
        {
          header: "Publish with IAAM​",
          links: [
            "Why Choose IAAM Publications?​",
            "How to Publish with IAAM​",
            "Submit Proposal for Special Issue​",
            "Nonprofit Publication",
            "Open Access Solutions",
            "Submit an Article",
          ],
        },
      ],
      [
        { header: "IAAM Blog" },
        {
          header: "Advanced Materials Video Lectures",
          links: [
            "How to join as a Publication Partner",
            "How to join as Editor​",
            "Publication Guidelines​",
            "FAQs – IAAM Publications​",
          ],
        },
        { header: "Contact Editorial Office​" },
      ],
    ],
  },
  // 4: Awards & Recognition
  {
    card: {
      image: "Award 1_ 457x380px.jpg",
      title: "Celebrating Excellence. Inspiring Leadership. Advancing Scientific Impact.",
      description: "​Celebrating scientific excellence and leadership that shape the future of materials research and innovation.",
      cta: "Submit Award Nomination",
    },
    title: "Awards & Recognition​",
    description: "IAAM is structured to honour excellence, leadership, and impact across individuals, institutions, and sectors, while also commemorating the legacy of pioneer scientists who shaped the foundations of materials science and technology.​",
    outlineCta: "Learn More about Awards & Recognition Program",
    columns: [
      [
        {
          header: "Awards & Recognition Overview",
          links: [
            "Awards & Recognitions at IAAM",
            "Why IAAM Awards Matter​",
          ],
        },
        {
          header: "Individual Awards",
          links: [
            "Advanced Materials Laureate​",
            "Research of the Year",
            "Advanced Materials Award​",
            "Innovation Award​",
            "Lifetime Achievement Award​",
            "IAAM Scientist Award",
            "IAAM Medal",
            "Scientist Medal",
            "Mid-Career Excellence Award​",
            "Early-Career Researcher Award​",
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
          header: "Academic & Research Institution Awards​",
          links: [
            "Excellence in Academic Research",
            "Outstanding Research Institution​",
            "University Leadership Award",
            "Emerging Research Institution Award",
          ],
        },
        {
          header: "Industry & Corporate Awards",
          links: [
            "Industry Innovation Award",
            "Excellence in Industrial R&D",
            "Startup & Scale-up Innovation Award",
            "Sustainable Technology & Innovation Award​",
          ],
        },
        {
          header: "Government & Public Institution Awards​",
          links: [
            "Excellence in Science Policy",
            "Government Leadership in Innovation​",
            "Public Institution Impact Award",
            "Sustainability & Net-Zero Leadership Award",
          ],
        },
        {
          header: "Named Honors & Pioneer Scientist Awards​",
          links: [
            "Pioneer Scientist Memorial Awards​",
            "Named Medals & Lectures​",
            "Legacy & Distinguished Honors​",
          ],
        },
        {
          header: "Thematic & Special Awards",
          links: [
            "Sustainability & Climate Action Award​",
            "Net-Zero Materials Award​",
            "Interdisciplinary Research Excellence​",
            "Education & Mentorship Award​",
            "Diversity & Global Engagement Award​",
          ],
        },
      ],
      [
        { header: "Nominate a Candidate" },
        { header: "View Awards Calendar" },
        {
          header: "Nomination & Selection",
          links: [
            "Nomination Guidelines​",
            "Eligibility Criteria​",
            "Evaluation & Selection Process​",
            "Important Dates & Deadlines",
          ],
        },
        {
          header: "Award Lectures & Ceremonies​",
          links: [
            "Award Lectures​",
            "Recognition Ceremonies​",
            "Fellow Summits & Special Sessions​",
          ],
        },
        {
          header: "Past Awardees​",
          links: [
            "Awardee Directory​",
            "Past Honorees & Laureates​",
            "Award Highlights & Citations​",
          ],
        },
        {
          header: "Support & Information​",
          links: [
            "FAQs – IAAM Awards​",
            "IAAM Code of Conduct​",
            "Contact Awards & Recognition Office​",
          ],
        },
      ],
    ],
  },
  // 5: Discover IAAM
  {
    card: {
      image: "Discover IAAM 1_ 457x380px.jpg",
      title: "Connecting Science. Innovation. Global Impact.​",
      description: "IAAM is a global, nonprofit organization dedicated to advancing materials science, engineering, and technology through collaboration, innovation, and sustainability.​",
      cta: "Collaborate with IAAM​",
    },
    title: "Discover IAAM​",
    description: "IAAM operates in 150+ countries, engages hundreds of thousands of researchers, professionals, and institutions, and fosters long-term partnerships to address global challenges in energy, sustainability, health, and advanced technologies.",
    outlineCta: "Read More about IAAM​",
    columns: [
      [
        {
          header: "About IAAM",
          links: [
            "About the Association​",
            "Vision, Mission & Values​",
            "IAAM Leadership & Governance​",
            "Global Presence & Reach​",
          ],
        },
        {
          header: "What We Do",
          links: [
            "Meetings & Events",
            "Innovation & Sustainability​",
            "Journals & Proceedings",
            "Awards & Recognitions",
          ],
        },
        {
          header: "Global Network​",
          links: [
            "National Councils​",
            "Societies & Charters​",
            "R&D World Links & Consortia​",
            "International Partnerships",
          ],
        },
      ],
      [
        {
          header: "Community & Membership​",
          links: [
            "Why Join IAAM",
            "Individual Membership​",
            "Institutional Membership​",
            "Student & Emerging Talent Programs​",
          ],
        },
        {
          header: "Impact & Initiatives​",
          links: [
            "Net-Zero & Sustainability Initiatives​",
            "Industry–Academia Collaboration​",
            "Policy & Science Dialogue​",
            "Capacity Building & Education​",
          ],
        },
        {
          header: "History & Milestones",
          links: [
            "IAAM Journey​",
            "Key Achievements​",
            "Past Conferences & Programs​",
          ],
        },
      ],
      [
        { header: "Quick Actions​" },
        { header: "Join IAAM​" },
        { header: "Explore Events​" },
        { header: "Discover Publications​" },
        { header: "Contact IAAM​" },
        {
          header: "Support & Information​",
          links: [
            "FAQs​",
            "IAAM Code of Conduct",
            "Developing Countries Engagement​",
            "Contact IAAM Office​",
          ],
        },
      ],
    ],
  },
];