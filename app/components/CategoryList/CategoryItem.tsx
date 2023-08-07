import { Link } from "@remix-run/react";
import RightChevronIcon from "@assets/RightChevronIcon";

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
  href = "/",
  title = "",
  postCount = 0,
  isSelected = false,
  indent = 0,
}: {
  href: string;
  title: string;
  postCount: number;
  isSelected: boolean;
  indent: number;
}) {
  return (
    <Link
      to={href}
      css={{
        textDecoration: "none",
        color: "black",
        "&:active": { color: "black" },
      }}
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
