"use client";
import React, { useState, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/app/mdx-components";
import TableOfContents from "@/app/components/TableOfContents";
import Loader from "@/app/components/Loader";

const PostClient = ({ slug }: { slug: string }) => {
  const [tocOpen, setTocOpen] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const [Post, setPost] = useState<React.ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(false);
    import(`@/content/posts/${slug}.mdx`)
      .then((mod) => {
        if (isMounted) {
          setPost(() => mod.default);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [slug]);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (loading) {
    return <Loader />;
  }
  if (error || !Post) {
    notFound();
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 max-w-9/10 mx-auto p-4 relative">
      <div className="hidden lg:flex relative">
        {tocOpen ? (
          <div className="fixed left-0 flex">
            <aside className="pr-6 transition-all duration-300">
              <TableOfContents />
            </aside>
            <button
              onClick={() => setTocOpen(false)}
              className="collapsed-bar flex items-center justify-center bg-gray200 dark:bg-gray800 cursor-pointer z-50 transition-all duration-300 h-16 w-2 rounded-l-xl mt-2"
              aria-label="Hide Table of Contents"
            >
              <span className="text-gray-400 text-lg select-none">⟨</span>
            </button>
          </div>
        ) : (
          <button
            onClick={() => setTocOpen(true)}
            className="collapsed-bar fixed left-0 h-16 w-2 flex items-center justify-center bg-gray200 dark:bg-gray800 cursor-pointer z-50 transition-all duration-300 rounded-r-xl mt-2"
            aria-label="Show Table of Contents"
          >
            <span className="text-gray-400 text-lg select-none">⟩</span>
          </button>
        )}
      </div>
      <article
        className={`prose flex-1 transition-all duration-300 ${
          tocOpen ? "lg:ml-48" : ""
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
