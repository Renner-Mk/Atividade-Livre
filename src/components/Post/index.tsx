import { IPost } from "../../types";
import { Container } from "./styles";

interface PostProps {
  post: IPost;
}

export function Posts({ post }: PostProps) {
  console.log(post);
  return (
    <Container>
      <p className="category">
        <span className="italic">in</span> {post.category}
      </p>
      <h2 className="title">{post.title}</h2>
      <ul>
        <li>
          <span className="italic">by </span>
          <span className="author">{post.author}</span>
        </li>
        <li>{post.date}</li>
      </ul>
    </Container>
  );
}
