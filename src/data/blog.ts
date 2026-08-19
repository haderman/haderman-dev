import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;
export type BlogAuthorship = "human" | "human-ai" | "ai";

const blogAuthorshipLabels: Record<BlogAuthorship, string> = {
  human: "Human-written",
  "human-ai": "Human + AI",
  ai: "AI-generated",
};

export function formatBlogAuthorship(authorship: BlogAuthorship) {
  return blogAuthorshipLabels[authorship];
}

export async function getPublishedPosts() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return [...posts].sort((a, b) => {
    const dateDifference =
      b.data.publishDate.getTime() - a.data.publishDate.getTime();

    return dateDifference || a.id.localeCompare(b.id);
  });
}

export function getBlogSlug(post: BlogPost) {
  return post.id.replace(/\.(?:md|mdx)$/i, "");
}

export function formatBlogDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}