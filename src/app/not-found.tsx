import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">looks like you&apos;re lost</p>
      <Button asChild className="mt-6">
        <Link href="/">Take me home</Link>
      </Button>
    </div>
  );
}
