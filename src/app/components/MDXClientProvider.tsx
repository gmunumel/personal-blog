"use client";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/app/mdx-components";

const MDXClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
};

export default MDXClientProvider;
