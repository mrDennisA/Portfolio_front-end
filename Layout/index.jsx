import { useContext, useCallback } from "react";

import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "../components/CustomCursor";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <CustomCursor />
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
