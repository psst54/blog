import type { Document } from "~/types/post";
import PostListView from "~/components/PostListView";
import PaginateNavigator from "~/components/PaginateNavigator";
import usePagination from "~/hooks/usePagination";

export default function Database({ posts }: { posts: Document[] }) {
  const [currentPage, currentPagePosts, setPage] = usePagination({
    data: posts,
  });

  return (
    <main css={container}>
      <PostListView postList={currentPagePosts} />
      <PaginateNavigator
        currentPage={currentPage}
        count={posts.length}
        onChangePage={(page) => {
          setPage(page);
        }}
      />
    </main>
  );
}

const container = {
  display: "flex",
  flexDirection: "column" as const,

  width: "100%",
};
