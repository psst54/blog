import { useEffect, useRef, useState } from "react";
import type { V2_MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import katexStyle from "katex/dist/katex.css";

import { css } from "@emotion/react";
import { color } from "@styles/color";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

const globalStyleCss = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    color: ${color.text.standard};

    &::-webkit-scrollbar {
      background-color: transparent;
      width: 10px;
      height: 10px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${color.border.light};
      width: 10px;
      height: 10px;
      border-radius: 10px;
    }
  }
`;

let isInitialRender = true;

export default function App() {
  const isInitialRenderRef = useRef(true);
  const [, rerender] = useState(false);

  useEffect(() => {
    if (isInitialRenderRef.current) {
      isInitialRender = false;
      isInitialRenderRef.current = false;
      rerender(true);
    }
  }, []);

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap/sitemap.xml"
        />
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
          media={isInitialRender ? "print" : "all"}
        />
        <link
          rel="stylesheet"
          as="style"
          href={katexStyle}
          media={isInitialRender ? "print" : "all"}
        />
        <Links />
      </head>
      <body css={globalStyleCss}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
