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
    options: ["First year", "Second year", "Third year", "Fourth year"],
    required: true,
  },
  { id: "branch", label: "Branch", type: "text", placeholder: "e.g. CSE, Mechanical", required: true },
  {
    id: "motivation",
    label: "Why do you want to join Enactus VITC?",
    type: "textarea",
    placeholder: "Two or three honest sentences are enough.",
    required: true,
  },
  {
    id: "availability",
    label: "Weekly availability",
    type: "radio",
    options: ["Under 4 hours", "4 — 6 hours", "6 — 10 hours", "More than 10 hours"],
    required: true,
  },
];

/** Common closing questions, asked once after the department rounds. */
export const projectQuestions: Question[] = [
  { id: "github", label: "GitHub profile", type: "link", placeholder: "https://github.com/username" },
  { id: "linkedin", label: "LinkedIn profile", type: "link", placeholder: "https://linkedin.com/in/username" },
  { id: "portfolio", label: "Portfolio / website", type: "link", placeholder: "https://yourwork.com" },

  {
    id: "bestProject",
    label: "Your best project so far",
    type: "text",
    placeholder: "Project name",
    required: true,
  },
  {
    id: "projectDescription",
    label: "Describe that project",
    type: "textarea",
    placeholder: "What was the problem, what did you build, and what happened after?",
    required: true,
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
  design: [
    {
      id: "creative_skills",
      label: "Where do you do your best work?",
      type: "checkbox",
      options: ["Graphic design", "Video editing", "Photography", "Illustration", "Motion graphics", "Copywriting", "Social content"],
      required: true,
    },
    {
      id: "creative_tools",
      label: "Primary tool",
      type: "select",
      options: ["Figma", "Adobe Photoshop", "Illustrator", "Premiere Pro / After Effects", "Canva", "DaVinci Resolve", "Other"],
      required: true,
    },
    {
      id: "creative_portfolio",
      label: "Portfolio, Behance or Drive link",
      type: "link",
      placeholder: "https://behance.net/username",
    },
    {
      id: "creative_story",
      label: "Pitch a 30 second film about a social venture",
      type: "textarea",
      placeholder: "Opening shot, the turn, the closing line.",
      required: true,
    },
    {
      id: "creative_critique",
      label: "A campaign you admire, and why it worked",
      type: "textarea",
      placeholder: "Brand, idea, and the craft decision that carried it.",
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
