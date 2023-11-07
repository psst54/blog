export default function TableOfContent({ headings }) {
  return (
    <div css={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {headings.map((heading) => (
        <a key={heading.id} href={`#${heading.id}`}>
          {heading.text}
        </a>
      ))}
    </div>
  );
}
