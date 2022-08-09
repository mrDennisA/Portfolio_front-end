import Link from "next/link";

// Hooks
import useFormat from "../../../../hooks/useFormat";

export default function Links({ data }) {
  return (
    <Link href={data.link ? data.link : "#"}>
      <a target="_blank" rel="noopener noreferrer">
        {useFormat(data.title)}
      </a>
    </Link>
  );
}
