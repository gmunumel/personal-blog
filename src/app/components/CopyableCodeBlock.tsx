"use client";
import CopyButton from "@/app/components/CopyButton";

export default function CopyableCodeBlock({
  code,
  language,
}: {
  code: string;
  language?: string;
}) {
  return (
    <div className="relative group my-4">
      <CopyButton getText={() => code} />
      <pre className="overflow-x-auto rounded bg-gray-50 dark:bg-gray-900 p-4">
        <code className={`language-${language ?? ""}`}>{code}</code>
      </pre>
    </div>
  );
}
