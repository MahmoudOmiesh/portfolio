import type { ProjectSlug } from "./projects";
import type { StorySlug } from "./work";

export type Job = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  project?: ProjectSlug;
  stories?: StorySlug[];
};

export const experience: Job[] = [
  {
    role: "Full Stack Developer",
    company: "FirstImpact Med",
    startDate: "Mar 2026",
    endDate: "Present",
    description:
      "A platform that takes personal-injury patients from an AI intake to a report signed by a doctor, and an internal AI tool that reviews doctors' notes.",
    technologies: ["TanStack Start", "tRPC", "Drizzle", "Inngest", "Vercel AI SDK"],
    stories: ["firstimpact", "firstimpact-review-tool"],
  },
  {
    role: "Fullstack Intern",
    company: "Sputnik Academy",
    startDate: "Mar",
    endDate: "Aug 2025",
    description: "An online learning platform for kids I worked on during my internship at Sputnik Academy.",
    technologies: ["React", "TypeScript", "TanStack Router", "Hono"],
    project: "sputnik",
  },
];
