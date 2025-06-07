import { loadPosts } from "@/lib/loadPosts";
import PostsList from "@/app/posts/PostsList";

const PostsPage = async () => {
  const posts = await loadPosts();
  return <PostsList posts={posts} />;
};

export default PostsPage;
