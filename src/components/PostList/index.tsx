import { Posts, Title } from "./styles";

import { FeedPost } from "../FeedPost";

export interface IPost {
  title: string;
  description: string;
  author: string;
  avatar: string;
  createdAt: string;
  category: string;
  image: string;
}

interface PostProps {
  posts: IPost[];
}

export function PostList({ posts }: PostProps) {
  return (
    <>
      <Title>
        <h1>Posts Recentes</h1>
        <span>Escolhemos a dedo nossos artigos favoritos</span>
      </Title>

      <Posts>
        {posts.map((post) => (
          <FeedPost post={post} />
        ))}
      </Posts>
    </>
  );
}
