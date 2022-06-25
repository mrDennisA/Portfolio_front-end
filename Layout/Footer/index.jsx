import Link from "next/link";
import { useContext, useCallback } from "react";

import { CursorContext } from "../../context/CursorContextProvider";

import * as Icon from "../../components/Icons";
import * as S from "./styled";

export default function Footer() {
  const [, setCursor] = useContext(CursorContext);

  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  return (
    <S.Footer>
      <Link href="https://github.com/mrDennisA">
        <a target="_blank" rel="noopener noreferrer" onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>
          <Icon.Github />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/dennis-alekseev/">
        <a target="_blank" rel="noopener noreferrer" onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>
          <Icon.LinkedIn />
        </a>
      </Link>
    </S.Footer>
  );
}
