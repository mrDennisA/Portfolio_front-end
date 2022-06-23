export default function Layout({ children }) {
  return (
    <>
      <div>
        <header>header</header>
        <main>{children}</main>
      </div>
      <footer>footer</footer>
    </>
  );
}
