import { useEffect, useState } from "react";
import RightChevronIcon from "@assets/RightChevronIcon";
import { COLOR } from "@constants/color";
import { PER_PAGE_POST_COUNT } from "@constants/index";
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
  }, [currentPage, maxPage]);

  function goPrev() {
    const prevPage = currentPage - 1;
    if (1 <= prevPage) {
      onChangePage(prevPage);
    }
  }

  function goNext() {
    const nextPage = currentPage + 1;
    if (nextPage <= maxPage) {
      onChangePage(nextPage);
    }
  }

  if (maxPage === 1) {
    return <></>;
  }

  return (
    <div css={container}>
      <button css={[arrowButton, { rotate: "180deg" }]} onClick={goPrev}>
        <Icon />
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
        <Icon />
      </button>
    </div>
  );
}

function Icon() {
  return <RightChevronIcon size="1rem" color={COLOR.BACKGROUND.STANDARD} />;
}
