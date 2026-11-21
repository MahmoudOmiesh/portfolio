const email = "mahmoud@omiesh.dev";

export const profile = {
  name: "Mahmoud Omiesh",
  role: "Software engineer",
  location: { place: "Egypt", timeZone: "Africa/Cairo" },
  url: "https://www.omiesh.dev",
  meta: {
    title: "Mahmoud Omiesh | Software Engineer",
    description:
      "Software engineer who likes owning a feature from start to finish, from the database to the last detail on screen.",
  },
  about:
    "I build web apps, and I like owning a feature from start to finish, from the database to the last detail on screen. I'm open to remote roles, or to relocating for the right one.",
  links: {
    github: "https://github.com/MahmoudOmiesh",
    linkedin: "https://linkedin.com/in/mahmoud-omiesh",
    resume: "/resume.pdf",
  },
  email,
  cta: "Hiring, or curious about any of this?",
  copyright: "Mahmoud A. Omiesh. All rights reserved.",
} as const;
