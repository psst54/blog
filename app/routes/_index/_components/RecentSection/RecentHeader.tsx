import { Link } from "@remix-run/react";

import RightChevronIcon from "~/assets/RightChevronIcon";
import { link, header, title, border, line, img } from "../styles";

export default function RecentHeader() {
  return (
    <Link to="/all" css={link}>
      <header css={header}>
        <h1 css={title}>
          <span css={border}>Latest</span>
          <img src="ocean2.webp" alt="ocean" css={img} />
          <span css={border}>Updates:</span>
          <div css={line} />
        </h1>

        <h1 css={title}>
          <img src="ocean1.webp" alt="ocean" css={[img, { width: "5rem" }]} />
          <span css={border}>View</span>
          <span css={border}>All</span>
          <div css={line} />
          <RightChevronIcon size="1.5rem" />
        </h1>
      </header>
    </Link>
  );
}
