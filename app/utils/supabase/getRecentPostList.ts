import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";

import { POST_SUMMARY_ATTR, POST_TABLE } from ".";
import addTagListToPostList from "./addTagListToPostList";
import { type Post, DocumentType } from "~/types/post";

export async function getRecentPostList({
  supabaseClient,
  count = 10,
  showAll = true,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  subBlogId?: string;
  count?: number;
  showAll?: boolean;
}): Promise<Post[]> {
  const { data, error } = await supabaseClient
    .from(POST_TABLE)
    .select(POST_SUMMARY_ATTR)
    .in("show_main", showAll ? [true, false] : [true])
    .eq("type", DocumentType.Post)
    .order("created_at", { ascending: false })
    .limit(count)
    .returns<Post[]>();

  if (error) return [];

  return await addTagListToPostList({
    supabaseClient,
    postList: data,
  });
}
