import Link from "next/link";

import Wrapper from "../Wrapper";
import * as Icon from "../../components/Icons";

import * as S from "./styled";

export default function Header() {
  return (
    <S.Header>
      <S.Content>
        <div>
          <Link href="/">
            <a>
              <Icon.Logo />
            </a>
          </Link>
        </div>
        <S.Nav>
          <Link href="/">
            <a>Projects</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </S.Nav>
      </S.Content>
    </S.Header>
  );
}
