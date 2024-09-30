const SITE_NAME = "PSST54's log";
const AUTHOR = "psst54";

export default function getMetaData({
  pathname,
  title,
  subTitle,
  tagList,
  thumbnail,
}: {
  pathname: string;
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

  data.push({
    tagName: "link",
    rel: "canonical",
    href: `https://psst54.me${pathname}`,
  });

  data.push({ name: "robots", content: "index, follow" });
  data.push({ name: "NaverBot", content: "All" });
  data.push({ name: "NaverBot", content: "index,follow" });
  data.push({ name: "Yeti", content: "All" });
  data.push({ name: "Yeti", content: "index,follow" });

  return data;
}
