import { Link } from "@remix-run/react";
import RightChevronIcon from "@assets/RightChevronIcon";

const itemContainer = (indent: number) => {
  return {
    display: "flex",
    alignItems: "center",

    width: "100%",
    height: "2.25rem",
    paddingRight: "0.5rem",
    paddingLeft: `calc(${indent} * 1rem + 0.2rem)`,

    borderRadius: "0.75rem",
  };
};
const titleStyle = {
  flexGrow: 1,
  marginLeft: "0.1rem",
  fontSize: "1.25rem",
  fontWeight: 400,

  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  wordBreak: "break-all",
};

export default function CategoryItem({
  subBlogId,
  id = 0,
  title = "",
  isSelected = false,
  isOpen = false,
  indent = 0,
  setIsPostOpen,
}: {
  subBlogId: string;
  id: number;
  title: string;
  isSelected: boolean;
  isOpen: boolean;
  indent: number;
  setIsPostOpen: Function;
}) {
  const handleAnchorClick = (event) => {
    if (
      event.target.tagName.toLowerCase() === "button" ||
      event.target.tagName.toLowerCase() === "svg" ||
      event.target.tagName.toLowerCase() === "path"
    ) {
      event.preventDefault();
    }
  };

  const handleButtonClick = () => {
    setIsPostOpen(id);
  };

  return (
    <Link
      to={`/${subBlogId}/${id}`}
      css={{
        textDecoration: "none",
        color: "black",
        "&:active": { color: "black" },
      }}
      onClick={handleAnchorClick}
    >
      <div
        css={[
          itemContainer(indent),
          isSelected && {
            background: "#8BE2B3B2",
          },
        ]}
      >
        <button
          aria-label="toggle menu"
          onClick={handleButtonClick}
          css={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            width: "1.8rem",
            height: "1.8rem",
            background: "transparent",

            borderRadius: "0.5rem",
            border: "none",
            outline: "none",

            transform: isOpen ? "rotate(90deg)" : "",

            "&:hover": { background: "#FFFFFFB2" },
            cursor: "pointer",
          }}
        >
          <RightChevronIcon size="1rem" color="#000" />
        </button>

        <h4 css={titleStyle}>{title}</h4>
      </div>
    </Link>
  );
}
