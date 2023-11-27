import { useEffect, useState } from "react";
import RightChevronIcon from "~/assets/RightChevronIcon";
import { color } from "~/styles/color";
import { PER_PAGE_POST_COUNT } from "~/constants";
import { getArray } from "./getArray";

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

  return (
    <div css={container}>
      <button css={[arrowButton, { rotate: "180deg" }]}>
        <RightChevronIcon size="1rem" color={color.background.standard} />
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

      <button css={arrowButton}>
        <RightChevronIcon size="1rem" color={color.background.standard} />
      </button>
    </div>
  );
}

const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
};

const button = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "2rem",
  height: "2rem",
  background: "transparent",

  border: "none",
  borderRadius: "100%",
  outline: "none",

  cursor: "pointer",
};

const arrowButton = {
  ...button,
  background: color.secondary.standard,
};

const numberButton = {
  ...button,

  "&:hover": {
    background: color.background.toSecondary,
  },
};

const selectedButton = {
  background: color.background.toSecondary,
};
