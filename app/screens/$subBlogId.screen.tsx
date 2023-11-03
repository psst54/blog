import { Outlet } from "@remix-run/react";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import CategoryList from "@components/CategoryList";
import { background, categoryContainer, contentContainer } from "@styles/main";
import { size } from "@styles/size";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default function SubBlogScreen({ data, isPostOpen, toggleCategory }) {
  return (
    <main css={background}>
      <MenuBar />
      <TopBar
        data={data}
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
              data={data}
              isPostOpen={isPostOpen}
              toggleCategory={toggleCategory}
            />
          </div>
        </div>

        <div css={contentContainer}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
