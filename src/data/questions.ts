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
  {
    id: "accommodation",
    label: "Accommodation",
    type: "radio",
    options: ["Hosteller", "Day Scholar"],
    required: true,
  },
];

/** Common closing questions, asked once after the department rounds. */
export const projectQuestions: Question[] = [
  {
    id: "general_project_idea",
    label:
      "If you had the opportunity to start a new Enactus project, what problem would you choose to solve, and how would you create a solution that is both impactful and sustainable?",
    type: "textarea",
    required: true,
  },
  {
    id: "general_team_value",
    label: "What would we lose if you weren't part of this team?",
    type: "textarea",
    required: true,
  },
  {
    id: "general_memorable",
    label: "Why should we remember you?",
    type: "textarea",
    required: true,
  },
  {
    id: "additionalLinks",
    label: "Anything else you'd like us to check out?",
    type: "textarea",
    help: "Share any links that might help us know you better — GitHub, LinkedIn, portfolio, projects, resume, or anything else you'd like to share. This is completely optional and is only for additional context; it will not be considered as part of the selection criteria.",
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
      id: "design_software",
      label: "Which design software are you comfortable with?",
      type: "checkbox",
      options: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva", "Other"],
      required: true,
    },
    {
      id: "design_experience",
      label: "What type of designs have you worked on?",
      type: "textarea",
      required: true,
    },
    {
      id: "design_samples",
      label: "Upload 2–3 of your best designs (Link)",
      type: "link",
      help: "Provide a Drive/Behance link since direct file upload is currently limited.",
    },
    {
      id: "design_feedback",
      label: "How do you handle feedback or multiple revisions?",
      type: "textarea",
      required: true,
    },
    {
      id: "video_software",
      label: "Which editing software are you familiar with?",
      type: "checkbox",
      options: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut", "Final Cut Pro", "Other"],
      required: true,
    },
    {
      id: "video_samples",
      label: "Share 1–2 edited videos or reels (Link)",
      type: "link",
      help: "Provide a Drive/YouTube link since direct file upload is currently limited.",
    },
    {
      id: "video_experience",
      label: "What type of videos have you edited?",
      type: "textarea",
      required: true,
    },
    {
      id: "content_social_experience",
      label: "Have you created content for social media before? Share examples.",
      type: "textarea",
      required: true,
    },
    {
      id: "content_preferences",
      label: "What type of content do you enjoy creating? (Captions, scripts, blogs, carousel posts, etc.)",
      type: "textarea",
      required: true,
    },
    {
      id: "content_recruitment_caption",
      label: "Write a short caption promoting an upcoming recruitment drive.",
      type: "textarea",
      required: true,
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
      id: "fin_trustworthiness",
      label: "Handling finances requires honesty, accountability, and attention to detail. Why do you think you'd be a trustworthy fit for this role?",
      type: "textarea",
      required: true,
    },
    {
      id: "fin_experience",
      label: "Have you managed event or project finances before? If yes, tell us briefly about your experience.",
      type: "textarea",
      placeholder: "Tell us what you managed, your responsibilities, and what you learned.",
      required: true,
    },
  ],

  operations: [
    {
      id: "ops_role_fit",
      label: "What do you think is the role of the Operations & HR department in Enactus, and what makes you a good fit for it?",
      type: "textarea",
      required: true,
    },
    {
      id: "ops_initiative",
      label: "Tell us about a responsibility you took on that wasn't assigned to you. What motivated you, and what was the outcome?",
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
      id: "mns_qualities",
      label: "What qualities do you think are essential for an MNS member? Which of these qualities do you possess, and how have you demonstrated them?",
      type: "textarea",
      required: true,
    },
    {
      id: "mns_campaign",
      label: "What's a marketing campaign that impressed you, and how would you adapt it for Enactus?",
      type: "textarea",
      required: true,
    },
  ],
};
