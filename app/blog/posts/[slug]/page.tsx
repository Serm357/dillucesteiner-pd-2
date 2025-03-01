// PostPage.tsx
import fs from "fs";
import matter from "gray-matter";
import { getPostMetadata } from "../../../components/HomePageComponents/getPostMetadata";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { PostContent } from "./PostContent";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <MaxWidthWrapper className="pb-20">
      <PostContent
        content={post.content}
        title={post.data.title}
        date={post.data.date}
      />
    </MaxWidthWrapper>
  );
};

export default PostPage;
