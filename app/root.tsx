import type { V2_MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { css } from "@emotion/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

const globalStyle = {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontFamily:
    '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',

  "*": { boxSizing: "border-box", margin: 0, padding: 0 },
};

const globalStyleCss = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default function App() {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
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
