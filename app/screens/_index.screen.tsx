import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import PostGrid from "@components/PostGrid";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

import {
  background,
  gradient,
  categoryContainer,
  contentContainer,
  recentPostsConatiner,
  title,
} from "@styles/main";

import type { V2_MetaFunction } from "@remix-run/cloudflare";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export default function Index({
  recentPosts,
  supabaseUrl,
  supabaseKey,
}: {
  supabaseUrl: string;
  supabaseKey: string;
}) {
  return (
    <main css={background}>
      <div css={gradient}></div>

      <MenuBar />
      <TopBar supabaseUrl={supabaseUrl} supabaseKey={supabaseKey} />

      <div css={categoryContainer}>
        <div
          css={{
            width: "18rem",
            [mq[0]]: {
              display: "none",
            },
          }}
        ></div>

        <div css={contentContainer}>
          <div css={recentPostsConatiner}>
            <h1 css={title}>최근 포스트</h1>
            <PostGrid content={recentPosts} />
          </div>
        </div>
      </div>
    </main>
  );
}
