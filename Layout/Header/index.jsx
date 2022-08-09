import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

// Components
import * as Icon from "../../components/Icons";
import ActiveLink from "../../components/ActiveLink";

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
    if (markerRef.current && markerRef.current.pathname === router.pathname) {
      setMarker({ left: markerRef.current.offsetLeft, width: markerRef.current.offsetWidth + "px" });
    }

    if (!markerRef.current) {
      setMarker(null);
    }

    const handleSize = () => {
      if (window.innerWidth >= 576) {
        setActive(false);
        if (markerRef.current) {
          setMarker({ left: markerRef.current.offsetLeft, width: markerRef.current.offsetWidth + "px" });
        }
        document.body.style.overflow = null;
      } else {
        setMarker(null);
      }
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, [router, active]);

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
            <ActiveLink toggleMenu={toggleMenu} href="/">
              Projects
            </ActiveLink>
          </DelayView>
          <DelayView active={active} delay={200}>
            <ActiveLink toggleMenu={toggleMenu} href="/about">
              About
            </ActiveLink>
          </DelayView>
          <DelayView active={active} delay={250}>
            <ActiveLink toggleMenu={toggleMenu} href="/contact">
              Contact
            </ActiveLink>
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
        <ActiveLink ref={markerRef} href="/">
          Projects
        </ActiveLink>
        <ActiveLink ref={markerRef} href="/about">
          About
        </ActiveLink>
        <ActiveLink ref={markerRef} href="/contact">
          Contact
        </ActiveLink>
      </S.Desktop>
    </S.Header>
  );
}
