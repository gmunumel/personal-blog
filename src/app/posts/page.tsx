import { loadPosts } from "@/lib/loadPosts";
import PostsList from "@/app/posts/postsList";

const PostsPage = async () => {
  const posts = await loadPosts();
  return <PostsList posts={posts} />;
};

export default PostsPage;
