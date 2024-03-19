import { Outlet } from "@remix-run/react";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import CategoryBar from "@components/CategoryBar";
import { background, categoryContainer, contentContainer } from "@styles/main";
import type { Category, PlainCategory } from "~/types";

export default function SubBlogScreen({
  plainCategoryData,
  data,
  onToggleCategory,
}: {
  plainCategoryData: PlainCategory[];
  data: Category[];
  onToggleCategory: (id: string) => void;
}) {
  return (
    <main css={background}>
      <MenuBar />
      <TopBar data={data} onToggleCategory={onToggleCategory} />

      <div css={categoryContainer}>
        <CategoryBar data={data} onToggleCategory={onToggleCategory} />

        <div css={contentContainer}>
          <Outlet context={plainCategoryData} />
        </div>
      </div>
    </main>
  );
}
