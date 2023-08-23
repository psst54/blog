import { Outlet } from "@remix-run/react";
import MenuBar from "@components/MenuBar";
import TopBar from "@components/TopBar";

import {
  background,
  gradient,
  categoryContainer,
  contentContainer,
} from "@styles/main";

import type { V2_MetaFunction } from "@remix-run/cloudflare";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export default function Index() {
  return (
    <main css={background}>
      <div css={gradient}></div>

      <MenuBar />
      <TopBar />

      <div css={categoryContainer}>
        <div css={{ width: "18rem" }}></div>

        <div css={contentContainer}></div>
      </div>
    </main>
  );
}
