import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  tags?: string[];
  synopsis?: string;
  date?: string;
};

export async function loadPosts(): Promise<PostMeta[]> {
  const postsDir = path.join(process.cwd(), "src/content/posts");
  const files = await fs.readdir(postsDir);
  return Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(postsDir, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data } = matter(source);
        return {
          slug: file.replace(/\.mdx$/, ""),
          title: data.title || file.replace(/\.mdx$/, ""),
          tags: data.tags || [],
          synopsis: data.synopsis || "",
          date: data.date || "",
        };
      })
  );
}
