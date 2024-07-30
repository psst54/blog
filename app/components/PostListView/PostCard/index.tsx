import { lazy, Suspense } from "react";
import TagList from "@components/TagList";
import { container, textArea, titleArea, title, subTitle } from "./styles";
import type { Post } from "~/types";

const Thumbnail = lazy(() => import("./Thumbnail"));

export default function PostCard({ postData }: { postData: Post }) {
  return (
    <article css={container}>
      <div css={textArea}>
        <div css={titleArea}>
          <h2 css={title}>{postData.title}</h2>
          <p css={subTitle}>{postData.sub_title}</p>
        </div>

        <TagList data={postData.tags} />
      </div>

      {postData.thumbnail && (
        <Suspense fallback={<></>}>
          <Thumbnail thumbnail={postData.thumbnail} />
        </Suspense>
      )}
    </article>
  );
}
