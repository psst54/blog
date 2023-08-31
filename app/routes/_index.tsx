import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import IndexScreen from "~/screens/_index.screen";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export const loader = async ({ context }: LoaderArgs) => {
  return {
    supabaseUrl: context.env.SUPABASE_URL,
    supabaseKey: context.env.SUPABASE_KEY,
  };
};

export default function Index() {
  const { supabaseUrl, supabaseKey } = useLoaderData<typeof loader>();

  return <IndexScreen supabaseUrl={supabaseUrl} supabaseKey={supabaseKey} />;
}
