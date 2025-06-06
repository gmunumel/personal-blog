import { loadPosts } from "@/lib/loadPosts";
import { formatDate } from "@/lib/formatDate";
import Link from "next/link";

const Home = async () => {
  const posts = await loadPosts();

  // Sort by date descending (newest first)
  const sorted = posts
    .filter((p) => p.date)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());

  const latest = sorted[0];
  const others = sorted.slice(1);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <section className="mb-12 text-center rounded-2xl border border-blue-200 dark:border-blue-900 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 dark:text-blue-200 mb-3 tracking-tight drop-shadow">
          StackEdge:{" "}
          <span className="text-blue-500 dark:text-blue-400">
            Software & Architecture Insights
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
          Insights and practical guides on modern software development and
          architecture, covering frontend, backend, React, Python, and fullstack
          best practices.
        </p>
      </section>
      {latest && (
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Latest Post
          </h2>
          <Link
            href={`/posts/${latest.slug}`}
            className="block rounded-xl border border-blue-200 dark:border-blue-900 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 shadow hover:shadow-lg transition-shadow duration-200 p-6 mb-2"
          >
            <span className="text-2xl font-bold text-blue-800 dark:text-blue-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {latest.title}
            </span>
            <span className="block mt-1 text-sm text-gray-500 dark:text-gray-400">
              {latest.date && formatDate(latest.date)}
            </span>
            {latest.synopsis && (
              <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
                {latest.synopsis}
              </p>
            )}
          </Link>
        </section>
      )}
      <h2 className="text-xl font-bold mb-4">All Posts</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {others.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="block rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow hover:shadow-md transition-shadow duration-200 p-4"
            >
              <span className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </span>
              <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400">
                {post.date && formatDate(post.date)}
              </span>
              {post.synopsis && (
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                  {post.synopsis}
                </p>
              )}
            </Link>
          </li>
        ))}
        {others.length === 0 && (
          <li className="text-center text-gray-500 dark:text-gray-400 py-8 col-span-2">
            No posts found.
          </li>
        )}
      </ul>
    </main>
  );
};

export default Home;
