import type { V2_MetaFunction } from "@remix-run/cloudflare";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import CategoryBar from "@components/CategoryBar";
import Content from "./Content";

import { background, categoryContainer } from "@styles/main";
import type { Post, Category } from "~/types";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export default function Index({
  recentPosts,
  categoryData,
  onToggleCategory,
}: {
  recentPosts: Post[];
  categoryData: Category[];
  onToggleCategory: (id: string) => void;
}) {
  return (
    <main css={background}>
      <MenuBar />
      <TopBar data={categoryData} onToggleCategory={onToggleCategory} />

      <div css={categoryContainer}>
        <CategoryBar data={categoryData} onToggleCategory={onToggleCategory} />
        <Content posts={recentPosts} />
      </div>
    </main>
  );
}
