import { useLoaderData, useOutletContext } from "@remix-run/react";

import type { Category } from "~/types";
import usePagination from "~/hooks/usePagination";

import PostHeader from "@components/PostHeader";
import PostListView from "@components/PostListView";
import PaginateNavigator from "@components/PaginateNavigator";

export { loader } from "./utils/loader";
export { meta } from "./utils/meta";

export default function PostPage() {
  const { content } = useLoaderData();

  const categoryData: Category[] = useOutletContext();

  const [currentPage, currentPagePosts, setPage] = usePagination({
    data: content?.posts,
  });

  return (
    <div css={{ width: "100%", height: "100%" }}>
      <PostHeader
        id={content.id}
        title={content?.title}
        subTitle={content?.subTitle}
        tags={content?.tags}
        postDate={content?.created_at}
        categoryData={categoryData}
      />

      <PostListView posts={currentPagePosts} />

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
