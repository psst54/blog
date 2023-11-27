import { Outlet } from "@remix-run/react";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import CategoryBar from "@components/CategoryBar";
import { background, categoryContainer, contentContainer } from "@styles/main";
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
        <CategoryBar
          data={data}
          isPostOpen={isPostOpen}
          toggleCategory={toggleCategory}
        />

        <div css={contentContainer}>
          <Outlet context={plainCategoryData} />
        </div>
      </div>
    </main>
  );
}
