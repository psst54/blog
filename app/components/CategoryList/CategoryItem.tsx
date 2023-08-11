import { Link } from "@remix-run/react";
import loadable from "@loadable/component";
const RightChevronIcon = loadable(() => import("@assets/RightChevronIcon"));

const itemContainer = (indent: number) => {
  return {
    display: "flex",
    alignItems: "center",

    height: "2.25rem",
    paddingRight: "0.5rem",
    paddingLeft: `calc(${indent} * 1rem + 0.2rem)`,

    borderRadius: "0.75rem",
  };
};
const titleStyle = {
  marginLeft: "0.1rem",
  fontSize: "1.25rem",
  fontWeight: 400,
};
const postCountStyle = {
  marginLeft: "0.25rem",
  color: "#0000004D",
  fontSize: "1rem",
};

export default function CategoryItem({
  id = 0,
  title = "",
  postCount = 0,
  isSelected = false,
  isOpen = false,
  indent = 0,
  setDataOpen,
}: {
  id: number;
  title: string;
  postCount: number;
  isSelected: boolean;
  isOpen: boolean;
  indent: number;
  setDataOpen: Function;
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
    setDataOpen(id);
  };

  return (
    <Link
      to={`/subBlog/${id}`}
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
        <p css={postCountStyle}>· {postCount}</p>
      </div>
    </Link>
  );
}
