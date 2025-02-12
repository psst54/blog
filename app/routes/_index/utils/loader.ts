import type { LoaderArgs } from "@remix-run/cloudflare";
import type { Env } from "~/types";

export async function loader({ context }: LoaderArgs) {
  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;

  return {
    supabaseKey: { SUPABASE_URL, SUPABASE_KEY },
  };
}
