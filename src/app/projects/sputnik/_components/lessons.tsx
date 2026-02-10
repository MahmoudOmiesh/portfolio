import { Section } from "~/components/section";

export function SputnikLessons() {
  return (
    <Section>
      <h2 className="text-base font-bold tracking-tight text-slate-200 md:text-lg">
        Lessons Learned
      </h2>

      <div className="text-muted-foreground mt-4 space-y-6 text-sm leading-relaxed">
        <p>
          I could spend all day talking about the technical lessons I learned
          from this project, but the most important ones involved learning how
          to work in a professional environment for the first time.
        </p>
        <p>This was my first internship, so I had to learn:</p>
        <ul className="space-y-2">
          <li>• How to collaborate effectively with a team</li>
          <li>• Meeting deadlines in a professional setting</li>
          <li>• Attending and participating in meetings</li>
          <li>• Communicating with stakeholders</li>
        </ul>
        <p>
          I quickly discovered that building software isn&apos;t just about
          writing code - it&apos;s about working with people, managing
          expectations, and adapting to the fast-paced world of a startup.
        </p>
      </div>
    </Section>
  );
}
