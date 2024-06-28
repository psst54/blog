import type { Tag } from "~/types";

const SITE_NAME = "PSST54's log";
const AUTHOR = "psst54";

export default function getMetaData({
  title,
  subTitle,
  tagList,
  thumbnail,
}: {
  title?: string;
  subTitle?: string;
  tagList?: Tag[];
  thumbnail?: string;
}) {
  const data = [];

  data.push({ name: "author", content: AUTHOR });
  data.push({ name: "og:site_name", content: SITE_NAME });
  data.push({ name: "og:type", content: "website" });

  data.push({ title: title ? `${title} | ${SITE_NAME}` : SITE_NAME });
  data.push({ name: "og:title", content: title || SITE_NAME });

  if (subTitle) {
    data.push({ name: "description", content: subTitle });
    data.push({ name: "og:description", content: subTitle });
  }

  if (tagList) {
    data.push({
      name: "keywords",
      content: tagList.map((tag: Tag) => tag.text).join(", "),
    });
  }

  if (thumbnail) {
    data.push({ name: "og:image", content: thumbnail });
  }

  return data;
}
