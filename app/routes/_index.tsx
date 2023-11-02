import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";
import IndexScreen from "~/screens/_index.screen";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export const loader = async ({ context }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const loadData = async () => {
    try {
      const { data: databaseData, error: databaseError } = await supabase
        .from("posts")
        .select("title, sub_title, tags, id, thumbnail, sub_blog")
        .order("created_at", { ascending: false })
        .limit(10);

      if (databaseError) throw new Error();

      return databaseData;
    } catch (err) {
      return null;
    }
  };

  const data = await loadData();

  return {
    recentPosts: data,
    supabaseUrl: context.env.SUPABASE_URL,
    supabaseKey: context.env.SUPABASE_KEY,
  };
};

export default function Index() {
  const { recentPosts, supabaseUrl, supabaseKey } =
    useLoaderData<typeof loader>();

  return (
    <IndexScreen
      recentPosts={recentPosts}
      supabaseUrl={supabaseUrl}
      supabaseKey={supabaseKey}
    />
  );
}
