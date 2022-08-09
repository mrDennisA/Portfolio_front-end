import React, { useRef } from "react";

// Components
import Heading from "../Heading";
import DelayView from "../DelayView";

// Hooks
import useObserver from "../../hooks/useObserver";

// Styles
import * as S from "./styles";

export default function AboutList({ data, title, type }) {
  const ref = useRef();
  const inView = useObserver(ref);

  // console.log(data);

  return (
    <S.Section ref={ref}>
      <DelayView active={inView} delay={100}>
        <Heading element="h2">{title}</Heading>
      </DelayView>
      <DelayView active={inView} delay={100}>
        {type === "table" && (
          <S.Table>
            <S.TableBody>
              {data.map(({ attributes }, index) => {
                return (
                  <S.TableRow key={index}>
                    <S.TableCell>
                      <span>{attributes.fromDate ? attributes.fromDate : ""}</span>
                      <span>{"-"}</span>
                      <span>{attributes.toDate ? attributes.toDate : ""}</span>
                    </S.TableCell>
                    <S.TableCell>
                      <Heading element="h4">{attributes.title}</Heading>
                      <p>{attributes.description}</p>
                    </S.TableCell>
                  </S.TableRow>
                );
              })}
            </S.TableBody>
          </S.Table>
        )}
        {type === "list" && (
          <S.List>
            <div></div>
            <div>
              {data.map(({ attributes: { skills }, id: typeId }) => {
                return (
                  <S.Ul key={typeId}>
                    {skills.data.map(({ attributes: { title }, id: skillId }) => {
                      return <S.Li key={skillId}>{title}</S.Li>;
                    })}
                  </S.Ul>
                );
              })}
            </div>
          </S.List>
        )}
      </DelayView>
    </S.Section>
  );
}
