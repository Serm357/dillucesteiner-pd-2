// app/components/HomePageComponents/getPostMetadata.ts
import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../../../components/PostMetadata";
import path from "path";

// Ensure this runs only on the server
export const getPostMetadata = (): PostMetadata[] => {
  const folder = path.join(process.cwd(), "posts/");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(path.join(folder, fileName), "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      blogImage: matterResult.data.blogImage,
    };
  });

  return posts;
};
