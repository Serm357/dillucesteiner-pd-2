// PostContent.tsx
"use client";

import { motion } from "framer-motion";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { cn } from "@/lib/utils";

interface PostContentProps {
  content: string;
  title: string;
  date: string;
}

export const PostContent = ({ content, title, date }: PostContentProps) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative py-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-green-500/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
            {title}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg md:text-xl text-gray-300 font-light"
          >
            {date}
          </motion.p>
          <div className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full" />
        </div>
      </motion.header>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={cn(
          "prose max-w-none md:prose-lg lg:prose-xl px-4",
          "text-gray-200",
          "prose-headings:text-orange-400 prose-headings:font-bold",
          "prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-6",
          "prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4",
          "prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3",
          "prose-p:leading-relaxed prose-p:mb-6",
          "prose-a:text-blue-400 prose-a:hover:text-blue-300 prose-a:transition-colors",
          "prose-img:rounded-xl prose-img:shadow-2xl prose-img:max-w-full",
          "prose-img:lg:mx-auto prose-img:mb-8",
          "prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:pl-4 prose-blockquote:italic",
          "prose-code:bg-gray-800 prose-code:p-1 prose-code:rounded",
          "dark:text-gray-200"
        )}
      >
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ node, ...props }) => (
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="hover:scale-105 transition-transform duration-300"
                {...props as any}
              />
            ),
          }}
        >
          {content}
        </Markdown>
      </motion.article>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToBottom}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center animate-pulse cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
        aria-label="Scroll to bottom"
      >
        <svg
          className="w-6 h-6 text-orange-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.button>
    </div>
  );
};
