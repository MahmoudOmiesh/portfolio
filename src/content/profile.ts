const email = "mahmoud.a.omiesh@gmail.com";
const resume = "/resume.pdf";

export const profile = {
  name: "Mahmoud Omiesh",
  role: "Full Stack Web Developer",
  meta: {
    title: "Mahmoud Omiesh | Full Stack Web Developer",
    description:
      "I am a computer science student who enjoys challenges that blend problem-solving with creativity. Programming hooked me for that reason, and I have grown through both personal projects and team experiences. I am still early in my journey, but I value learning as much as building, and I am excited to keep improving while contributing to teams where I can share ideas and learn from others.",
  },
  about: [
    "I’m a computer science student who enjoys challenges that combine problem-solving with creativity. Programming drew me in for that reason, and I’m motivated by building things that feel thoughtful, useful, and well-designed.",
    "Through both personal projects and team experiences, I’ve worked across the stack to turn ideas into real products. I enjoy learning new tools, refining my approach, and understanding how technical decisions affect users and the overall product.",
    "I’m still early in my journey, but I care deeply about growth and continuous improvement. I’m excited to contribute to teams where I can share ideas, take on meaningful challenges, and learn from people who build great software.",
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
    heading: "Let's Build Something Together",
    text: "Feel free to contact me if you have any questions or want to work together.",
    button: "Contact Me",
  },
  copyright: "Mahmoud A. Omiesh. All rights reserved.",
} as const;
