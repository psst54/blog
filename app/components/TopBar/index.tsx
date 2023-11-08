import CategoroyPopUp from "@components/CategoryPopUp";
import { color } from "@styles/color";
import { size } from "@styles/size";

import { mq } from "@styles/size";
import { IsPostOpen, Category } from "~/types";

export default function TopBar({
  data,
  isPostOpen,
  toggleCategory,
}: {
  data: Category[];
  isPostOpen: IsPostOpen;
  toggleCategory: (id: string) => void;
}) {
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
      <CategoroyPopUp
        data={data}
        isPostOpen={isPostOpen}
        toggleCategory={toggleCategory}
      />
    </div>
  );
}
