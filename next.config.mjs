import withMDX from "@next/mdx";
import remarkSlug from "remark-slug";

// Enable MDX for .mdx files in /src/pages or /src/app
const nextConfig = {
  // Add any other Next.js config options here
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
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
