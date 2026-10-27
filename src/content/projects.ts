import { CloudDownloadIcon, LockIcon, RefreshCwIcon, User2Icon, type LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

import {
  AWSIcon,
  BetterAuthIcon,
  CppIcon,
  DexieIcon,
  FloatingUiIcon,
  HonoIcon,
  MuxIcon,
  NextjsIcon,
  PaymobIcon,
  PostgreSQLIcon,
  PrismaIcon,
  QtIcon,
  ReactHookFormIcon,
  ReactIcon,
  ShadcnIcon,
  TailwindIcon,
  TanstackQueryIcon,
  TanstackRouterIcon,
  TrpcIcon,
  TypescriptIcon,
} from "@/components/tech-icons";

/** Inline markup: `code` renders as code, **text** as emphasis. */
export type RichText = string;

export type Technology = { name: string; icon: ComponentType<{ className?: string }> };

export type ImageAsset = { src: string; width: number; height: number };

export type Media =
  | ({ kind: "image"; adminOnly?: boolean } & ImageAsset)
  | { kind: "video"; src: string; name: string; width: number; height: number };

export type OverviewItem = {
  label: string;
  title: string;
  body?: string[];
  groups?: { heading: string; items: RichText[] }[];
  legend?: { label: string; color: string }[];
};

export type SpotlightItem = { label: string; icon: LucideIcon; title: string; bullets: RichText[] };

export type Project = {
  title: string;
  /** Present when the project has a card in the home Projects section. */
  card?: { summary: string; technologies: string[]; cover: ImageAsset & { grayscale?: boolean } };
  liveUrl?: string;
  sourceUrl: string;
  description: string;
  technologies: Technology[];
  overview?: OverviewItem[];
  gallery?: { heading: string; caption: string; media: Media[] };
  spotlight?: { intro: string; items: SpotlightItem[]; callout: { label: string; text: string } };
  /** A string is a paragraph, an array is a bulleted list. */
  lessons?: (string | string[])[];
};

const screenshot = { kind: "image", width: 1666, height: 976 } as const;
const recording = { kind: "video", width: 1234, height: 720 } as const;

const registry = {
  inscribe: {
    title: "Inscribe",
    card: {
      summary: "A local first note-taking app, with a custom text editor",
      technologies: ["Next.js", "TypeScript", "tRPC", "Dexie"],
      cover: { src: "/inscribe/landing-page.png", width: 1666, height: 976 },
    },
    liveUrl: "https://inscribe-notes.vercel.app/",
    sourceUrl: "https://github.com/MahmoudOmiesh/Inscribe",
    description:
      "Inscribe is a modern, local-first note-taking application with AI-powered writing assistance that I built as a solo personal project using Next.js, and tRPC. This application features a completely custom-built rich text editor from scratch, real-time sync capabilities, and integrated AI writing assistance.",
    technologies: [
      { name: "Next.js", icon: NextjsIcon },
      { name: "TypeScript", icon: TypescriptIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "Shadcn UI", icon: ShadcnIcon },
      { name: "Tanstack Query", icon: TanstackQueryIcon },
      { name: "Floating UI", icon: FloatingUiIcon },
      { name: "tRPC", icon: TrpcIcon },
      { name: "Dexie", icon: DexieIcon },
      { name: "Prisma", icon: PrismaIcon },
      { name: "PostgreSQL", icon: PostgreSQLIcon },
      { name: "Better Auth", icon: BetterAuthIcon },
    ],
    overview: [
      {
        label: "Phase 1",
        title: "Building the Rich Text Editor",
        body: [
          "I decided to build a completely custom rich text editor instead of using existing solutions just for fun (it wasn't fun). It's built with a transaction-based architecture and custom input handling to intercept browser events.",
        ],
        groups: [
          {
            heading: "Rich Formatting",
            items: [
              "All standard formatting (bold, italic, etc.)",
              "Semantic structure (headings, quotes, etc.)",
              "Unordered lists, ordered lists, and checklists all with support for nesting items",
            ],
          },
          {
            heading: "Interactive Features",
            items: [
              "Floating toolbar on text selection",
              "Context handle `⠿` when hovering near blocks",
              "Command menu with `/`",
              "Emoji picker with `:`",
            ],
          },
        ],
      },
      {
        label: "Phase 2",
        title: "Creating the Local-First Note App",
        body: [
          "I Built a proper note-taking app around the editor that works offline-first with IndexedDB (with Dexie). The sync system tracks changes and syncs them in the background when you're online.",
        ],
        groups: [
          {
            heading: "Organization & Functionality",
            items: ["Folders with custom emojis", "Favorites, archive, and trash", "Full-text search indexing"],
          },
          {
            heading: "Other Features",
            items: [
              "AI writing assistant with real-time streaming",
              "Background sync with operation queue",
              "Export to clean Markdown or styled HTML",
            ],
          },
        ],
      },
    ],
    gallery: {
      heading: "Take a Peek",
      caption: "Here are some screenshots of the project.",
      media: [
        { ...screenshot, src: "/inscribe/landing-page.png" },
        { ...screenshot, src: "/inscribe/note.png" },
        { ...screenshot, src: "/inscribe/note-favorite.png" },
        { ...screenshot, src: "/inscribe/note-archive.png" },
        { ...screenshot, src: "/inscribe/note-trash.png" },
        { ...screenshot, src: "/inscribe/note-font.png" },
        { ...screenshot, src: "/inscribe/note-search.png" },
      ],
    },
    spotlight: {
      intro:
        "Don't get me wrong, I really like the custom rich text editor I built from scratch, but honestly what I want to talk about is the sync system.",
      items: [
        {
          label: "Offline-First",
          icon: CloudDownloadIcon,
          title: "Local-First Architecture",
          bullets: [
            "Data lives primarily on the device, with server as a backup",
            "Every user action gets queued as an operation in IndexedDB",
            "The sync system never blocks you waiting for network requests - you're always productive even when offline",
            "Pending operations are synced in the background when you're online",
            "Failed operations are retried automatically",
          ],
        },
        {
          label: "Real-Time Sync",
          icon: RefreshCwIcon,
          title: "Multi-Device Harmony",
          bullets: [
            "Incremental sync only pulls changes from the server since last successful sync",
            "Last-write-wins approach keeps things simple but effective",
            "Real-time updates through `tRPC` using server-sent events (SSE)",
            "A mutation status store to tell you when changes are syncing",
            "Remote updates are merged with local state, preserving any user actions made during sync even if incoming data conflicts",
          ],
        },
      ],
      callout: {
        label: "Why this matters:",
        text: "Most apps break when you go offline or have slow connections. This architecture ensures you can always work productively, no matter the situation and your data is always in sync.",
      },
    },
    lessons: [
      'This project taught me way more than I expected, especially about the hidden complexity in things that seem simple on the surface. Text editing is deceptively hard - what looks like "just typing" involves managing selections, handling browser inconsistencies, and dealing with contentEditable quirks.',
      "Most importantly, I learned that building from scratch teaches you more than using existing solutions ever could, even if it takes ten times longer. Every edge case that libraries handle becomes your problem to solve.",
    ],
  },

  "sorting-visualizer": {
    title: "Sorting Visualizer",
    card: {
      summary: "A visualizer for popular sorting alogrithms, with step-by-step demonstrations.",
      technologies: ["C++", "QT"],
      cover: { src: "/visualizer/base.png", width: 1680, height: 975, grayscale: true },
    },
    sourceUrl: "https://github.com/MahmoudOmiesh/Sorting-Visualizer",
    description:
      "I built this interactive desktop application in C++ using the Qt6 framework to help people understand how different sorting algorithms actually work behind the scenes. The app visualizes six classic sorting algorithms (bubble sort, selection sort, insertion sort, merge sort, quick sort, and heap sort) by showing colorful bars that represent array elements being compared, swapped, and moved around in real-time.",
    technologies: [
      { name: "C++", icon: CppIcon },
      { name: "Qt", icon: QtIcon },
    ],
    overview: [
      {
        label: "Algorithms",
        title: "Core Algorithms & Visualization",
        groups: [
          {
            heading: "Implemented Algorithms",
            items: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
          },
          {
            heading: "Interactive Controls",
            items: [
              "Scalable element count (hundreds of data points)",
              "Adjustable animation speed",
              "Start, stop, and shuffle functionality",
              "Each bar represents an array element with height corresponding to its value",
            ],
          },
        ],
      },
      {
        label: "Visual",
        title: "Visual Feedback System",
        body: [
          "The application leverages Qt's powerful graphics framework to represent individual array elements as dynamic bars that update in real-time during sorting operations, with color-coded indicators.",
        ],
        legend: [
          { label: "active comparisons", color: "oklch(72.3% 0.219 149.579)" },
          { label: "element swaps", color: "oklch(63.7% 0.237 25.331)" },
          { label: "pivot points", color: "oklch(62.7% 0.265 303.9)" },
        ],
      },
      {
        label: "Architecture",
        title: "Architecture",
        body: [
          "The codebase follows a clean separation of concerns with a main sorter class handling UI and graphics operations, while a dedicated visualizer worker class implements the core sorting algorithms.",
          "The application uses multi-threading to maintain UI responsiveness during intensive sorting operations. The main thread manages graphics rendering and user interface interactions, while sorting algorithms execute on a separate worker thread, preventing UI blocking and ensuring smooth real-time visualization.",
        ],
      },
    ],
    gallery: {
      heading: "See it in Action",
      caption: "Here are some examples of the app in action.",
      media: [
        { ...recording, src: "/visualizer/bubble.mp4", name: "Bubble Sort" },
        { ...recording, src: "/visualizer/selection.mp4", name: "Selection Sort" },
        { ...recording, src: "/visualizer/insertion.mp4", name: "Insertion Sort" },
        { ...recording, src: "/visualizer/merge.mp4", name: "Merge Sort" },
        { ...recording, src: "/visualizer/quick.mp4", name: "Quick Sort" },
        { ...recording, src: "/visualizer/heap.mp4", name: "Heap Sort" },
      ],
    },
  },

  sputnik: {
    title: "Sputnik",
    liveUrl: "https://www.linkedin.com/company/sputnik-academy/",
    sourceUrl: "https://github.com/abdalrahmanf2/sputnik",
    description:
      "Sputnik is a space-themed online learning platform for kids, I built this during my internship at Sputnik Academy alongside a team of 3 other interns with React, Hono and TypeScript. This application required a lot of team work to create a seamless experience for the users, and allow the admins to manage the content easily.",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypescriptIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "Shadcn UI", icon: ShadcnIcon },
      { name: "Tanstack Router", icon: TanstackRouterIcon },
      { name: "Tanstack Query", icon: TanstackQueryIcon },
      { name: "React Hook Form", icon: ReactHookFormIcon },
      { name: "Hono", icon: HonoIcon },
      { name: "Prisma", icon: PrismaIcon },
      { name: "PostgreSQL", icon: PostgreSQLIcon },
      { name: "AWS", icon: AWSIcon },
      { name: "Mux", icon: MuxIcon },
      { name: "Paymob", icon: PaymobIcon },
    ],
    overview: [
      {
        label: "Phase 1",
        title: "Admin Dashboard & CMS",
        body: [
          "This phase focused on building a comprehensive admin dashboard to support business operations and content management.",
        ],
        groups: [
          {
            heading: "Content Management",
            items: ["Course creation & management", "Instructor profile handling", "Student progress tracking"],
          },
          {
            heading: "Business Operations",
            items: ["E-commerce & order management", "Coupon systems", "Game kit inventory"],
          },
        ],
      },
      {
        label: "Phase 2",
        title: "User Platform & Features",
        body: ["This phase focused on building a user-facing platform with a complete learning experience."],
        groups: [
          {
            heading: "Learning Experience",
            items: ["Progress tracking & dashboards", "Interactive video lessons", "Quiz submissions & reviews"],
          },
          {
            heading: "Shopping & Access",
            items: ["Course browsing & filtering", "Shopping cart functionality", "Paymob payment processing"],
          },
        ],
      },
    ],
    gallery: {
      heading: "Take a Peek",
      caption: "Here are some screenshots of the project.",
      media: [
        { ...screenshot, src: "/sputnik/landing-page.png" },
        { ...screenshot, src: "/sputnik/landing-faq.png" },
        { ...screenshot, src: "/sputnik/landing-why.png" },
        { ...screenshot, src: "/sputnik/user-courses.png" },
        { ...screenshot, src: "/sputnik/user-course.png" },
        { ...screenshot, src: "/sputnik/user-orders.png" },
        { ...screenshot, src: "/sputnik/user-checkout.png" },
        { ...screenshot, src: "/sputnik/admin-courses.png", adminOnly: true },
        { ...screenshot, src: "/sputnik/admin-course-sections.png", adminOnly: true },
        { ...screenshot, src: "/sputnik/admin-course-students.png", adminOnly: true },
        { ...screenshot, src: "/sputnik/admin-orders.png", adminOnly: true },
      ],
    },
    spotlight: {
      intro: "What I'm most proud of in this project is the end-to-end video pipeline built using Mux.",
      items: [
        {
          label: "Admin",
          icon: LockIcon,
          title: "End-to-End Video Pipeline",
          bullets: [
            "`UpChunk` streaming uploads with live progress & cancel support",
            "Backend manages upload intents with `passthroughId` tracking",
            "Signed webhook listener verifies Mux events automatically",
            "Asset lifecycle: **waiting → uploaded → ready**",
            "Auto-stores assetId, playbackId, duration & thumbnails",
          ],
        },
        {
          label: "Student",
          icon: User2Icon,
          title: "Secure Video Streaming",
          bullets: [
            "Short-lived signed playback tokens per request",
            "Private lessons stay locked down securely",
            "Smooth streaming via Mux infrastructure",
            "Production-grade experience for learners",
          ],
        },
      ],
      callout: {
        label: "What it delivers:",
        text: "Everything stays secure while providing a fast, smooth experience for both admins and students.",
      },
    },
    lessons: [
      "I could spend all day talking about the technical lessons I learned from this project, but the most important ones involved learning how to work in a professional environment for the first time.",
      "This was my first internship, so I had to learn:",
      [
        "How to collaborate effectively with a team",
        "Meeting deadlines in a professional setting",
        "Attending and participating in meetings",
        "Communicating with stakeholders",
      ],
      "I quickly discovered that building software isn't just about writing code - it's about working with people, managing expectations, and adapting to the fast-paced world of a startup.",
    ],
  },
} satisfies Record<string, Project>;

export type ProjectSlug = keyof typeof registry;

export const projects: Record<ProjectSlug, Project> = registry;
