import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function SputnikLessons() {
  return (
    <Card className="font-mono">
      <CardHeader>
        <CardTitle className="text-2xl">Lessons Learned</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <p>
          I could spend all day talking about the technical lessons I learned
          from this project, but the most important ones involved learning how
          to work in a professional environment for the first time.
        </p>
        <p className="mt-6">This was my first internship, so I had to learn:</p>
        <ul className="mt-2 space-y-2">
          <li>• How to collaborate effectively with a team</li>
          <li>• Meeting deadlines in a professional setting</li>
          <li>• Attending and participating in meetings</li>
          <li>• Communicating with stakeholders</li>
        </ul>
        <p className="mt-6">
          I quickly discovered that building software isn&apos;t just about
          writing code - it&apos;s about working with people, managing
          expectations, and adapting to the fast-paced world of a startup.
        </p>
      </CardContent>
    </Card>
  );
}
