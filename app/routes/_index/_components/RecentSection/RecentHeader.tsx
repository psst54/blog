import { Link } from "@remix-run/react";

import ROUTE from "~/constants/route";
import RightChevronIcon from "~/assets/RightChevronIcon";
import {
  link,
  header,
  title,
  filledBlock,
  borderedBlock,
  divideLine,
  image,
} from "../styles";

const long = { width: "5rem" };

const HEADER_TEXT = [
  ["Latest", "Updates:"],
  ["View", "All"],
];

export default function RecentHeader() {
  return (
    <Link to={ROUTE.ALL} css={link}>
      <header css={header}>
        <h1 css={title}>
          <span css={borderedBlock}>{HEADER_TEXT[0][0]}</span>
          <span css={filledBlock}>{HEADER_TEXT[0][1]}</span>
          <div css={divideLine} />
          <img src="ocean2.webp" alt="ocean" css={image} />
        </h1>

        <h1 css={title}>
          <img src="ocean1.webp" alt="ocean" css={[image, long]} />
          <span css={borderedBlock}>{HEADER_TEXT[1][0]}</span>
          <span css={filledBlock}>{HEADER_TEXT[1][1]}</span>
          <div css={divideLine} />
          <RightChevronIcon size="1.5rem" />
        </h1>
      </header>
    </Link>
  );
}
