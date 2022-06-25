import { useContext } from "react";

// Hooks
import useMousePosition from "../../hooks/useMousePosition";

// Context
import { CursorContext } from "../../context/CursorContextProvider";

// Styles
import * as S from "./styled";

export default function CustomCursor() {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  // console.log(cursor);

  return <S.Ring hover={cursor.active} style={{ left: clientX, top: clientY }} />;
}
