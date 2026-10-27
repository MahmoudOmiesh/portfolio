import type { ProjectSlug } from "./projects";

export type Job = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  project?: ProjectSlug;
};

export const experience: Job[] = [
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
