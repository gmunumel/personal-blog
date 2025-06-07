import { loadPosts } from "@/lib/loadPosts";
import PostClient from "@/app/posts/[slug]/PostClient";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await loadPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = await params;

  return <PostClient slug={slug} />;
};

export default PostPage;
