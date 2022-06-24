import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

import Wrapper from "../Wrapper";
import * as Icon from "../../components/Icons";

import * as S from "./styled";

export default function Header() {
  const [slider, useSlider] = useState(false);
  const sliderRef = useRef(null);
  const router = useRouter();

  const Test = () => {
    useSlider({ left: sliderRef.current.offsetLeft, width: sliderRef.current.offsetWidth });
  };

  useEffect(() => {
    if (router.pathname === sliderRef.current.pathname) {
      Test();
    }
  }, [router]);

  // Toggle Active Link
  const LinkActive = ({ children, href }) => {
    const match = router.pathname === href;

    return (
      <Link href={href}>
        <a ref={match ? sliderRef : null}>{children}</a>
      </Link>
    );
  };

  // Link Array
  const LinkArray = () => {
    return (
      <>
        <LinkActive href="/">Projects</LinkActive>
        <LinkActive href="/about">About</LinkActive>
        <LinkActive href="/contact">Contact</LinkActive>
      </>
    );
  };

  return (
    <S.Header>
      <Wrapper>
        <S.Content>
          <div>
            <Link href="/">
              <a>
                <Icon.Logo />
              </a>
            </Link>
          </div>
          <S.Nav>
            {slider && <S.Slider slider={slider} />}
            <LinkArray />
          </S.Nav>
        </S.Content>
      </Wrapper>
    </S.Header>
  );
}
