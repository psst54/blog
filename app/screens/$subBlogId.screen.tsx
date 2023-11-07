import { Outlet } from "@remix-run/react";

import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";
import CategoryList from "@components/CategoryList";
import { background, categoryContainer, contentContainer } from "@styles/main";
import { size, mq } from "@styles/size";

export default function SubBlogScreen({
  plainCategoryData,
  data,
  isPostOpen,
  toggleCategory,
}) {
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
          <Outlet context={plainCategoryData} />
        </div>
      </div>
    </main>
  );
}
