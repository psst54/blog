import { useEffect, useState } from "react";
import RightChevronIcon from "~/assets/RightChevronIcon";
import { COLOR } from "~/constants/color";
import { PER_PAGE_POST_COUNT } from "~/constants";
import { getArray } from "./getArray";
import { container, arrowButton, numberButton, selectedButton } from "./styles";

export default function PaginateNavigator({
  currentPage,
  count,
  onChangePage,
}: {
  currentPage: number;
  count: number;
  onChangePage: (page: number) => void;
}) {
  const maxPage = Math.ceil(count / PER_PAGE_POST_COUNT);

  const [array, setArray] = useState<number[]>([]);

  useEffect(() => {
    setArray(getArray({ currentPage, maxPage }));
  }, [currentPage]);

  function goPrev() {
    if (1 <= currentPage - 1) onChangePage(currentPage - 1);
  }

  function goNext() {
    if (currentPage + 1 <= maxPage) onChangePage(currentPage + 1);
  }

  return (
    <div css={container}>
      <button css={[arrowButton, { rotate: "180deg" }]} onClick={goPrev}>
        <RightChevronIcon size="1rem" color={COLOR.BACKGROUND.STANDARD} />
      </button>

      {array.map((page: number) => {
        return (
          <button
            key={page}
            css={[numberButton, currentPage === page && selectedButton]}
            onClick={() => onChangePage(page)}
          >
            {page}
          </button>
        );
      })}

      <button css={arrowButton} onClick={goNext}>
        <RightChevronIcon size="1rem" color={COLOR.BACKGROUND.STANDARD} />
      </button>
    </div>
  );
}
