"use client";
import CopyButton from "@/app/components/CopyButton";
import GenericCodeEditor from "@/app/components/GenericCodeEditor";

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
      <GenericCodeEditor code={code} language={language ?? ""} />
    </div>
  );
}
