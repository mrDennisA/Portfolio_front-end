import React, { useEffect, useState } from "react";
import useFormat from "../../hooks/useFormat";

// export const Format = ({ children }) => {
//   return useFormat(children);
// };

export default function Heading({ element: El = "h1", children }) {
  return <El>{useFormat(children)}</El>;
}
