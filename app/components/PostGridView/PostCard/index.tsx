import { lazy, Suspense } from "react";
import TagList from "@components/TagList";
import { container, textArea, titleArea, subTitle } from "./styles";
import type { Post } from "~/types";
import Text from "~/components/atoms/Text";

const Thumbnail = lazy(() => import("./Thumbnail"));

export default function PostCard({ postData }: { postData: Post }) {
  return (
    <article css={container}>
      {postData.thumbnail && (
        <Suspense fallback={<></>}>
          <Thumbnail thumbnail={postData.thumbnail} />
        </Suspense>
      )}

      <div css={textArea}>
        <div css={titleArea}>
          <Text.Title level={2}>{postData.title}</Text.Title>
          <p css={subTitle}>{postData.sub_title}</p>
        </div>

        <TagList data={postData.tags} />
      </div>
    </article>
  );
}
