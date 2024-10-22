import { LikeCount } from "../../components/LikeCounter";
import { Container, Img, Text, Title } from "./styles";

export function Artigo() {
  return (
    <>
      <Container>
        <Img src="https://wallpapers.com/images/hd/planode-fundo-de-buraco-negro-6hm0qdnyqcs355gx.jpg"></Img>
        <Title>Artigo: Buracos Negros e usa origem</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat velit
          ipsam, repellat labore dolorum obcaecati voluptatum, laborum,
          repellendus magnam porro voluptates. Sint est hic itaque nobis
          exercitationem, error libero repellat! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Incidunt illo rem, neque laborum ex
          temporibus dolores reprehenderit! Illo, nesciunt! Ut, rem culpa dolore
          reprehenderit quas saepe molestias accusantium iusto beatae minima
          explicabo laboriosam, molestiae deleniti recusandae enim suscipit
          cupiditate placeat? Blanditiis nesciunt similique sunt quas rerum!
          Ducimus commodi eius hic expedita eos maiores. Similique nisi ut
          magnam ab iste dolor debitis hic, deleniti excepturi! Quisquam ipsam,
          dicta tempora nam omnis rem consequuntur fuga esse enim explicabo
          deserunt. Obcaecati itaque perferendis deleniti adipisci neque ea vero
          ullam, at voluptatum totam tempore? Illum quasi inventore assumenda
          corporis vitae aliquam placeat id quos.
        </Text>
      </Container>
      <LikeCount />
    </>
  );
}
