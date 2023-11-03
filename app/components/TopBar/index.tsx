import { useState, useEffect } from "react";
import { Link, useParams } from "@remix-run/react";

import CategoroyPopUp from "@components/CategoryPopUp";
import HomeIcon from "@assets/HomeIcon";
import { color } from "@styles/color";
import { size } from "@styles/size";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default function TopBar({ data, isPostOpen, toggleCategory }) {
  return (
    <div
      css={{
        display: "none",

        [mq[0]]: {
          position: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",

          width: "100%",
          height: size.TOPBAR_HEIGHT,
          padding: "0 1rem",
          background: color.background.standard,

          borderBottom: `2px solid ${color.border.standard}`,

          zIndex: 1,
        },
      }}
    >
      {/* <Link to={`/`}>
        <HomeIcon size="1.5rem" color={color.border.standard} />
      </Link> */}

      <CategoroyPopUp
        data={data}
        isPostOpen={isPostOpen}
        toggleCategory={toggleCategory}
      />
    </div>
  );
}
