import type { Document } from "~/types/post";
import { mq } from "~/constants/size";
import PostListView from "~/components/PostListView";

import RecentHeader from "./RecentHeader";

export default function RecentSection({ postList }: { postList: Document[] }) {
  return (
    <div>
      <RecentHeader />
      <div css={{ padding: "0 1rem", [mq[1]]: { padding: "0 0.5rem" } }}>
        <PostListView postList={postList} />
      </div>
    </div>
  );
}
