import { Link } from "@remix-run/react";

export default function TableOfContent({ headings }) {
  return (
    <div css={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {headings.map((heading) => (
        <Link
          key={heading.id}
          to={`#${heading.id}`}
          css={{ marginLeft: `${heading.depth}rem` }}
        >
          {heading.text}
        </Link>
      ))}
    </div>
  );
}
