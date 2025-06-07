"use client";
import React, { useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/mdx-components";
import Loader from "@/app/components/Loader";
import TableOfContents from "@/app/components/TableOfContents";

const PostPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);
  const [tocOpen, setTocOpen] = useState(true);

  const Post = React.useMemo(
    () =>
      dynamic(
        () =>
          import(`@/content/posts/${slug}.mdx`).catch(() => {
            return notFound();
          }),
        {
          loading: () => <Loader />,
          ssr: false,
        }
      ),
    [slug]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 max-w-9/10 mx-auto p-4 relative">
      <div className="hidden lg:flex relative">
        {tocOpen && (
          <aside className="pr-6 transition-all duration-300">
            <TableOfContents />
          </aside>
        )}
        <button
          onClick={() => setTocOpen((v) => !v)}
          className={`collapsed-bar absolute top-0 right-0 h-full w-2 flex items-center justify-center bg-gray200 dark:bg-gray800 cursor-pointer z-10 transition-all duration-300
            ${tocOpen ? "" : "rounded-l-xl"}`}
          aria-label={
            tocOpen ? "Hide Table of Contents" : "Show Table of Contents"
          }
          style={{
            right: tocOpen ? "-16px" : "0",
          }}
        >
          <span className="text-gray-400 text-lg select-none">
            {tocOpen ? "⟨" : "⟩"}
          </span>
        </button>
      </div>
      <article
        className={`prose flex-1 transition-all duration-300 ${
          tocOpen ? "" : "lg:col-span-2"
        }`}
      >
        <MDXProvider components={mdxComponents}>
          <Post />
        </MDXProvider>
      </article>
    </div>
  );
};

export default PostPage;
