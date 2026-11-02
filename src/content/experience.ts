import type { StorySlug } from "./work";

export type Job = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  stories?: StorySlug[];
};

export const experience: Job[] = [
  {
    role: "Full Stack Developer",
    company: "FirstImpact Med",
    startDate: "Mar 2026",
    endDate: "present",
    description:
      "I work on a platform that takes personal-injury patients from an AI intake to a report signed by a doctor, and I built an internal AI tool that reviews doctors' notes.",
    stories: ["firstimpact", "firstimpact-review-tool"],
  },
  {
    role: "Part-time Frontend Developer",
    company: "Logibytes",
    startDate: "Feb 2026",
    endDate: "present",
    description:
      "I built a fleet portal for companies that run their own trucks, and a portal where online stores ship their orders, both in Arabic and English.",
    stories: ["logibytes"],
  },
  {
    role: "Fullstack Intern",
    company: "Sputnik Academy",
    startDate: "Mar",
    endDate: "Aug 2025",
    description: "I worked on an online learning platform for kids during my internship.",
    stories: ["sputnik"],
  },
];
