import type { SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "~/types/supabase";

export async function getSubBlogInfo({
  supabaseClient,
  subBlogId,
}: {
  supabaseClient: SupabaseClient<Database, "public", any>;
  subBlogId: string;
}) {
  const { data: databaseData, error: databaseError } = await supabaseClient
    .from("subBlogs")
    .select("title, description")
    .eq("id", subBlogId)
    .single();

  if (databaseError) throw new Error();

  return databaseData;
}
