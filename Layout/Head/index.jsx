import Head from "next/head";

export default function HeadNext({ title = "", description = "" }) {
  return (
    <Head>
      <title>{title + " - DA"}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
