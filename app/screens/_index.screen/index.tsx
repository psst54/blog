import type { V2_MetaFunction } from "@remix-run/cloudflare";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import CategoryBar from "@components/CategoryBar";
import Content from "./Content";

import { background, categoryContainer } from "@styles/main";
import { Post, IsPostOpen, Category } from "~/types";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export default function Index({
  recentPosts,
  categoryData,
  isPostOpen,
  toggleCategory,
}: {
  recentPosts: Post[];
  categoryData: Category[];
  isPostOpen: IsPostOpen;
  toggleCategory: (id: string) => void;
}) {
  return (
    <main css={background}>
      <MenuBar />
      <TopBar
        data={categoryData}
        isPostOpen={isPostOpen}
        toggleCategory={toggleCategory}
      />

      <div css={categoryContainer}>
        <CategoryBar
          data={categoryData}
          isPostOpen={isPostOpen}
          toggleCategory={toggleCategory}
        />
        <Content posts={recentPosts} />
      </div>
    </main>
  );
}
