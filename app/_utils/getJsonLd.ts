import type { Document } from "~/types/post";

const SITE_NAME = "PSST54's Log";
const TITLE = "프론트엔드 개발자의 기술 블로그";
const AUTHOR = "psst54";
const DESCRIPTION =
  "개발하면서 배운 것들을 정리합니다 | 프로젝트 회고와 트러블 슈팅 | JS/TS, React, Git";
const DEFAULT_IMAGE =
  "https://tnzycdohhtvupgagmwfx.supabase.co/storage/v1/object/public/postImages//thumbnail.webp";

export default function getJsonLd({
  pathname,
  postData,
}: {
  pathname: string;
  postData: Document;
}) {
  const { title, sub_title, thumbnail, created_at, last_edited_at } = postData;

  const pageUrl = `https://psst54.me${pathname}`;
  const titleText = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | ${TITLE}`;
  const subTitleText = sub_title || DESCRIPTION;

  return {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: titleText,
      description: subTitleText,
      image: thumbnail || DEFAULT_IMAGE,
      author: {
        "@type": "Person",
        name: AUTHOR,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: "https://psst54.me/favicon.png",
        },
      },
      datePublished: created_at,
      dateModified: last_edited_at,
    },
  };
}
