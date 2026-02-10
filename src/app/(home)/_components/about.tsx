import { Section } from "~/components/section";

export function About() {
  return (
    <Section id="about" label="About">
      <div className="text-muted-foreground space-y-4">
        <p>
          I’m a computer science student who enjoys challenges that combine
          problem-solving with creativity. Programming drew me in for that
          reason, and I’m motivated by building things that feel thoughtful,
          useful, and well-designed.
        </p>

        <p>
          Through both personal projects and team experiences, I’ve worked
          across the stack to turn ideas into real products. I enjoy learning
          new tools, refining my approach, and understanding how technical
          decisions affect users and the overall product.
        </p>

        <p>
          I’m still early in my journey, but I care deeply about growth and
          continuous improvement. I’m excited to contribute to teams where I can
          share ideas, take on meaningful challenges, and learn from people who
          build great software.
        </p>
      </div>
    </Section>
  );
}
