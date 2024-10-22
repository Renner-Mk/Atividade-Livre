import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, Wrapper } from "./styles";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}
