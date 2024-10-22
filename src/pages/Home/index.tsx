import { useState } from "react";
import { PostList, Title } from "./styles";
import { IPost } from "../../types";
import { Form } from "../../components/Form";
import { Posts } from "../../components/Post";

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

  function handleCreateNewPost(post: IPost) {
    setPosts((prevState) => [...prevState, post]);
  }

  console.log(posts);
  return (
    <>
      <Form createNewPost={handleCreateNewPost} />
      <Title>Mais lidos</Title>
      <PostList>
        {posts.map((post) => (
          <Posts key={post.title} post={post} />
        ))}
      </PostList>
    </>
  );
}
