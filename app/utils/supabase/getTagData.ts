import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

export async function getTagData({
  supabaseClient,
  tagId,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  tagId: string;
}) {
  const { data } = await supabaseClient
    .from("tags")
    .select()
    .eq("id", tagId)
    .single();

  return data;
}
