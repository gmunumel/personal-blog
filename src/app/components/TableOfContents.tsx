"use client";
import { useEffect, useState, useRef, useCallback } from "react";

const getHeadings = (root: HTMLElement | Document = document) =>
  Array.from(root.querySelectorAll("h1, h2, h3, h4, h5, h6")).map((node) => ({
    id: node.id,
    text: node.textContent || "",
    level: Number(node.tagName.replace("H", "")),
  }));

const TableOfContents = () => {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateHeadings = useCallback(() => {
    setHeadings(getHeadings());
  }, []);

  useEffect(() => {
    updateHeadings();
    const target = containerRef.current || document.body;
    const observer = new MutationObserver(updateHeadings);
    observer.observe(target, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [updateHeadings]);

  return (
    <nav className="table-content sticky top-8 p-4 rounded w-64 max-h-[80vh] mt-8 overflow-auto">
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
