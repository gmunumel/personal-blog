import React from "react";
// import dynamic from "next/dynamic";
import PythonRunner from "@/app/components/PythonRunner";

// const PythonRunner = dynamic(() => import("@/app/components/PythonRunner"), {
//   ssr: false,
// });

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

    if (lang && lang.includes("language-python")) {
      return <PythonRunner code={code ?? ""} />;
    }
    return <pre {...props} />;
  },
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a {...props} target="_blank" rel="noopener" />
  ),
};
