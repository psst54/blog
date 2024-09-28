import type { Post } from "~/types";
import PostListView from "@components/PostListView";
import PostGridView from "@components/PostGridView";
import PinnedHeader from "./PinnedHeader";
import LatestHeader from "./LatestHeader";

export default function Content({ postList }: { postList: Post[] }) {
  return (
    <div css={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <PinnedHeader />
        <PostGridView posts={postList} />
      </div>

      <div>
        <LatestHeader />
        <PostListView posts={postList} />
      </div>
    </div>
  );
}
