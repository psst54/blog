import type { Document } from "~/types/post";
import PostGridView from "~/components/PostGridView";

import PinnedHeader from "./PinnedHeader";

export default function PinnedSection({ postList }: { postList: Document[] }) {
  return (
    <div>
      <PinnedHeader />
      <PostGridView postList={postList} />
    </div>
  );
}
