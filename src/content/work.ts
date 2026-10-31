import type { MDXContent } from "mdx/types";

import FirstImpact from "./work/firstimpact.mdx";

export type Story = {
  company: string;
  role: string;
  location: string;
  period: string;
  Content: MDXContent;
};

const registry = {
  firstimpact: {
    company: "FirstImpact Med",
    role: "Full Stack Developer",
    location: "Remote, USA",
    period: "Mar 2026 to present",
    Content: FirstImpact,
  },
} satisfies Record<string, Story>;

export type StorySlug = keyof typeof registry;

export const stories: Record<StorySlug, Story> = registry;
