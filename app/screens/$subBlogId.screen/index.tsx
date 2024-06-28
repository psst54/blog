import { Outlet } from "@remix-run/react";

import NavBar from "@components/NavBar";
import { background, contentContainer } from "@styles/main";
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
      <NavBar data={data} onToggleCategory={onToggleCategory} />

      <div css={contentContainer}>
        <Outlet context={categoryData} />
      </div>
    </main>
  );
}
