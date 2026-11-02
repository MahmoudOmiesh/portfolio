const email = "mahmoud.a.omiesh@gmail.com";

export const profile = {
  name: "Mahmoud Omiesh",
  url: "https://mahmoudomiesh.vercel.app",
  meta: {
    title: "Mahmoud Omiesh | Software Engineer",
    description:
      "Software engineer who likes owning a feature from start to finish, from the database to the last detail on screen.",
  },
  about: [
    "I build web apps, and I like owning a feature from start to finish, from the database to the last detail on screen.",
    "I'm open to remote roles, or to relocating for the right one.",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/MahmoudOmiesh", newTab: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/mahmoud-omiesh", newTab: true },
    { label: "Résumé", href: "/resume.pdf", newTab: true },
    { label: "Email", href: `mailto:${email}`, newTab: false },
  ],
  email,
  cta: { text: "Hiring, or curious about any of this?", button: "Email me" },
  copyright: "Mahmoud A. Omiesh. All rights reserved.",
} as const;
