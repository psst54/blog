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
  const ID_LIST = [
    "awesome-resume-builder",
    "making-blog-with-remix",
    "cspg-design-system-text",
    "tanstack-query",
    "test-ssr-support",
  ];

  const data = await Promise.all(
    ID_LIST.map(
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
