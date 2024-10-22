import { PostList } from "../../components/PostList";

import { posts } from "../../posts";

export function Feed() {
  return <PostList posts={posts} />;
}
