import Link from "next/link";

import * as Icon from "../../components/Icons";
import * as S from "./styled";

export default function Footer() {
  return (
    <S.Footer>
      <Link href="https://github.com/mrDennisA">
        <a target="_blank" rel="noopener noreferrer">
          <Icon.Github />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/dennis-alekseev/">
        <a target="_blank" rel="noopener noreferrer">
          <Icon.LinkedIn />
        </a>
      </Link>
    </S.Footer>
  );
}
