const SITE_NAME = "PSST54's Log";
const TITLE = "프론트엔드 개발자의 기술 블로그";
const AUTHOR = "psst54";
const DESCRIPTION =
  "개발하면서 배운 것들을 정리합니다 | 프로젝트 회고와 트러블 슈팅 | JS/TS, React, Git";

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

  const titleText = `${SITE_NAME} | ${title || TITLE}`;
  data.push({ title: titleText });
  data.push({ name: "og:title", content: titleText });

  const subTitleText = subTitle || DESCRIPTION;
  data.push({ name: "description", content: subTitleText });
  data.push({ name: "og:description", content: subTitleText });

  const tagText = tagList || "코딩";
  data.push({ name: "keywords", content: tagText });

  if (thumbnail) {
    data.push({ name: "og:image", content: thumbnail });
    data.push({ name: "twitter:image", content: thumbnail });
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

  data.push({ name: "twitter:card", content: "summary_large_image" });
  data.push({ name: "twitter:title", content: titleText });
  data.push({ name: "twitter:description", content: subTitleText });

  return data;
}
