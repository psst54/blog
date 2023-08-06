import { Link } from "@remix-run/react";
import RightChevronIcon from "@assets/RightChevronIcon";

const itemContainer = (indent: number) => {
  return {
    display: "flex",
    alignItems: "center",

    height: "2.25rem",
    paddingRight: "0.5rem",
    paddingLeft: `calc(${indent} * 1rem + 0.5rem)`,

    borderRadius: "0.75rem",
  };
};
const titleStyle = {
  marginLeft: "0.5rem",
  fontSize: "1.25rem",
  fontWeight: 400,
};
const postCountStyle = {
  marginLeft: "0.25rem",
  color: "#0000004D",
  fontSize: "1rem",
};

export default function CategoryItem({
  key,
  href = "/",
  title = "",
  postCount = 0,
  isSelected = false,
  indent = 0,
}: {
  key: number | null;
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
        key={key}
        css={[
          itemContainer(indent),
          isSelected && {
            background: "#8BE2B3B2",
          },
        ]}
      >
        <RightChevronIcon size="1rem" color="#000" />
        <h4 css={titleStyle}>{title}</h4>
        <p css={postCountStyle}>· {postCount}</p>
      </div>
    </Link>
  );
}
