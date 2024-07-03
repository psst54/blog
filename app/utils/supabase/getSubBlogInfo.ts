import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

export async function getSubBlogInfo({
  supabase,
  subBlogId,
}: {
  supabase: SupabaseClient<Database, "public", any>;
  subBlogId: string;
}) {
  const { data: databaseData, error: databaseError } = await supabase
    .from("subBlogs")
    .select("title, description")
    .eq("id", subBlogId)
    .single();

  if (databaseError) throw new Error();

  return databaseData;
}
