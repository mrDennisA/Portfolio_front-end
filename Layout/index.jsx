import { useContext, useCallback } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Margin, Padding } from "./Wrapper";

export default function Layout({ children }) {
  return (
    <>
      <Margin>
        <Padding>
          <Header />
          <main>{children}</main>
        </Padding>
      </Margin>
      <Footer />
    </>
  );
}
