"use client";
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

type MermaidProps = {
  code: string;
  title?: string; // Top title (optional)
  caption?: string; // Bottom caption (optional)
  className?: string; // Custom CSS class for styling (optional)
};

let mermaidInitialized = false;

const Mermaid = ({ code, title, caption, className }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mermaidInitialized) {
      mermaid.initialize({ startOnLoad: false });
      mermaidInitialized = true;
    }
    if (ref.current) {
      ref.current.innerHTML = "";
      const uniqueId = `mermaid-svg-${Math.random().toString(36).slice(2, 11)}`;
      mermaid
        .render(uniqueId, code.trim())
        .then(({ svg }) => {
          ref.current!.innerHTML = svg;
        })
        .catch((err) => {
          ref.current!.innerHTML = `<pre style="color:red;">Mermaid render error: ${err.message}</pre>`;
        });
    }
  }, [code]);

  return (
    <figure className="flex flex-col items-center w-full my-4">
      {title && (
        <div className="mb-2 text-center font-semibold text-base">{title}</div>
      )}
      <div
        ref={ref}
        className={`flex justify-center border rounded-lg shadow-md transition-transform duration-200 hover:scale-[1.02] ${
          className ?? ""
        }`}
        aria-label="Mermaid diagram"
      />
      {caption && (
        <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-1 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Mermaid;
