import { Link } from "@remix-run/react";

import ROUTE from "~/constants/route";
import RightChevronIcon from "~/assets/RightChevronIcon";
import {
  borderedBlock,
  divideLine,
  filledBlock,
  header,
  image,
  title,
  titleArea,
} from "../styles";

export default function RecentHeader() {
  return (
    <Link to={ROUTE.ALL} className="hover:text-text-link">
      <header className={header}>
        <div className={titleArea}>
          <p className={title}>
            <span className={borderedBlock}>Latest</span>
            <span className={filledBlock}>Updates:</span>
          </p>
          <div className={divideLine} />
          <img src="ocean2.webp" alt="ocean" className={image} />
        </div>

        <div className={titleArea}>
          <img src="ocean1.webp" alt="ocean" className={`${image} w-20`} />
          <p className={title}>
            <span className={borderedBlock}>View</span>
            <span className={filledBlock}>All</span>
          </p>
          <div className={divideLine} />
          <RightChevronIcon size="1.5rem" />
        </div>
      </header>
    </Link>
  );
}
