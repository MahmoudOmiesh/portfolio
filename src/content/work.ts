import type { MDXContent } from "mdx/types";

import FirstImpact from "./work/firstimpact.mdx";
import FirstImpactReviewTool from "./work/firstimpact-review-tool.mdx";
import Logibytes from "./work/logibytes.mdx";
import Sputnik from "./work/sputnik.mdx";

export type Cover = { src: string; width: number; height: number };

export type Story = {
  title: string;
  cover: Cover;
  company: string;
  role: string;
  location: string;
  period: string;
  Content: MDXContent;
};

const firstImpactJob = {
  company: "FirstImpact Med",
  role: "Full Stack Developer",
  location: "Remote, USA",
  period: "Mar 2026 to present",
};

const logibytesJob = {
  company: "Logibytes",
  role: "Part-time Frontend Developer",
  location: "Remote, Saudi Arabia",
  period: "Feb 2026 to present",
};

const sputnikJob = {
  company: "Sputnik Academy",
  role: "Fullstack Intern",
  location: "Remote, Egypt",
  period: "Mar to Aug 2025",
};

const registry = {
  firstimpact: {
    title: "The FirstImpact platform",
    cover: { src: "/firstimpact/intake.webp", width: 1815, height: 1266 },
    ...firstImpactJob,
    Content: FirstImpact,
  },
  "firstimpact-review-tool": {
    title: "The note review tool",
    cover: { src: "/firstimpact/formal-review.webp", width: 1983, height: 1386 },
    ...firstImpactJob,
    Content: FirstImpactReviewTool,
  },
  logibytes: {
    title: "The fleet and merchant portals",
    cover: { src: "/logibytes/live-map.webp", width: 2352, height: 1672 },
    ...logibytesJob,
    Content: Logibytes,
  },
  sputnik: {
    title: "The Sputnik Academy platform",
    cover: { src: "/sputnik/course-viewer.webp", width: 2400, height: 1988 },
    ...sputnikJob,
    Content: Sputnik,
  },
} satisfies Record<string, Story>;

export type StorySlug = keyof typeof registry;

export const stories: Record<StorySlug, Story> = registry;
