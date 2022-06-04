import React from "react";

export default function Heading(props) {
  const { element: El = "h1" } = props;

  return <El>{props.children}</El>;
}
