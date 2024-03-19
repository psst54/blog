import { Outlet } from "@remix-run/react";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import CategoryBar from "@components/CategoryBar";
import { background, categoryContainer, contentContainer } from "@styles/main";
import type { Category } from "~/types";

export default function SubBlogScreen({
  categoryData,
  data,
  onToggleCategory,
}: {
  categoryData: Category[];
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
          <Outlet context={categoryData} />
        </div>
      </div>
    </main>
  );
}
