import type { V2_MetaFunction } from "@remix-run/cloudflare";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import PostGrid from "@components/PostGrid";
import CategoryList from "@components/CategoryList";
import { categoryArea, categoryWrapper } from "./styles";

import {
  background,
  categoryContainer,
  contentContainer,
  recentPostsConatiner,
  title,
} from "@styles/main";

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
        <Category
          categoryData={categoryData}
          isPostOpen={isPostOpen}
          toggleCategory={toggleCategory}
        />
        <Content posts={recentPosts} />
      </div>
    </main>
  );
}

function Category({
  categoryData,
  isPostOpen,
  toggleCategory,
}: {
  categoryData: Category[];
  isPostOpen: IsPostOpen;
  toggleCategory: (id: string) => void;
}) {
  return (
    <div css={categoryArea}>
      <div css={categoryWrapper}>
        <CategoryList
          data={categoryData}
          isPostOpen={isPostOpen}
          toggleCategory={toggleCategory}
        />
      </div>
    </div>
  );
}

function Content({ posts }: { posts: Post[] }) {
  return (
    <div css={contentContainer}>
      <div css={recentPostsConatiner}>
        <h1 css={title}>최근 포스트</h1>
        <PostGrid posts={posts} />
      </div>
    </div>
  );
}
