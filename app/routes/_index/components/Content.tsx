import type { Post } from "~/types";
import PostListView from "@components/PostListView";
import PinnedHeader from "./PinnedHeader";
import LatestHeader from "./LatestHeader";

export default function Content({ postList }: { postList: Post[] }) {
  return (
    <div>
      {/* <PinnedHeader />
      <PostListView posts={postList} /> */}

      <LatestHeader />
      <PostListView posts={postList} />
    </div>
  );
}
