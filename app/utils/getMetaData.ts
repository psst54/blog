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
  tagList?: string;
  thumbnail?: string;
}) {
  const data = [];

  data.push({ name: "author", content: AUTHOR });
  data.push({ name: "og:site_name", content: SITE_NAME });
  data.push({ name: "og:type", content: "website" });

  const titleText = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  data.push({ title: titleText });
  data.push({ name: "og:title", content: titleText });

  const subTitleText = subTitle || "FE 개발자가 공부하는 이야기";
  data.push({ name: "description", content: subTitleText });
  data.push({ name: "og:description", content: subTitleText });

  const tagText = tagList || "코딩";
  data.push({ name: "keywords", content: tagText });

  if (thumbnail) {
    data.push({ name: "og:image", content: thumbnail });
  }

  return data;
}
