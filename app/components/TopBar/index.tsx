import { Link } from "@remix-run/react";

import CategoroyPopUp from "@components/CategoryPopUp";
import HomeIcon from "@assets/HomeIcon";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default function TopBar() {
  return (
    <div
      css={{
        display: "none",

        [mq[0]]: {
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          width: "100%",
          height: "3rem",
          padding: "0 1rem",
          background: "#A8DC90",

          zIndex: 1,
        },
      }}
    >
      <Link to={`/`}>
        <HomeIcon size="1.5rem" color="#000" />
      </Link>

      <CategoroyPopUp />
    </div>
  );
}
