"use client";
import React from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import MDXClientProvider from "@/app/components/MDXClientProvider";
import Loader from "@/app/components/Loader";
import TableOfContents from "@/app/components/TableOfContents";

const PostPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);

  console.log("PostPage slug:", slug);

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
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 max-w-9/10 mx-auto p-4">
      <aside className="hidden lg:block border-r border-gray-200 dark:border-gray-800 pr-6">
        <TableOfContents />
      </aside>
      <article className="prose flex-1">
        <MDXClientProvider>
          <Post />
        </MDXClientProvider>
      </article>
    </div>
  );
};

export default PostPage;
