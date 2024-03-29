import { lazy, Suspense } from "react";
import TagList from "@components/TagList";
import { Container, ThumbNailArea, TextArea, Title, SubTitle } from "./styles";
import type { Tag } from "~/types";

const Thumbnail = lazy(() => import("./Thumbnail"));

export default function PostCard({ postData }: { postData: any }) {
  return (
    <div css={Container}>
      {postData.thumbnail && (
        <div css={ThumbNailArea}>
          <Suspense fallback={<></>}>
            <Thumbnail thumbnail={postData.thumbnail} title={postData.title} />
          </Suspense>
        </div>
      )}

      <div css={[TextArea, { height: postData.thumbnail ? "50%" : "100%" }]}>
        <h2 css={Title}>{postData.title}</h2>
        <h3 css={SubTitle}>{postData.sub_title}</h3>

        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <TagList data={postData.tags as Tag[]} />
        </div>
      </div>
    </div>
  );
}
