import React from "react";
import PythonRunner from "@/app/components/PythonRunner";
import Mermaid from "@/app/components/Mermaid";
import CopyableCodeBlock from "@/app/components/CopyableCodeBlock";
import ArticleImage from "@/app/components/ArticleImage";

const pythonComponent = (code: string | undefined) => {
  const noRun = code?.trimStart().startsWith("# no-run") ?? false;
  const codeToRun = noRun && code ? code.split("\n").slice(1).join("\n") : code;

  return <PythonRunner code={codeToRun ?? ""} noRun={noRun} />;
};

const extractMetaLine = (
  code: string,
  key: "title" | "caption" | "css"
): [string | undefined, string] => {
  const regex = new RegExp(`^//\\s*${key}:\\s*(.+)$`, "i");
  const trimmed = code.trimStart();
  if (trimmed.startsWith(`// ${key}:`)) {
    const lineEnd = trimmed.indexOf("\n");
    const line = lineEnd !== -1 ? trimmed.slice(0, lineEnd) : trimmed;
    const match = line.match(regex);
    if (match) {
      const value = match[1].trim();
      const rest = lineEnd !== -1 ? trimmed.slice(lineEnd + 1) : "";
      return [value, rest];
    }
  }
  return [undefined, code];
};

const mermaidComponent = (code: string | undefined) => {
  let diagramCode = code ?? "";
  let title, caption, customClass;

  [title, diagramCode] = extractMetaLine(diagramCode, "title");
  [caption, diagramCode] = extractMetaLine(diagramCode, "caption");
  [customClass, diagramCode] = extractMetaLine(diagramCode, "css");

  return (
    <Mermaid
      code={diagramCode}
      title={title}
      caption={caption}
      className={customClass}
    />
  );
};

export const mdxComponents = {
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => {
    let code: string | undefined;
    let lang: string | undefined;

    if (
      React.isValidElement(props.children) &&
      typeof props.children.props === "object" &&
      props.children.props !== null &&
      "children" in props.children.props
    ) {
      code = (props.children.props as { children?: string }).children;
      lang = (props.children.props as { className?: string }).className;
    }

    const language =
      lang
        ?.split(" ")
        .find((cls) => cls.startsWith("language-"))
        ?.replace("language-", "") ?? "";

    if (language === "python") {
      return pythonComponent(code);
    }
    if (language === "mermaid") {
      return mermaidComponent(code);
    }
    if (language) {
      return <CopyableCodeBlock code={code ?? ""} language={language} />;
    }
    return <pre {...props} />;
  },
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a {...props} target="_blank" rel="noopener" />
  ),
  img: (props: React.ComponentPropsWithoutRef<"img">) => (
    <ArticleImage {...props} />
  ),
};
