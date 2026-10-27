import { createFileRoute } from "@tanstack/react-router";

import { profile } from "@/content/profile";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="mx-auto max-w-160 px-6 pt-24">
      <h1 className="font-medium">{profile.name}</h1>
    </main>
  );
}
