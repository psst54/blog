import type { LoaderArgs } from "@remix-run/cloudflare";
import type { Env } from "~/types";

export async function loader({ context, params }: LoaderArgs) {
  const subBlogId = params.subBlogId!;
  const { SUPABASE_URL: supabaseUrl, SUPABASE_KEY: supabaseKey } =
    process.env as Env;

  return { subBlogId, supabaseUrl, supabaseKey };
}
