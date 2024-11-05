import { lazy, Suspense } from "react";
import TagList from "@components/TagList";
import { container, textArea, titleArea } from "./styles";
import type { Post } from "~/types";
import Text from "~/components/atoms/Text";

const Thumbnail = lazy(() => import("./Thumbnail"));

export default function PostCard({ postData }: { postData: Post }) {
  return (
    <article css={container}>
      <div css={textArea}>
        <div css={titleArea}>
          <Text.Title level={2}>{postData.title}</Text.Title>
          <Text.Body level={2}>{postData.sub_title}</Text.Body>
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
