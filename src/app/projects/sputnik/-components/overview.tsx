import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export function SputnikOverview() {
  return (
    <Card className="font-mono">
      <CardHeader>
        <CardTitle className="text-2xl">Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Badge variant="outline">
            Phase{" "}
            <span className="bg-primary text-primary-foreground grid size-4.5 place-items-center font-bold">
              1
            </span>
          </Badge>
          <h3 className="mt-1 text-lg font-semibold">Admin Dashboard & CMS</h3>
          <p className="text-muted-foreground text-sm">
            This phase focused on building a comprehensive admin dashboard to
            support business operations and content management.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-muted-foreground font-medium">
                Content Management
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Course creation & management</li>
                <li>• Instructor profile handling</li>
                <li>• Student progress tracking</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-muted-foreground font-medium">
                Business Operations
              </h4>
              <ul className="ml-2 space-y-1 text-sm">
                <li>• E-commerce & order management</li>
                <li>• Coupon systems</li>
                <li>• Game kit inventory</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-border/50 my-8 border-t" />

        <div>
          <Badge variant="outline">
            Phase{" "}
            <span className="bg-primary text-primary-foreground grid size-4.5 place-items-center font-bold">
              2
            </span>
          </Badge>
          <h3 className="mt-1 text-lg font-semibold">
            User Platform & Features
          </h3>
          <p className="text-muted-foreground text-sm">
            This phase focused on building a user-facing platform with a
            complete learning experience.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-muted-foreground font-medium">
                Learning Experience
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Progress tracking & dashboards</li>
                <li>• Interactive video lessons</li>
                <li>• Quiz submissions & reviews</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-muted-foreground font-medium">
                Shopping & Access
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Course browsing & filtering</li>
                <li>• Shopping cart functionality</li>
                <li>• Paymob payment processing</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
