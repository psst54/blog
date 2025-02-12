import type { LoaderArgs } from "@remix-run/cloudflare";
import type { Env } from "~/types";

export const loader = async ({ context }: LoaderArgs) => {
  const supabaseCredential = {
    url: (context.env as unknown as Env).SUPABASE_URL,
    key: (context.env as unknown as Env).SUPABASE_KEY,
  };

  if (context.env !== "PRODUCTION") {
    return {
      gaTrackingId: null,
      supabaseCredential,
    };
  }

  return {
    gaTrackingId: (context.env as unknown as Env).GA_TRACKING_ID,
    supabaseCredential,
  };
};
