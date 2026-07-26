export interface TimelineStep {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const timeline: TimelineStep[] = [
  {
    id: "applications",
    title: "Applications",
    date: "Jul 20 — Jul 24",
    description: "Fill the form, pick two departments and tell us what you want to build.",
  },
  {
    id: "shortlisting",
    title: "Shortlisting",
    date: "Jul 25",
    description: "We read every answer. Shortlists go out over email and WhatsApp.",
  },
  {
    id: "interviews",
    title: "Interviews",
    date: "Jul 28 — Jul 30",
    description: "A conversation, not an exam. Department leads meet you in person.",
  },
  {
    id: "selections",
    title: "Selections",
    date: "Jul 31",
    description: "Final results announced along with your department allocation.",
  },
  {
    id: "orientation",
    title: "Orientation",
    date: "Aug 05",
    description: "Meet the team, get your project brief and start week one.",
  },
];
