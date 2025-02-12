import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { globalStyleCss } from "@styles/global";
import GTag from "./_components/Gtag";
import Font from "./_components/Font";

export { meta } from "./_utils/meta";
export { loader } from "./_utils/loader";

export default function App() {
  const { gaTrackingId, SupabaseCredential } = useLoaderData();

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Font />
        <Links />
      </head>

      <body css={globalStyleCss}>
        <Outlet context={{ SupabaseCredential }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <GTag gaTrackingId={gaTrackingId} />
      </body>
    </html>
  );
}
