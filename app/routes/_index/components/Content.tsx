import type { Post } from "~/types";
import PostListView from "@components/PostListView";
import PostGridView from "@components/PostGridView";
import PinnedHeader from "./PinnedHeader";
import LatestHeader from "./LatestHeader";

export default function Content({
  pinnedPostList,
  recentPostList,
}: {
  pinnedPostList: Post[];
  recentPostList: Post[];
}) {
  return (
    <div css={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <PinnedHeader />
        <PostGridView posts={pinnedPostList} />
      </div>

      <div>
        <LatestHeader />
        <PostListView posts={recentPostList} />
      </div>
    </div>
  );
}
