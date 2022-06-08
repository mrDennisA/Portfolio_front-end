import { useState, useEffect, useRef } from "react";

// Components
import { BARCLOSED_ICON } from "../../Icons";

// Hooks
import useTimeout from "../../../hooks/useTimeout";

// Styles
import styles from "./submitMessage.module.css";

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
  const validation = props.respons && (props.respons.validation ? styles.success : styles.error);

  return (
    <>
      {props.respons && (
        <div className={delay ? styles.container + " " + validation + " " + styles.active : styles.container + " " + validation}>
          <div className={styles.content}>
            <div>
              <button onClick={close}>{BARCLOSED_ICON}</button>
            </div>
            <div>{props.respons.message}</div>
          </div>
        </div>
      )}
    </>
  );
}
