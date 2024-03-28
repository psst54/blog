import { Link } from "@remix-run/react";
import RightChevronIcon from "@assets/RightChevronIcon";
import { color } from "@styles/color";
import { ItemContainer, Title, ToggleButton } from "./categoryItemStyles";

export default function CategoryItem({
  id = "",
  title = "",
  href = "/",
  isSelected = false,
  isOpen = false,
  indent = 0,
  onToggleCategory,
}: {
  id: string;
  title: string;
  href: string;
  isSelected: boolean;
  isOpen: boolean;
  indent: number;
  onToggleCategory: (id: string) => void;
}) {
  const handleAnchorClick = (event: MouseEvent) => {
    const target: HTMLElement | null = event.target as HTMLElement | null;
    if (!target) return;

    if (
      target.tagName.toLowerCase() === "button" ||
      target.tagName.toLowerCase() === "svg" ||
      target.tagName.toLowerCase() === "path"
    ) {
      event.preventDefault();
    }
  };

  const handleButtonClick = () => {
    onToggleCategory(id);
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
          ItemContainer(indent),
          isSelected && {
            background: color.primary.standard,
          },
        ]}
      >
        <button
          aria-label="toggle menu"
          onClick={handleButtonClick}
          css={[
            ToggleButton,
            isOpen && { transform: isOpen ? "rotate(90deg)" : "" },
          ]}
        >
          <RightChevronIcon
            size="1rem"
            color={isSelected ? color.text.reverse : color.text.standard}
          />
        </button>

        <h4
          css={[
            Title,
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
