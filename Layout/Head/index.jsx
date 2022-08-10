import HeadNext from "next/head";

// Hooks
import useFormat from "../../hooks/useFormat";

export default function Head({ title = "", description = "" }) {
  return (
    <HeadNext>
      <title>{title + " - DA"}</title>
      <meta name="description" content={description} />
    </HeadNext>
  );
}
