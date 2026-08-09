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
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}