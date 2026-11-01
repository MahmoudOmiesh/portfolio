const email = "mahmoud.a.omiesh@gmail.com";
const resume = "/resume.pdf";

export const profile = {
  name: "Mahmoud Omiesh",
  role: "Software Engineer",
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
    { label: "Résumé", href: resume, newTab: true },
    { label: "Contact", href: `mailto:${email}`, newTab: false },
  ],
  resume: { label: "View Full Résumé", href: resume },
  email,
  cta: {
    heading: "Get in touch",
    text: "If you're hiring or want to talk about any of this work, email me.",
    button: "Email me",
  },
  copyright: "Mahmoud A. Omiesh. All rights reserved.",
} as const;
