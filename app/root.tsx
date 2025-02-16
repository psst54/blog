import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useParams,
} from "@remix-run/react";

import { globalStyleCss } from "~/styles/global";
import GTag from "./_components/Gtag";
import Font from "./_components/Font";
import { useEffect } from "react";
import useCategoryStore from "./stores/category";
import { createClient } from "@supabase/supabase-js";
import fetchCategoryData from "./_utils/fetchCategoryData";

export { meta } from "./_utils/meta";
export { loader } from "./_utils/loader";

export default function App() {
  const { gaTrackingId, supabaseCredential } = useLoaderData();
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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Font />
        <Links />
      </head>

      <body css={globalStyleCss}>
        <Outlet context={{ supabaseCredential }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <GTag gaTrackingId={gaTrackingId} />
      </body>
    </html>
  );
}
