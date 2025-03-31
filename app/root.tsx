import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
  useParams,
  useRouteLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { createClient } from "@supabase/supabase-js";

import "./tailwind.css";
import { globalStyleCss } from "~/styles/global";
import GtagHead from "./_components/GtagHead";
import GtagBody from "./_components/GtagBody";
import Font from "./_components/Font";
import { useEffect } from "react";
import useCategoryStore from "./stores/category";
import fetchCategoryData from "./_utils/fetchCategoryData";

export { meta } from "./_utils/meta";
export { loader } from "./_utils/loader";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { gaTrackingId, supabaseCredential } = useRouteLoaderData("root");
  const params = useParams();
  const { setCategory } = useCategoryStore();

  useEffect(() => {
    if (!supabaseCredential || !setCategory) {
      return;
    }

    const subBlogId = params.subBlogId || "cse";

    async function fetchData() {
      const supabaseClient = createClient(
        supabaseCredential.url,
        supabaseCredential.key
      );
      setCategory(await fetchCategoryData({ supabaseClient, subBlogId }));
    }

    fetchData();
  }, [params.subBlogId, supabaseCredential, setCategory]);

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Font />
        <Links />
        <GtagHead gaTrackingId={gaTrackingId} />
      </head>
      <body css={globalStyleCss}>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <GtagBody gaTrackingId={gaTrackingId} />
      </body>
    </html>
  );
}

export default function App() {
  const { supabaseCredential } = useRouteLoaderData<typeof loader>("root");

  return <Outlet context={{ supabaseCredential }} />;
}
