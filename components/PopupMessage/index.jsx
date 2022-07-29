import { useState, useEffect, useRef } from "react";

// Components
import * as Icon from "../Icons";

// Hooks
import useTimeout from "../../hooks/useTimeout";

// Styles
import * as S from "./styled";

export default function SubmitMessage(props) {
  const [delay, setDelay] = useState(false);
  const timeoutRef = useRef(null);

  const start = 100;
  const { transition = 200, timer = 4000 } = props;
  // console.log(props);

  const close = () => {
    setDelay(false);

    // Delay befor remove
    timeoutRef.current = setTimeout(() => {
      props.onClick();
    }, start + props.timer);
  };

  useEffect(() => {
    if (!props.respons) {
      setDelay(false);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [props]);

  // Delay befor show
  useTimeout(
    () => {
      setDelay(true);
    },
    start,
    props.respons
  );

  // Delay befor hidden
  useTimeout(
    () => {
      setDelay(false);
    },
    start + timer,
    props.respons
  );

  // Delay befor remove
  useTimeout(
    () => {
      props.onClick();
    },
    start + timer + transition,
    props.respons
  );

  return (
    <>
      {props.respons && (
        <S.Section className={delay ? "active " + props.respons.validation : props.respons.validation}>
          <S.Content>
            <div>
              <button onClick={close}>
                <Icon.Closed />
              </button>
            </div>
            <div>{props.respons.message}</div>
          </S.Content>
        </S.Section>
      )}
    </>
  );
}
