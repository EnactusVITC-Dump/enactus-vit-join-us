import type { DepartmentId } from "./departments";

export type QuestionType =
  | "text"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox"
  | "link";

export interface Question {
  id: string;
  label: string;
  type: QuestionType;
  placeholder?: string;
  help?: string;
  required?: boolean;
  options?: string[];
}

/** Personal details, asked once for everyone. */
export const personalQuestions: Question[] = [
  { id: "fullName", label: "Full name", type: "text", placeholder: "Your name", required: true },
  {
    id: "email",
    label: "Email ID",
    type: "text",
    placeholder: "you@vitstudent.ac.in",
    required: true,
  },
  { id: "phone", label: "Phone number", type: "text", placeholder: "10 digit number", required: true },
  { id: "registration", label: "Registration number", type: "text", placeholder: "24BCE1234", required: true },
  {
    id: "year",
    label: "Academic year",
    type: "select",
    options: ["First year", "Second year"],
    required: true,
  },
  {
    id: "motivation",
    label: "Why do you want to join Enactus VITC?",
    type: "textarea",
    placeholder: "Two or three honest sentences are enough.",
    required: true,
  },
];

/** Common closing questions, asked once after the department rounds. */
export const projectQuestions: Question[] = [
  {
    id: "additionalLinks",
    label: "Anything else you'd like us to check out?",
    type: "textarea",
    help: "Share any links that might help us know you better — GitHub, LinkedIn, portfolio, projects, resume, or anything else you'd like to share. This is completely optional and is only for additional context; it will not be considered as part of the selection criteria.",
  },
  {
    id: "bestProject",
    label: "Your best project so far",
    type: "text",
    placeholder: "Project name",
  },
  {
    id: "projectDescription",
    label: "Describe that project",
    type: "textarea",
    placeholder: "What was the problem, what did you build, and what happened after?",
  },
];

export const departmentQuestions: Record<DepartmentId, Question[]> = {
  tech: [
    {
      id: "tech_stack",
      label: "Which technologies are you comfortable with?",
      type: "checkbox",
      options: ["HTML / CSS", "JavaScript", "React / Next.js", "Node.js", "Python", "Databases", "UI libraries", "Git"],
      required: true,
    },
    {
      id: "tech_level",
      label: "How would you describe your current level?",
      type: "radio",
      options: ["Just starting out", "Built a few small projects", "Comfortable shipping features", "Can own a full product"],
      required: true,
    },
    {
      id: "tech_build",
      label: "Describe something you have built end to end",
      type: "textarea",
      placeholder: "What it does, what you chose to use, and what broke along the way.",
      required: true,
    },
    {
      id: "tech_repo",
      label: "Link to code you are proud of",
      type: "link",
      placeholder: "https://github.com/username/project",
    },
    {
      id: "tech_idea",
      label: "One digital tool that would make our field projects easier",
      type: "textarea",
      placeholder: "Be specific — who uses it and what changes for them?",
      required: true,
    },
  ],
  creative: [
    {
      id: "design_skills",
      label: "Where do you do your best work?",
      type: "checkbox",
      options: ["Graphic design", "Video editing", "Photography", "Illustration", "Motion graphics", "Copywriting", "Social content"],
      required: true,
    },
    {
      id: "design_tools",
      label: "Primary tool",
      type: "select",
      options: ["Figma", "Adobe Photoshop", "Illustrator", "Premiere Pro / After Effects", "Canva", "DaVinci Resolve", "Other"],
      required: true,
    },
    {
      id: "design_portfolio",
      label: "Portfolio, Behance or Drive link",
      type: "link",
      placeholder: "https://behance.net/username",
    },
    {
      id: "design_story",
      label: "Pitch a 30 second film about a social venture",
      type: "textarea",
      placeholder: "Opening shot, the turn, the closing line.",
      required: true,
    },
    {
      id: "design_critique",
      label: "A campaign you admire, and why it worked",
      type: "textarea",
      placeholder: "Brand, idea, and the craft decision that carried it.",
    },
  ],
  finance: [
    {
      id: "fin_skills",
      label: "Where are your financial skills strongest?",
      type: "checkbox",
      options: [
        "Budgeting & allocation",
        "Expense tracking & auditing",
        "Financial modeling & planning",
        "Sponsorship negotiation support",
        "Excel / Google Sheets formulas",
        "Accounting principles",
      ],
      required: true,
    },
    {
      id: "fin_experience",
      label: "Have you managed event or project finances before?",
      type: "radio",
      options: [
        "Managed finances for a school/college club or event",
        "Managed personal freelance/project budgets",
        "No previous experience, but very interested to learn",
      ],
      required: true,
    },
    {
      id: "fin_budget_scenario",
      label: "A social project needs a ₹25,000 budget, but you only have ₹15,000 allocated. How do you approach this?",
      type: "textarea",
      placeholder: "Where would you look to cut costs, optimize resources, or find alternative support?",
      required: true,
    },
    {
      id: "fin_tools",
      label: "Which tools do you use for tracking data or budgets?",
      type: "checkbox",
      options: ["Microsoft Excel", "Google Sheets", "Tally", "Notion databases", "Pen & paper / physical ledgers"],
      required: true,
    },
  ],

  operations: [
    {
      id: "ops_experience",
      label: "Where have you organised something before?",
      type: "checkbox",
      options: ["School / college events", "Clubs and chapters", "Sports teams", "NGO or volunteering", "Fests", "Nowhere yet"],
      required: true,
    },
    {
      id: "ops_style",
      label: "How do you keep a plan on track?",
      type: "radio",
      options: ["Detailed trackers", "Daily check-ins", "Clear owners per task", "All of the above"],
      required: true,
    },
    {
      id: "ops_crisis",
      label: "A field visit falls apart 12 hours before. What do you do?",
      type: "textarea",
      placeholder: "Walk us through the first three calls you make.",
      required: true,
    },
    {
      id: "ops_scale",
      label: "One process at Enactus VITC you would systemise first",
      type: "textarea",
      required: true,
    },
  ],
  mns: [
    {
      id: "mns_focus",
      label: "What are you strongest at?",
      type: "checkbox",
      options: ["Cold outreach", "Sponsorship pitching", "Partnerships", "Social media", "PR and media", "Alumni relations"],
      required: true,
    },
    {
      id: "mns_confidence",
      label: "Comfort with talking to strangers on a call",
      type: "radio",
      options: ["Still nervous", "Getting there", "Very comfortable"],
      required: true,
    },
    {
      id: "mns_pitch",
      label: "Pitch Enactus VITC to a sponsor in 80 words",
      type: "textarea",
      placeholder: "Assume they have never heard of us.",
      required: true,
    },
    {
      id: "mns_brands",
      label: "Three brands you would approach this year, and why",
      type: "textarea",
      required: true,
    },
  ],
};
