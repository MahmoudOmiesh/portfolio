import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function InscribeLessons() {
  return (
    <Card className="font-mono">
      <CardHeader>
        <CardTitle className="text-2xl">Lessons Learned</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <p>
          This project taught me way more than I expected, especially about the
          hidden complexity in things that seem simple on the surface. Text
          editing is deceptively hard - what looks like &quot;just typing&quot;
          involves managing selections, handling browser inconsistencies, and
          dealing with contentEditable quirks.
        </p>
        <p className="mt-6">
          Most importantly, I learned that building from scratch teaches you
          more than using existing solutions ever could, even if it takes ten
          times longer. Every edge case that libraries handle becomes your
          problem to solve.
        </p>
      </CardContent>
    </Card>
  );
}
