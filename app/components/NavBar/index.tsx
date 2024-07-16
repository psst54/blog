import { useRef } from "react";

import CategoryPopUp from "@components/CategoryPopUp";
import { navbar, container } from "./styles";
import type { Category } from "~/types";
import { SIZE } from "@constants/size";
import Logo from "./Logo";

export default function NavBar({
  data,
  onToggleCategory,
}: {
  data?: Category[];
  onToggleCategory?: (id: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollFunction);
  }

  let lastScrollTop = 0;

  function scrollFunction() {
    let scrollTop = document.documentElement.scrollTop;

    const isScrollingUp = scrollTop < lastScrollTop;
    const HEIGHT = 4 * 16; // SIZE.TOP_NAV_HEIGHT = 4rem

    if (ref.current) {
      if (scrollTop <= HEIGHT || isScrollingUp) {
        ref.current.style.top = "0";
      } else {
        ref.current.style.top = `calc(-${SIZE.TOP_NAV_HEIGHT} - 1rem)`;
      }
    }

    lastScrollTop = Math.max(scrollTop, 0);
  }

  return (
    <nav css={navbar} ref={ref}>
      <div css={container}>
        <Logo />
        {data && onToggleCategory && (
          <CategoryPopUp data={data} onToggleCategory={onToggleCategory} />
        )}
      </div>
    </nav>
  );
}
