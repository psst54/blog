import type { V2_MetaFunction } from "@remix-run/cloudflare";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import PostGrid from "@components/PostGrid";
import CategoryList from "@components/CategoryList";

import { size, mq } from "@styles/size";

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
        <div
          css={{
            width: size.CATEGORY_WIDTH,
            flexShrink: 0,

            paddingTop: "1rem",

            [mq[0]]: {
              display: "none",
            },
          }}
        >
          <div
            css={{
              position: "fixed",
              width: size.CATEGORY_WIDTH,
              height: "calc(100dvh - 1rem - 2rem)",
            }}
          >
            <CategoryList
              data={categoryData}
              isPostOpen={[]}
              toggleCategory={(id: string) => {}}
            />
          </div>
        </div>

        <div css={contentContainer}>
          <div css={recentPostsConatiner}>
            <h1 css={title}>최근 포스트</h1>
            <PostGrid posts={recentPosts} />
          </div>
        </div>
      </div>
    </main>
  );
}
