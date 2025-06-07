"use client";
import { useEffect, useState } from "react";

const TableOfContents = () => {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);

  useEffect(() => {
    const updateHeadings = () => {
      const nodes = Array.from(
        document.querySelectorAll("h1, h2, h3, h4, h5, h6")
      );
      setHeadings(
        nodes.map((node) => ({
          id: node.id,
          text: node.textContent || "",
          level: Number(node.tagName.replace("H", "")), // 1-6
        }))
      );
    };

    updateHeadings();

    const observer = new MutationObserver(() => {
      updateHeadings();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-8 p-4 rounded w-64 max-h-[80vh] mt-8 overflow-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Contents</span>
      </div>
      <ul id="toc-list" className="space-y-1">
        {headings
          .filter((h) => h.id)
          .map((h) => (
            <li key={h.id} style={{ marginLeft: `${(h.level - 1) * 16}px` }}>
              <a
                href={`#${h.id}`}
                className="text-blue-600 dark:text-blue-500 hover:underline text-sm"
              >
                {h.text}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
