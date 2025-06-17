"use client";
import { useState } from "react";

export default function CopyButton({ getText }: { getText: () => string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getText());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 z-10 px-2 py-1 text-xs rounded bg-blue-600 text-white opacity-80 hover:opacity-100 transition cursor-pointer"
      aria-label="Copy code"
      type="button"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
