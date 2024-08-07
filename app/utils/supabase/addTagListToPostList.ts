import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import type { Post } from "~/types";
import getTagListFromPost from "./getTagListFromPost";

export default async function addTagListToPostList({
  supabaseClient,
  postList,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
  postList: Post[];
}) {
  return await Promise.all(
    postList?.map(async (post) => {
      const tagData = await getTagListFromPost({
        supabaseClient,
        postId: post.id,
      });
      return { ...post, tags: tagData };
    })
  );
}
