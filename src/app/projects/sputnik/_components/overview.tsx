import { FrostedHover } from "~/components/frosted-hover";
import { Section } from "~/components/section";

export function SputnikOverview() {
  return (
    <Section>
      <h2 className="text-base font-bold tracking-tight text-slate-200 md:text-lg">
        Project Overview
      </h2>

      <ol className="group/list mt-8 space-y-12">
        <li>
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
            <FrostedHover />

            <header className="z-10 mt-1 mb-2 sm:col-span-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                Phase 1
              </span>
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="text-base leading-tight font-medium text-slate-200">
                Admin Dashboard & CMS
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-normal">
                This phase focused on building a comprehensive admin dashboard
                to support business operations and content management.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Content Management
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Course creation & management</li>
                    <li>• Instructor profile handling</li>
                    <li>• Student progress tracking</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Business Operations
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• E-commerce & order management</li>
                    <li>• Coupon systems</li>
                    <li>• Game kit inventory</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

            <header className="z-10 mt-1 mb-2 sm:col-span-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                Phase 2
              </span>
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="text-base leading-tight font-medium text-slate-200">
                User Platform & Features
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-normal">
                This phase focused on building a user-facing platform with a
                complete learning experience.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Learning Experience
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Progress tracking & dashboards</li>
                    <li>• Interactive video lessons</li>
                    <li>• Quiz submissions & reviews</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Shopping & Access
                  </h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Course browsing & filtering</li>
                    <li>• Shopping cart functionality</li>
                    <li>• Paymob payment processing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </Section>
  );
}
