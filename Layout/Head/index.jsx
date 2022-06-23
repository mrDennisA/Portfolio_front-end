import NextHead from "next/head";

export default function Head({ title = "", description = "" }) {
  return (
    <NextHead>
      <title>{title + " - DA"}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/favicon.svg" />
    </NextHead>
  );
}
