import fs from "fs";
import matter from "gray-matter";
import { getPostMetadata } from "../../../components/HomePageComponents/getPostMetadata";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

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
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl font-bold text-orange-400 ">
          {post.data.title}
        </h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <MaxWidthWrapper>
        <article className="prose max-w-none md:prose-md lg:prose- prose-h3:text-green-400 prose-img:lg:ml-[10rem] prose-img:object-center prose-headings:text-primary dark:text-gray-300">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </article>
      </MaxWidthWrapper>
    </div>
  );
};

export default PostPage;
