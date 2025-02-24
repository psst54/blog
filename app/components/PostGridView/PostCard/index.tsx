import { lazy, Suspense } from "react";

import type { Document } from "~/types/post";
import TagList from "~/components/TagList";

import { container, textArea, titleArea, text, subText } from "./styles";
import { COLOR } from "~/constants/color";
import { SIZE } from "~/constants/size";

const Thumbnail = lazy(() => import("./Thumbnail"));

const overlay = {
  position: "absolute" as const,
  inset: 0,

  width: "100%",
  height: "100%",

  borderRadius: SIZE.BORDER_RADIUS.POST_CARD,
};

const thumbnailArea = {
  ...overlay,
  opacity: 0.2,
};

const gradientArea = {
  ...overlay,
  background: `linear-gradient(to bottom, ${COLOR.BACKGROUND.REVERSE} 0%, transparent 80%)`,
};

export default function PostCard({ post }: { post: Document }) {
  const { thumbnail, title, sub_title, tags } = post;

  return (
    <article css={container}>
      {thumbnail && (
        <Suspense fallback={<></>}>
          <div css={thumbnailArea}>
            <Thumbnail src={thumbnail} />
          </div>
          <div css={gradientArea} />
        </Suspense>
      )}

      <div css={textArea}>
        <div css={titleArea}>
          <h2 css={text}>{title}</h2>
          <p css={subText}>{sub_title}</p>
        </div>

        <TagList data={tags} />
      </div>
    </article>
  );
}
