import { useEffect, useState } from "react";
import * as S from "./styled";

export const Logo = ({ active = false }) => {
  return (
    <S.Svg viewBox="0 0 256 256">
      {/* <S.RectBg width="256" height="256" rx="32" ry="32" /> */}
      <S.Path
        className={active ? "active" : null}
        d="M32,32v16h40c30.93,0,56,25.07,56,56v48c0,30.93-25.07,56-56,56H32v16H160c35.35,0,64-28.65,64-64V96c0-35.35-28.65-64-64-64H32Z"
      />
    </S.Svg>
  );
};

export const Github = ({ active = false }) => {
  return (
    <S.Svg viewBox="0 0 256 256">
      <S.Path
        className={active ? "active" : null}
        d="M128,3.2C57.3,3.2,0,60.4,0,131.2c0,56.6,36.6,104.5,87.5,121.4c6.4,1.1,8.8-2.7,8.8-6.1c0-3-0.2-13.1-0.2-23.8
c-32.2,5.9-40.5-7.8-43-15c-1.4-3.7-7.7-15-13.1-18.1c-4.5-2.4-10.9-8.3-0.2-8.5c10.1-0.2,17.3,9.3,19.7,13.1
c11.5,19.4,29.9,13.9,37.3,10.6c1.1-8.3,4.5-13.9,8.2-17.1c-28.5-3.2-58.2-14.2-58.2-63.2c0-13.9,5-25.4,13.1-34.4
c-1.3-3.2-5.8-16.3,1.3-33.9c0,0,10.7-3.4,35.2,13.1c10.2-2.9,21.1-4.3,32-4.3s21.8,1.4,32,4.3c24.5-16.6,35.2-13.1,35.2-13.1
c7,17.6,2.6,30.7,1.3,33.9c8.2,9,13.1,20.3,13.1,34.4c0,49.1-29.9,60-58.4,63.2c4.6,4,8.6,11.7,8.6,23.7c0,17.1-0.2,30.9-0.2,35.2
c0,3.4,2.4,7.4,8.8,6.1c6.3-2.1,12.4-4.7,18.3-7.8c5.9-3.1,11.5-6.6,16.9-10.6c5.4-4,10.4-8.3,15.1-13.1c4.7-4.7,9-9.8,12.8-15.2
c3.9-5.4,7.3-11.1,10.3-17c3-5.9,5.5-12.1,7.6-18.4c2-6.3,3.6-12.8,4.6-19.4c1-6.6,1.6-13.2,1.6-19.9C256,60.4,198.7,3.2,128,3.2z"
      />
    </S.Svg>
  );
};

export const LinkedIn = ({ active = false }) => {
  return (
    <S.Svg viewBox="0 0 256 256">
      <S.Path
        className={active ? "active" : null}
        d="M256,18.8V237.2c0,10.4-8.4,18.8-18.8,18.8H18.8c-10.4,0-18.8-8.4-18.8-18.8V18.8C0,8.4,8.4,0,18.8,0H237.2c10.4,0,18.8,8.4,18.8,18.8ZM75.3,97.9H37.6v120.5h37.6V97.9h.1Zm3.4-41.4c.1-12-9.6-21.8-21.5-21.8h-.7c-12.1,0-21.8,9.8-21.8,21.8s9.8,21.8,21.8,21.8h0c12,.3,21.9-9.2,22.2-21.1h0v-.7Zm139.7,88.7c0-36.2-23-50.3-45.9-50.3-15.3-.8-29.8,6.6-38.1,19.4h-1.1v-16.4h-35.4v120.5h37.6v-64.1c-1.1-13.7,8.9-25.7,22.6-27h1.4c12,0,20.9,7.5,20.9,26.5v64.5h37.6l.4-73.1Z"
      />
    </S.Svg>
  );
};

export const Menu = ({ active = false }) => {
  const [noAnim, setNoAnim] = useState(true);

  useEffect(() => {
    const toggle = () => {
      if (window.innerWidth > 576) {
        setNoAnim(true);
      }
    };

    if (active) {
      setNoAnim(false);
    }

    window.addEventListener("resize", toggle);
    return () => window.removeEventListener("resize", toggle);
  }, [active]);

  return (
    <S.Menu viewBox="0 0 32 32">
      <rect className={active ? "active" : noAnim ? "noAnim" : ""} />
      <rect className={active ? "active" : noAnim ? "noAnim" : ""} />
      <rect className={active ? "active" : noAnim ? "noAnim" : ""} />
    </S.Menu>
  );
};

export const Closed = ({ active = false }) => {
  return (
    <S.Closed viewBox="0 0 32 32">
      <rect className={active ? "active" : null} />
      <rect className={active ? "active" : null} />
    </S.Closed>
  );
};
