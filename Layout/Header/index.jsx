import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

// Components
import * as Icon from "../../components/Icons";

// Styles
import * as S from "./styled";
import DelayView from "../../components/DelayView";

export default function Header() {
  const [active, setActive] = useState(false);
  const [marker, setMarker] = useState(null);
  const markerRef = useRef(null);
  const router = useRouter();

  const toggleMenu = () => {
    if (window.innerWidth < 576) {
      setActive(!active);
      document.body.style.overflow = document.body.style.overflow ? null : "hidden";
    }
  };

  const closeMenu = () => {
    setActive(false);
    document.body.style.overflow = null;
  };

  useEffect(() => {
    if (markerRef.current) {
      if (router.pathname === markerRef.current.pathname) {
        setMarker({ left: markerRef.current.offsetLeft, width: markerRef.current.offsetWidth + "px" });
      }
    }

    const handleSize = () => {
      if (window.innerWidth >= 576) {
        setActive(false);
        setMarker({ left: markerRef.current.offsetLeft, width: markerRef.current.offsetWidth + "px" });
        document.body.style.overflow = null;
      } else {
        setMarker(null);
      }
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, [router, active]);

  const ActiveLink = ({ matchRef = false, href, children }) => {
    const matchPath = router.pathname === href;
    return (
      <Link href={href}>
        <a ref={matchRef && matchPath && markerRef} className={matchPath ? "active" : null} onClick={toggleMenu}>
          {children}
        </a>
      </Link>
    );
  };

  return (
    <S.Header>
      <Link href="/">
        <S.Logo onClick={closeMenu}>
          <Icon.Logo active={active} />
        </S.Logo>
      </Link>
      <S.Button onClick={toggleMenu}>
        <Icon.Menu active={active} />
      </S.Button>
      <S.Mobile className={active ? "active" : null}>
        <div>
          <DelayView active={active} delay={150}>
            <ActiveLink href="/">Projects</ActiveLink>
          </DelayView>
          <DelayView active={active} delay={200}>
            <ActiveLink href="/about">About</ActiveLink>
          </DelayView>
          <DelayView active={active} delay={250}>
            <ActiveLink href="/contact">Contact</ActiveLink>
          </DelayView>
        </div>
        <div>
          <DelayView active={active} delay={300}>
            <Link href="https://github.com/mrDennisA">
              <a target="_blank" rel="noopener noreferrer">
                <Icon.Github active={active} />
              </a>
            </Link>
          </DelayView>
          <DelayView active={active} delay={350}>
            <Link href="https://www.linkedin.com/in/dennis-alekseev/">
              <a target="_blank" rel="noopener noreferrer">
                <Icon.LinkedIn active={active} />
              </a>
            </Link>
          </DelayView>
        </div>
      </S.Mobile>
      <S.Desktop>
        {marker && <S.Marker marker={marker} />}
        <ActiveLink matchRef={true} href="/">
          Projects
        </ActiveLink>
        <ActiveLink matchRef={true} href="/about">
          About
        </ActiveLink>
        <ActiveLink matchRef={true} href="/contact">
          Contact
        </ActiveLink>
      </S.Desktop>
    </S.Header>
  );
}
