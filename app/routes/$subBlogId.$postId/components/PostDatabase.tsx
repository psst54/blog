import PostListView from "@components/PostListView";
import PaginateNavigator from "@components/PaginateNavigator";
import usePagination from "@hooks/usePagination";
import type { Post } from "~/types";

export default function Database({ posts }: { posts: Post[] }) {
  const [currentPage, currentPagePosts, setPage] = usePagination({
    data: posts,
  });

  return (
    <div css={container}>
      <PostListView posts={currentPagePosts} />
      <PaginateNavigator
        currentPage={currentPage}
        count={posts.length}
        onChangePage={(page) => {
          setPage(page);
        }}
      />
    </div>
  );
}

const container = {
  display: "flex",
  flexDirection: "column" as const,

  width: "100%",
};
