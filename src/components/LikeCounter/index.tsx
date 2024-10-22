import { AiOutlineLike } from "react-icons/ai";
import { Button, Container, Text } from "./styles";
import { useState } from "react";

export function LikeCount() {
  const [count, setCount] = useState<number>(12);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      <Container>
        <Button onClick={handleIncrement}>Like</Button>
        <Text>
          {count} <AiOutlineLike />
        </Text>
      </Container>
    </>
  );
}
