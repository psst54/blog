import { lazy, Suspense } from "react";

import type { Document } from "~/types/post";
import TagList from "~/components/TagList";

import { container, textArea, titleArea, text, subText } from "./styles";

const Thumbnail = lazy(() => import("./Thumbnail"));

export default function PostCard({ post }: { post: Document }) {
  const { thumbnail, title, sub_title, tags } = post;

  return (
    <article css={container}>
      <Suspense fallback={<></>}>
        <Thumbnail src={thumbnail} />
      </Suspense>

      <div css={textArea}>
        <div css={titleArea}>
          <h3 css={text}>{title}</h3>
          <p css={subText}>{sub_title}</p>
        </div>

        <TagList data={tags} />
      </div>
    </article>
  );
}
