import React from "react";
import PythonRunner from "@/app/components/PythonRunner";

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

    const noRun = code?.trimStart().startsWith("# no-run") ?? false;
    const codeToRun =
      noRun && code ? code.split("\n").slice(1).join("\n") : code;

    if (lang && lang.includes("language-python")) {
      return <PythonRunner code={codeToRun ?? ""} noRun={noRun} />;
    }
    return <pre {...props} />;
  },
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a {...props} target="_blank" rel="noopener" />
  ),
};
