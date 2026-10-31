import type { MDXContent } from "mdx/types";

import FirstImpact from "./work/firstimpact.mdx";
import FirstImpactReviewTool from "./work/firstimpact-review-tool.mdx";

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

const registry = {
  firstimpact: { title: "The FirstImpact platform", ...firstImpactJob, Content: FirstImpact },
  "firstimpact-review-tool": { title: "The note review tool", ...firstImpactJob, Content: FirstImpactReviewTool },
} satisfies Record<string, Story>;

export type StorySlug = keyof typeof registry;

export const stories: Record<StorySlug, Story> = registry;
