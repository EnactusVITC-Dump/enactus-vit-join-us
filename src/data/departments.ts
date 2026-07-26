export type DepartmentId = "tech" | "creative" | "finance" | "operations" | "mns";

export interface Department {
  id: DepartmentId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  responsibilities: string[];
}

export const departments: Department[] = [
  {
    id: "tech",
    name: "Tech & Web Development",
    shortName: "Tech",
    tagline: "Builds the platforms behind every project",
    description:
      "Ships the websites, internal tools and digital products that carry our projects to the world.",
    responsibilities: [
      "Build and maintain the Enactus VITC web presence",
      "Prototype digital tools for on-ground projects",
      "Own performance, accessibility and code quality",
    ],
  },
  {
    id: "creative",
    name: "Creative",
    shortName: "Creative",
    tagline: "Tells our story through visuals and film",
    description:
      "Turns fieldwork into films, posters and campaigns that make people care about the work.",
    responsibilities: [
      "Direct and edit project films and reels",
      "Design campaign visuals and social identity",
      "Document projects on ground",
    ],
  },
  {
    id: "finance",
    name: "Finance",
    shortName: "Finance",
    tagline: "Keeps every rupee accountable",
    description:
      "Models project budgets, tracks spend and builds the financial case that makes ventures sustainable.",
    responsibilities: [
      "Own project budgeting and unit economics",
      "Maintain audits, reimbursements and records",
      "Build financial models for new ventures",
    ],
  },
  {
    id: "operations",
    name: "Operations",
    shortName: "Operations",
    tagline: "Makes the plan actually happen",
    description:
      "Runs logistics, timelines and field execution so ideas move from a document to a village, campus or market.",
    responsibilities: [
      "Plan field visits and event logistics",
      "Coordinate teams, timelines and vendors",
      "Track execution against project goals",
    ],
  },
  {
    id: "mns",
    name: "MNS",
    shortName: "MNS",
    tagline: "Marketing, Networking & Sponsorship",
    description:
      "Opens doors — sponsors, partners, alumni and media — and keeps the outside world invested in us.",
    responsibilities: [
      "Pitch and close sponsorships",
      "Build partner and alumni relationships",
      "Run outreach and media campaigns",
    ],
  },
];

export const departmentMap: Record<DepartmentId, Department> = departments.reduce(
  (acc, d) => ({ ...acc, [d.id]: d }),
  {} as Record<DepartmentId, Department>,
);

export const whyJoin = [
  {
    icon: "Rocket",
    title: "Real Projects",
    description: "Work on live social ventures with real users, real budgets and real deadlines.",
  },
  {
    icon: "Crown",
    title: "Leadership",
    description: "Own a vertical, lead a team and grow into roles most students only read about.",
  },
  {
    icon: "Globe",
    title: "Networking",
    description: "Meet founders, mentors, alumni and Enactus teams from across the world.",
  },
  {
    icon: "Users",
    title: "Community",
    description: "A tight group of people who show up for each other long after the project ends.",
  },
  {
    icon: "TrendingUp",
    title: "Skill Development",
    description: "Ship work in tech, design, finance and operations that belongs in a portfolio.",
  },
  {
    icon: "HeartHandshake",
    title: "Impact",
    description: "Leave behind livelihoods, systems and stories — not just certificates.",
  },
] as const;

export const heroStats = [
  { value: 2026, label: "Nationals", suffix: "" },
  { value: 5, label: "Projects", suffix: "+" },
  { value: 400, label: "Lives touched", suffix: "+" },
  { value: 1, label: "Family", suffix: "" },
];
