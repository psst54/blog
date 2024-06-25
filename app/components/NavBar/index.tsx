import { useRef } from "react";

import CategoryPopUp from "@components/CategoryPopUp";
import { navbar, container, mobileContainer, pcContainer } from "./styles";
import type { Category } from "~/types";
import { SIZE } from "~/constants/size";
import { Link } from "@remix-run/react";

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
      {/* pc */}
      <div css={[container, pcContainer]}>
        <Link to="/">
          <img
            src="/profile.webp"
            alt="logo"
            css={{ width: "2rem", height: "2rem", borderRadius: "100%" }}
          />
        </Link>
        {data && onToggleCategory && (
          <CategoryPopUp data={data} onToggleCategory={onToggleCategory} />
        )}
      </div>

      {/* mobile */}
      <div css={[container, mobileContainer]}>
        <Link to="/">
          <img
            src="/profile.webp"
            alt="logo"
            css={{ width: "2rem", height: "2rem", borderRadius: "100%" }}
          />
        </Link>
        {data && onToggleCategory && (
          <CategoryPopUp data={data} onToggleCategory={onToggleCategory} />
        )}
      </div>
    </nav>
  );
}
