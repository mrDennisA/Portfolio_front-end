import Link from "next/link";

// Components
import ActiveLink from "../../../components/ActiveLink";

// Styles
import * as S from "./index.styled";

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
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <Link href="/">
            <a>Dennis Alekseev</a>
          </Link>
          <nav>
            <S.NavLink>
              <LinkArray />
            </S.NavLink>
          </nav>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
