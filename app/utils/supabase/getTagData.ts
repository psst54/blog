import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import type { Post } from "~/types";
import { POST_DETAIL_ATTR, POST_TABLE } from ".";
import getTagListFromPost from "./getTagListFromPost";

export async function getTagData({
  supabaseClient,
  tagId,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  tagId: string;
}) {
  const { data, error } = await supabaseClient
    .from("tags")
    .select()
    .eq("id", tagId)
    .single();

  return data;
}
