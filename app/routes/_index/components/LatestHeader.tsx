import { Link } from "@remix-run/react";
import { link, header, title, border, line, img } from "./styles";

export default function latestHeader() {
  return (
    <Link to="all" css={link}>
      <header css={header}>
        <h1 css={title}>
          <span css={border}>Latest</span>
          <img src="ocean2.webp" alt="ocean" css={img} />
          <div css={line} />
          <span css={border}>Updates:</span>
        </h1>

        <h1 css={title}>
          <img src="ocean3.webp" alt="ocean" css={[img, { width: "5rem" }]} />
          <div css={line} />
          <span css={border}>View</span>
          <span css={border}>All</span>
          <img src="ocean1.webp" alt="ocean" css={[img, { width: "6rem" }]} />
        </h1>
      </header>
    </Link>
  );
}
