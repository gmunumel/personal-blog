"use client";
import React, { useState, useMemo, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/mdx-components";
import TableOfContents from "@/app/components/TableOfContents";
import Loader from "@/app/components/Loader";

const PostClient = ({ slug }: { slug: string }) => {
  const [tocOpen, setTocOpen] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  const Post = useMemo(
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

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
      {showScroll && (
        <button
          onClick={handleScrollTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors cursor-pointer"
        >
          <span className="text-2xl">↑</span>
        </button>
      )}
    </div>
  );
};

export default PostClient;
