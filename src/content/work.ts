import type { MDXContent } from "mdx/types";

import FirstImpact from "./work/firstimpact.mdx";
import FirstImpactReviewTool from "./work/firstimpact-review-tool.mdx";
import Logibytes from "./work/logibytes.mdx";

export type Story = {
  title: string;
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
  role: "Frontend Developer",
  location: "Remote, Saudi Arabia",
  period: "Feb 2026 to present",
};

const registry = {
  firstimpact: { title: "The FirstImpact platform", ...firstImpactJob, Content: FirstImpact },
  "firstimpact-review-tool": { title: "The note review tool", ...firstImpactJob, Content: FirstImpactReviewTool },
  logibytes: { title: "The fleet and merchant portals", ...logibytesJob, Content: Logibytes },
} satisfies Record<string, Story>;

export type StorySlug = keyof typeof registry;

export const stories: Record<StorySlug, Story> = registry;
