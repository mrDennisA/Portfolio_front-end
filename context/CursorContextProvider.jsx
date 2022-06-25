import React, { createContext, useState } from "react";

export const CursorContext = createContext();

export default function CursorContextProvider({ children }) {
  const [cursor, setCursor] = useState({ active: false });

  return <CursorContext.Provider value={[cursor, setCursor]}>{children}</CursorContext.Provider>;
}
