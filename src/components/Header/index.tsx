import { NavLink } from "react-router-dom";
import { Content, NavPages } from "./styles";

export function Header() {
  return (
    <>
      <Content>
        <h1>Atividade usando React</h1>
        <NavPages>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/artigo">Artigo</NavLink>
          </li>
          <li>
            <NavLink to="/feed">Feed</NavLink>
          </li>
        </NavPages>
      </Content>
    </>
  );
}
