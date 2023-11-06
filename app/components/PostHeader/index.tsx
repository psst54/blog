import Tag from "@components/Tag";
import { color } from "@styles/color";

export default function PostHeader({
  title,
  subTitle,
  tags,
  postDate,
}: {
  title: string | null;
  subTitle: string | null;
  tags: { text: string; isSpoiler: boolean }[] | null;
  postDate: string | null;
}) {
  function padNumber(number) {
    if (number < 10) return "0" + number;
    return number;
  }

  function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();

    return year + "." + padNumber(month) + "." + padNumber(date) + ".";
  }

  return (
    <>
      <h1 css={{ fontSize: "2.4rem", fontWeight: 600, wordBreak: "keep-all" }}>
        {title}
      </h1>
      {subTitle && (
        <h2
          css={{
            marginTop: "0.5rem",
            color: color.text.secondary,
            fontSize: "1.2rem",
            fontWeight: 500,
            wordBreak: "keep-all",
          }}
        >
          {subTitle}
        </h2>
      )}
      {tags && tags.length > 0 && (
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.25rem",
            marginTop: "0.5rem",
          }}
        >
          {tags.map(
            (tag: { text: string; isSpoiler: boolean }, tagIndex: number) => (
              <Tag key={tagIndex} item={tag} />
            )
          )}
        </div>
      )}

      <p css={{ marginTop: "0.5rem", textAlign: "right" }}>
        {formatDate(postDate)}
      </p>

      <hr
        css={{
          width: "100%",
          border: `1px solid ${color.border.standard}`,
          margin: "1rem 0",
        }}
      />
    </>
  );
}