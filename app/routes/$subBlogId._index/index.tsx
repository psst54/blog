import { useLoaderData } from "@remix-run/react";

import usePagination from "~/hooks/usePagination";
import PostHeader from "~/components/PostHeader";
import PostListView from "~/components/PostListView";
import PaginateNavigator from "~/components/PaginateNavigator";

export { loader } from "./utils/loader";
export { meta } from "./utils/meta";

export default function PostPage() {
  const { content } = useLoaderData();

  const { currentPage, currentPostList, setPage } = usePagination({
    data: content.posts || [],
  });

  return (
    <div css={{ width: "100%", height: "100%" }}>
      <PostHeader
        id={content.id}
        title={content?.title}
        subTitle={content?.subTitle}
        tags={content?.tags}
        postDate={content?.created_at}
      />

      <PostListView postList={currentPostList} />

      <PaginateNavigator
        currentPage={currentPage}
        count={content?.posts.length}
        onChangePage={(page) => {
          setPage(page);
        }}
      />
    </div>
  );
}
