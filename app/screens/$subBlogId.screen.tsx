import { Outlet } from "@remix-run/react";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import CategoryList from "@components/CategoryList";
import {
  background,
  gradient,
  categoryContainer,
  contentContainer,
} from "@styles/main";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default function SubBlogScreen({
  data,
  isPostOpen,
  toggleCategory,
  subBlogId,
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
            flexShrink: 0,

            padding: "1rem",
            paddingTop: "2rem",

            [mq[0]]: {
              display: "none",
            },
          }}
        >
          <CategoryList
            data={data}
            isPostOpen={isPostOpen}
            toggleCategory={toggleCategory}
            subBlogId={subBlogId}
          />
        </div>

        <div css={contentContainer}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
