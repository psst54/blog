import { Outlet } from "@remix-run/react";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import CategoryList from "@components/CategoryList";
import { background, categoryContainer, contentContainer } from "@styles/main";
import { size, mq } from "@styles/size";
import { Category, IsPostOpen, PlainCategory } from "~/types";

export default function SubBlogScreen({
  plainCategoryData,
  data,
  isPostOpen,
  toggleCategory,
}: {
  plainCategoryData: PlainCategory[];
  data: Category[];
  isPostOpen: IsPostOpen;
  toggleCategory: (id: string) => void;
}) {
  return (
    <main css={background}>
      <MenuBar />
      <TopBar
        data={data}
        isPostOpen={isPostOpen}
        toggleCategory={toggleCategory}
      />

      <div css={categoryContainer}>
        <Category
          data={data}
          isPostOpen={isPostOpen}
          toggleCategory={toggleCategory}
        />

        <Content plainCategoryData={plainCategoryData} />
      </div>
    </main>
  );
}

function Category({
  data,
  isPostOpen,
  toggleCategory,
}: {
  data: Category[];
  isPostOpen: IsPostOpen;
  toggleCategory: (id: string) => void;
}) {
  return (
    <div css={categoryArea}>
      <div css={categoryWrapper}>
        <CategoryList
          data={data}
          isPostOpen={isPostOpen}
          toggleCategory={toggleCategory}
        />
      </div>
    </div>
  );
}

function Content({
  plainCategoryData,
}: {
  plainCategoryData: PlainCategory[];
}) {
  return (
    <div css={contentContainer}>
      <Outlet context={plainCategoryData} />
    </div>
  );
}

const categoryArea = {
  width: size.CATEGORY_WIDTH,
  flexShrink: 0,

  paddingTop: "1rem",

  [mq[0]]: {
    display: "none",
  },
};

const categoryWrapper = {
  position: "fixed" as "fixed",
  width: size.CATEGORY_WIDTH,
  height: "calc(100dvh - 1rem - 2rem)",
};
