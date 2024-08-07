import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { type Post } from "~/types";
import { POST_SUMMARY_ATTR, POST_TABLE } from ".";
import addTagListToPostList from "./addTagListToPostList";

export async function getPostList({
  supabaseClient,
  showAll = true,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  showAll?: boolean;
}): Promise<Post[]> {
  const { data, error } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR)
    .in("show_main", showAll ? [true, false] : [true])
    .order("created_at", { ascending: false })
    .returns<Post[]>();

  if (error) return [];

  return await addTagListToPostList({
    supabaseClient,
    postList: data,
  });
}
