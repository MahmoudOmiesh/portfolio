import {
  AWSIcon,
  CppIcon,
  DrizzleIcon,
  ExpressIcon,
  GoIcon,
  HonoIcon,
  NextjsIcon,
  PostgreSQLIcon,
  PrismaIcon,
  ReactIcon,
  TrpcIcon,
  TypescriptIcon,
} from "~/components/tech-icons";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const SKILLS = [
  {
    name: "TypeScript",
    icon: TypescriptIcon,
  },
  {
    name: "C++",
    icon: CppIcon,
  },
  {
    name: "Go",
    icon: GoIcon,
  },
  {
    name: "Next.js",
    icon: NextjsIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Express",
    icon: ExpressIcon,
  },
  {
    name: "Hono",
    icon: HonoIcon,
  },
  {
    name: "tRPC",
    icon: TrpcIcon,
  },
  {
    name: "Prisma",
    icon: PrismaIcon,
  },
  {
    name: "Drizzle",
    icon: DrizzleIcon,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQLIcon,
  },
  {
    name: "AWS",
    icon: AWSIcon,
  },
];

export function Skills() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <Badge variant="outline" key={skill.name} className="text-sm">
              <skill.icon /> {skill.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
