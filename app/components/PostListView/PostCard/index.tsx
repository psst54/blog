import { lazy, Suspense } from "react";
import TagList from "@components/TagList";
import { container, textArea, titleArea, title, subTitle } from "./styles";
import type { Tag } from "~/types";

const Thumbnail = lazy(() => import("./Thumbnail"));

export default function PostCard({ postData }: { postData: any }) {
  return (
    <div css={container}>
      <div css={textArea}>
        <div css={titleArea}>
          <h2 css={title}>{postData.title}</h2>
          <p css={subTitle}>{postData.sub_title}</p>
        </div>

        <TagList data={postData.tags as Tag[]} />
      </div>

      {postData.thumbnail && (
        <Suspense fallback={<></>}>
          <Thumbnail thumbnail={postData.thumbnail} title={postData.title} />
        </Suspense>
      )}
    </div>
  );
}
