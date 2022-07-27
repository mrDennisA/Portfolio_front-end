import { useContext, useCallback } from "react";

import LoadingTrasition from "../components/LoadingTransition";

import Header from "./Header";
import Footer from "./Footer";
import * as S from "./Wrapper";

export default function Layout({ children }) {
  return (
    <>
      <S.Margin>
        <S.Padding>
          <Header />
          <LoadingTrasition>
            <main>{children}</main>
          </LoadingTrasition>
        </S.Padding>
      </S.Margin>
      <Footer />
    </>
  );
}
