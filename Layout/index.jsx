import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <footer>footer</footer>
    </>
  );
}
