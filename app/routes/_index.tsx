import { Outlet } from "@remix-run/react";
import MenuBar from "@components/MenuBar";

import type { V2_MetaFunction } from "@remix-run/cloudflare";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export default function Index() {
  return (
    <main
      css={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        paddingTop: "2rem",
        background:
          "linear-gradient(174deg, #A8DC90 0%, #8BE2B3 33.33%, #70E3E3 66.67%, #53A8E2 100%)",

        overflow: "hidden",
      }}
    >
      <MenuBar />

      <div
        css={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#FFFFFFB2",
          borderRadius: "1.5rem 0 0 0",
        }}
      >
        <Outlet />
      </div>
    </main>
  );
}
