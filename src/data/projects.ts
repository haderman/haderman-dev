import imgProjectCovidSrc from "@/images/covid.png";

export const projects = [
  {
    slug: "alan",
    name: "Alan",
    title: "Alan AI Chat",
    description: "VSCode extension to create multiple AI chats.",
    image:
      "https://raw.githubusercontent.com/haderman/alan-docs/main/screenshots/landing-hero.png",
    stack: ["React", "TypeScript", "OpenAI API", "NodeJS", "Astro"],
    liveUrl: "https://www.alanai.app/",
    overview:
      "Alan is a VSCode extension designed to make working with multiple AI conversations easier.",
    features: [
      "Multiple AI conversations",
      "VSCode-native workflow",
      "OpenAI integration",
    ],
  },
  {
    slug: "covid",
    name: "Covid",
    title: "Covid 19 Tracker",
    description: "COVID-19 tracker with global statistics and visualizations.",
    image: imgProjectCovidSrc,
    stack: ["React", "JavaScript", "NextJS", "GraphQL"],
    liveUrl: "https://covidx19.vercel.app/",
    overview:
      "A dashboard for exploring global COVID-19 statistics and trends.",
    features: [
      "Global statistics",
      "Data visualizations",
      "GraphQL-powered data",
    ],
  },
  // {
  //   slug: "atlas",
  //   name: "Atlas",
  //   title: "Atlas Dashboard (Mock)",
  //   description: "Mock project card for previewing a dashboard layout.",
  //   image: "/projects/mock-atlas.svg",
  //   stack: ["React", "TypeScript", "Tailwind CSS"],
  //   liveUrl: "https://example.com/atlas",
  //   overview:
  //     "Atlas is a placeholder project used to preview how a dashboard-focused card fits into the home page.",
  //   features: ["Dashboard overview", "Responsive layout", "Reusable UI components"],
  // },
  // {
  //   slug: "signal",
  //   name: "Signal",
  //   title: "Signal Notes (Mock)",
  //   description: "Mock project card for a focused notes experience.",
  //   image: "/projects/mock-signal.svg",
  //   stack: ["Astro", "TypeScript", "SQLite"],
  //   liveUrl: "https://example.com/signal",
  //   overview:
  //     "Signal is a placeholder project used to preview a more editorial project card alongside Atlas.",
  //   features: ["Quick capture", "Searchable notes", "Minimal interface"],
  // },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
