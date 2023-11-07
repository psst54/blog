import { useMemo } from "react";
import Tag from "@components/Tag";
import { color } from "@styles/color";
import Breadcrumb from "./Breadcrumb";

export default function PostHeader({
  id,
  title,
  subTitle,
  tags,
  postDate,
  plainCategoryData,
}: {
  id: string;
  title: string | null;
  subTitle: string | null;
  tags: { text: string; isSpoiler: boolean }[] | null;
  postDate: string | null;
}) {
  function padNumber(number: number) {
    if (number < 10) return "0" + number;
    return number;
  }

  function formatDate(dateString: string | null) {
    if (!dateString) return "";

    const dateObject = new Date(dateString);
    const utc =
      dateObject.getTime() + dateObject.getTimezoneOffset() * 60 * 1000;
    const TIME_DIFF = 9 * 60 * 60 * 1000;
    const ktc = new Date(utc + TIME_DIFF);

    const year = ktc.getFullYear();
    const month = ktc.getMonth() + 1;
    const date = ktc.getDate();

    return year + "." + padNumber(month) + "." + padNumber(date) + ".";
  }

  function getAncestors(id) {
    if (!id) return [];
    let ret = [];

    while (id !== null) {
      ret.unshift(plainCategoryData[id]);
      id = plainCategoryData[id].parentId;
    }

    return ret;
  }

  const breadcrumbData = useMemo(() => {
    return getAncestors(id);
  }, [id]);

  return (
    <div>
      <Breadcrumb breadcrumbData={breadcrumbData} />

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

      {postDate && (
        <p css={{ marginTop: "0.5rem", textAlign: "right" }}>
          {formatDate(postDate)}
        </p>
      )}

      <hr
        css={{
          width: "100%",
          border: `1px solid ${color.border.standard}`,
          margin: "1rem 0",
        }}
      />
    </div>
  );
}
