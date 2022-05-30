import HeaderNav from "./nav/HeaderNav";
import FooterNav from "./nav/FooterNav";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <header>
          <HeaderNav />
        </header>
        <main>{children}</main>
      </div>
      <footer>
        <FooterNav />
      </footer>
    </>
  );
}
