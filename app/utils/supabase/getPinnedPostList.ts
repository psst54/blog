import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { type Post } from "~/types";
import addTagListToPostList from "./addTagListToPostList";
import { getPostById } from "./getPostById";

export async function getPinnedPostList({
  supabaseClient,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
}): Promise<Post[]> {
  const PINNED_POST_LIST = [
    "connect-types-and-constants",
    "cspg-design-system-text",
    "awesome-resume-builder",
    "tanstack-query",
    "test-ssr-support",
    "commit-message",
  ];

  const data = await Promise.all(
    PINNED_POST_LIST.map(
      async (id) =>
        await getPostById({
          supabaseClient,
          postId: id,
          isDetail: false,
        })
    )
  );

  return await addTagListToPostList({
    supabaseClient,
    postList: data,
  });
}
