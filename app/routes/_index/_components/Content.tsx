import type { Document } from "~/types/post";
import PostListView from "@components/PostListView";
import PostGridView from "@components/PostGridView";
import PinnedHeader from "./PinnedHeader";
import LatestHeader from "./LatestHeader";
import { mq } from "~/constants/size";

export default function Content({
  pinnedPostList,
  recentPostList,
}: {
  pinnedPostList: Document[];
  recentPostList: Document[];
}) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "100%",
      }}
    >
      <div>
        <PinnedHeader />
        <PostGridView posts={pinnedPostList} />
      </div>

      <div>
        <LatestHeader />
        <div css={{ padding: "0 1rem", [mq[1]]: { padding: "0 0.5rem" } }}>
          <PostListView posts={recentPostList} />
        </div>
      </div>
    </div>
  );
}
