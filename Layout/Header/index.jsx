import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect, useCallback, useContext } from "react";

// Components
import Wrapper from "../Wrapper";
import * as Icon from "../../components/Icons";

import { CursorContext } from "../../context/CursorContextProvider";

// Styles
import * as S from "./styled";

export default function Header() {
  const [, setCursor] = useContext(CursorContext);

  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  const [marker, setMarker] = useState(null);
  const markerRef = useRef(null);
  const router = useRouter();

  const setDim = (left, width) => {
    setMarker({ left: left, width: width });
  };

  useEffect(() => {
    if (router.pathname === markerRef.current.pathname) {
      setDim(markerRef.current.offsetLeft, markerRef.current.offsetWidth);
    }
  }, [router]);

  return (
    <S.Header>
      <Wrapper>
        <S.Content>
          <div>
            <Link href="/">
              <a onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>
                <Icon.Logo />
              </a>
            </Link>
          </div>
          <nav>
            <S.Menu>
              {marker && <S.Marker marker={marker} />}
              {/* <LinkArray /> */}
              <Link href="/">
                <a
                  ref={router.pathname === "/" && markerRef}
                  className={router.pathname === "/" ? "active" : null}
                  onMouseEnter={toggleCursor}
                  onMouseLeave={toggleCursor}
                >
                  Projects
                </a>
              </Link>
              <Link href="/about">
                <a
                  ref={router.pathname === "/about" && markerRef}
                  className={router.pathname === "/" ? "active" : null}
                  onMouseEnter={toggleCursor}
                  onMouseLeave={toggleCursor}
                >
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a
                  ref={router.pathname === "/contact" && markerRef}
                  className={router.pathname === "/contact" ? "active" : null}
                  onMouseEnter={toggleCursor}
                  onMouseLeave={toggleCursor}
                >
                  Contact
                </a>
              </Link>
            </S.Menu>
          </nav>
        </S.Content>
      </Wrapper>
    </S.Header>
  );
}
