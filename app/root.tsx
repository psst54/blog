import { useEffect, useRef, useState } from "react";
import type { V2_MetaFunction, LoaderArgs } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useLoaderData,
} from "@remix-run/react";
import * as gtag from "~/utils/gtags.client";

import katexStyle from "katex/dist/katex.css";
import { globalStyleCss } from "@styles/global";
import { Env } from "~/types";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

let isInitialRender = true;

export const loader = async ({ context }: LoaderArgs) => {
  return {
    gaTrackingId: (context.env as Env).GA_TRACKING_ID,
    ENVIRONMENT: (context.env as Env).ENVIRONMENT,
  };
};

export default function App() {
  const location = useLocation();
  const { gaTrackingId, ENVIRONMENT } = useLoaderData<typeof loader>();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

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
        {ENVIRONMENT === "production" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
