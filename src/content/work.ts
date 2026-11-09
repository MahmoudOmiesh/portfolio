import * as FirstImpact from "./work/firstimpact.mdx";
import * as FirstImpactReviewTool from "./work/firstimpact-review-tool.mdx";
import * as Logibytes from "./work/logibytes.mdx";
import * as Sputnik from "./work/sputnik.mdx";

export type Article = typeof FirstImpact;

export type Cover = {
  src: string;
  width: number;
  height: number;
  position?: string;
  phone?: { zoom: number; origin: string };
};

type Story = {
  slug: string;
  title: string;
  cover: Cover;
  article: Article;
};

type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  stories: Story[];
};

export const jobs: Job[] = [
  {
    company: "FirstImpact Med",
    role: "Full Stack Developer",
    location: "Remote, USA",
    period: "Mar 2026 to present",
    description:
      "I work on a platform that takes personal-injury patients from an AI intake to a report signed by a doctor, and I built an internal AI tool that reviews doctors' notes.",
    stories: [
      {
        slug: "firstimpact",
        title: "The FirstImpact platform",
        cover: {
          src: "/firstimpact/intake.webp",
          width: 1815,
          height: 1266,
          position: "bottom",
          phone: { zoom: 3.2, origin: "0% 70%" },
        },
        article: FirstImpact,
      },
      {
        slug: "firstimpact-review-tool",
        title: "The note review tool",
        cover: {
          src: "/firstimpact/formal-review.webp",
          width: 1983,
          height: 1386,
          position: "50% 92%",
          phone: { zoom: 1.6, origin: "0% 30%" },
        },
        article: FirstImpactReviewTool,
      },
    ],
  },
  {
    company: "Logibytes",
    role: "Part-time Frontend Developer",
    location: "Remote, Saudi Arabia",
    period: "Feb 2026 to present",
    description:
      "I built a fleet portal for companies that run their own trucks, and a portal where online stores ship their orders, both in Arabic and English.",
    stories: [
      {
        slug: "logibytes",
        title: "The fleet and merchant portals",
        cover: { src: "/logibytes/live-map.webp", width: 2352, height: 1672, phone: { zoom: 2.2, origin: "0% 0%" } },
        article: Logibytes,
      },
    ],
  },
  {
    company: "Sputnik Academy",
    role: "Fullstack Intern",
    location: "Remote, Egypt",
    period: "Mar to Aug 2025",
    description: "I worked on an online learning platform for kids during my internship.",
    stories: [
      {
        slug: "sputnik",
        title: "The Sputnik Academy platform",
        cover: {
          src: "/sputnik/course-viewer.webp",
          width: 2400,
          height: 1988,
          position: "50% 4%",
          phone: { zoom: 1.45, origin: "90% 0%" },
        },
        article: Sputnik,
      },
    ],
  },
];

export const storiesBySlug = new Map<string, { story: Story; job: Job }>(
  jobs.flatMap((job) => job.stories.map((story) => [story.slug, { story, job }])),
);
