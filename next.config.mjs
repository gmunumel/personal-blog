const isExport = process.env.EXPORT === "true";

import withMDX from "@next/mdx";
import remarkSlug from "remark-slug";

const nextConfig = {
  // Add any other Next.js config options here
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  output: isExport ? "export" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // experimental: {
  //   mdxRs: false,
  // },
};

export default withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkSlug],
  },
})(nextConfig);
