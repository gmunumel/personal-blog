"use client";
import { useState } from "react";
import Link from "next/link";
import { PostMeta } from "@/lib/loadPosts";
import { formatDate } from "@/lib/formatDate";

const PostsList = ({ posts }: { posts: PostMeta[] }) => {
  const [query, setQuery] = useState("");

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
  );

  const filtered = sortedPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      (post.tags &&
        post.tags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        ))
  );

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* <h1 className="text-3xl font-bold mb-8 text-center">All Posts</h1> */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by title or tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md p-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          style={{ boxShadow: "none" }}
        />
      </div>
      <ul className="space-y-6">
        {filtered.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="block group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow hover:shadow-lg transition-shadow duration-200 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <span className="block mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {post.date && formatDate(post.date)}
                  </span>
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-3 sm:mt-0 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="text-center text-gray-500 dark:text-gray-400 py-8">
            No posts found.
          </li>
        )}
      </ul>
    </main>
  );
};

export default PostsList;
