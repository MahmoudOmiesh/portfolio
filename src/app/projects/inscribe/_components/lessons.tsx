import { Section } from "~/components/section";

export function InscribeLessons() {
  return (
    <Section>
      <h2 className="text-base font-bold tracking-tight text-slate-200 md:text-lg">
        Lessons Learned
      </h2>

      <div className="text-muted-foreground mt-4 space-y-6 text-sm leading-relaxed">
        <p>
          This project taught me way more than I expected, especially about the
          hidden complexity in things that seem simple on the surface. Text
          editing is deceptively hard - what looks like &quot;just typing&quot;
          involves managing selections, handling browser inconsistencies, and
          dealing with contentEditable quirks.
        </p>
        <p>
          Most importantly, I learned that building from scratch teaches you
          more than using existing solutions ever could, even if it takes ten
          times longer. Every edge case that libraries handle becomes your
          problem to solve.
        </p>
      </div>
    </Section>
  );
}
