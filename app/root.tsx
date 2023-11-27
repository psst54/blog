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
import { Fonts, GTag } from "~/components/root";

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
        <Fonts isInitialRender={isInitialRender} />
        <Links />
      </head>

      <body css={globalStyleCss}>
        {ENVIRONMENT === "PRODUCTION" && <GTag gaTrackingId={gaTrackingId} />}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
