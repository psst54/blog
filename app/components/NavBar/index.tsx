import { useRef } from "react";
import { Link } from "@remix-run/react";

import { SIZE } from "~/constants/size";
import CategoryPopUp from "~/components/CategoryPopUp";
import SearchIcon from "~/assets/SearchIcon";

import Logo from "./Logo";
import { navbar } from "./styles";

export default function NavBar() {
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
      <Logo />

      <div css={{ display: "flex", gap: "1rem" }}>
        <Link to="/search">
          <SearchIcon size="1.5rem" />
        </Link>

        <CategoryPopUp />
      </div>
    </nav>
  );
}
