import { Link } from "@remix-run/react";
import RightChevronIcon from "@assets/RightChevronIcon";
import { COLOR } from "@constants/color";
import { ItemContainer, Title, ToggleButton } from "./categoryItemStyles";

export default function CategoryItem({
  id,
  emoji,
  title,
  href,
  isSelected = false,
  isOpen = false,
  indent = 0,
  onToggleCategory,
}: {
  id: string;
  emoji?: string;
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
      }}
      onClick={handleAnchorClick}
    >
      <div
        css={[
          ItemContainer(indent),
          isSelected && {
            background: COLOR.PRIMARY.STANDARD,
            color: COLOR.TEXT.REVERSE,
            fontWeight: 600,
            "&:hover": {
              background: COLOR.PRIMARY.DARK,
            },
          },
        ]}
      >
        <button
          aria-label="toggle menu"
          onClick={handleButtonClick}
          css={[ToggleButton, isOpen && { transform: "rotate(90deg)" }]}
        >
          <RightChevronIcon
            color={isSelected ? COLOR.TEXT.REVERSE : COLOR.TEXT.STANDARD}
          />
        </button>

        <p css={Title}>{emoji + " " + title}</p>
      </div>
    </Link>
  );
}
