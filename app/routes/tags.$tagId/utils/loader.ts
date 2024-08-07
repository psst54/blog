import type { LoaderArgs } from "@remix-run/cloudflare";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "~/supabase/types";
import type { Env } from "~/types";
import { getPostListByTagId } from "@utils/supabase/getPostListByTagId";
import { getTagData } from "~/utils/supabase/getTagData";

export async function loader({ context, params }: LoaderArgs) {
  const tagId = params.tagId!;

  const { SUPABASE_URL, SUPABASE_KEY } = context.env as Env;
  const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

  const tagData = await getTagData({ supabaseClient, tagId });
  const postList = await getPostListByTagId({ supabaseClient, tagId });

  return { tagData, postList };
}
