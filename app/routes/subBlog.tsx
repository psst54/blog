import react from "react";
import MenuBar from "@components/MenuBar";
import CategoryList from "@components/CategoryList";

import { headerContainer } from "@styles/styles";

const background = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  paddingTop: "2rem",
  background:
    "linear-gradient(174deg, #A8DC90 0%, #8BE2B3 33.33%, #70E3E3 66.67%, #53A8E2 100%)",

  overflow: "hidden",
};
const categoryContainer = {
  display: "flex",
  width: "100%",
  height: "100%",
  background: "#FFFFFFB2",
  borderRadius: "2rem 0 0 0",
};
const contentContainer = {
  width: "100%",
  height: "100%",
  background: "#FFFFFF7F",
};

export default function SubBlog() {
  const [isCategoryOpen, setIsCategoryOpen] = react.useState(true);

  return (
    <main css={background}>
      <MenuBar />

      <div css={categoryContainer}>
        <CategoryList isOpen={isCategoryOpen} />

        <div css={contentContainer}>
          <div css={headerContainer} />
        </div>
      </div>
    </main>
  );
}
