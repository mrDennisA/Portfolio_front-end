import NextHead from "next/head";

export default function Head(props) {
  const { title = "", description = "" } = props;
  return (
    <NextHead>
      <title>{title + " | DA-Portfolio"}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
