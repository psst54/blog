import { useState, useCallback, useEffect } from "react";
import { PER_PAGE_POST_COUNT } from "~/constants/index";
import type { Post } from "~/types";

export default function usePagination({
  data,
}: {
  data: Post[];
}): [
  currentPage: number,
  currentPagePosts: Post[],
  setPage: (page: number) => void
] {
  const [currentPagePosts, setCurrentPagePosts] = useState<Post[]>(
    data.slice(0, PER_PAGE_POST_COUNT)
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setCurrentPage(1);
    setCurrentPagePosts(data.slice(0, PER_PAGE_POST_COUNT));
  }, [data]);

  const setPage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      setCurrentPagePosts(
        data.slice((page - 1) * PER_PAGE_POST_COUNT, page * PER_PAGE_POST_COUNT)
      );
    },
    [data]
  );

  return [currentPage, currentPagePosts, setPage];
}
