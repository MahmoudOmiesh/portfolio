import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="mx-auto max-w-160 px-6 pt-24">
      <h1 className="font-medium">Mahmoud Omiesh</h1>
    </main>
  );
}
