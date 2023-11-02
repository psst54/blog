import { Link } from "@remix-run/react";
import RightChevronIcon from "@assets/RightChevronIcon";
import { color } from "@styles/color";

const itemContainer = (indent: number) => {
  return {
    display: "flex",
    alignItems: "center",

    width: "100%",
    height: "2.25rem",
    paddingRight: "0.5rem",
    paddingLeft: `calc(${indent} * 1rem + 0.2rem)`,

    borderRadius: "2rem",

    // color: color.text.standard,
  };
};
const titleStyle = {
  flexGrow: 1,
  marginLeft: "0.1rem",
  fontSize: "1rem",
  fontWeight: 400,

  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  wordBreak: "break-all",
};

export default function CategoryItem({
  id = 0,
  title = "",
  href = "/",
  isSelected = false,
  isOpen = false,
  indent = 0,
  toggleCategory,
}: {
  id: number;
  title: string;
  href: string;
  isSelected: boolean;
  isOpen: boolean;
  indent: number;
  toggleCategory: (id: number) => void;
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
    toggleCategory(id);
  };

  return (
    <Link
      to={href}
      css={{
        textDecoration: "none",
        "&:active": { color: color.text.standard },
      }}
      onClick={handleAnchorClick}
    >
      <div
        css={[
          itemContainer(indent),
          isSelected && {
            background: color.primary.standard,
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

            borderRadius: "100%",
            border: "none",
            outline: "none",

            transform: isOpen ? "rotate(90deg)" : "",

            "&:hover": { background: color.primary.shadow + "B2" },
            cursor: "pointer",
          }}
        >
          <RightChevronIcon
            size="1rem"
            color={isSelected ? color.text.reverse : color.text.standard}
          />
        </button>

        <h4
          css={[
            titleStyle,
            {
              color: isSelected ? color.text.reverse : color.text.standard,
              fontWeight: isSelected ? 600 : 500,
            },
          ]}
        >
          {title}
        </h4>
      </div>
    </Link>
  );
}
