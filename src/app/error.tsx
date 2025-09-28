"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Error() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Error</h1>
      <p className="text-lg">Something went wrong</p>
      <Button asChild className="mt-6">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}
