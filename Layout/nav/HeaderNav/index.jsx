import Link from "next/link";

// Components
import ActiveLink from "../../../components/ActiveLink";

// Styles
import { Container, Wrapper, Content, Logo, Nav, NavLink, SideLink } from "./index.styled";

export default function HeaderNav() {
  const LinkArray = () => {
    return (
      <>
        <ActiveLink href="/">index</ActiveLink>
        <ActiveLink href="/info">info</ActiveLink>
      </>
    );
  };

  return (
    <Container>
      <Wrapper>
        <Content>
          <ActiveLink href="/">
            <Logo>Dennis Alekseev</Logo>
          </ActiveLink>
          <Nav>
            <NavLink>
              <LinkArray />
            </NavLink>
            <SideLink></SideLink>
          </Nav>
        </Content>
      </Wrapper>
    </Container>
  );
}
