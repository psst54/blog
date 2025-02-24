import { useState, useCallback, useEffect } from "react";
import type { Document } from "~/types/post";

export const PER_PAGE_POST_COUNT = 12;

interface UsePaginationReturn {
  currentPage: number;
  currentPostList: Document[];
  setPage: (page: number) => void;
}

export default function usePagination({
  data,
}: {
  data: Document[];
}): UsePaginationReturn {
  const [currentPostList, setCurrentPostList] = useState<Document[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setCurrentPage(1);
    setCurrentPostList(data.slice(0, PER_PAGE_POST_COUNT));
  }, [data]);

  const setPage = useCallback(
    (page: number) => {
      console.log();
      if (page < 1 || page > Math.ceil(data.length / PER_PAGE_POST_COUNT)) {
        return;
      }

      setCurrentPage(page);
      setCurrentPostList(
        data.slice((page - 1) * PER_PAGE_POST_COUNT, page * PER_PAGE_POST_COUNT)
      );
    },
    [data]
  );

  return { currentPage, currentPostList, setPage };
}
