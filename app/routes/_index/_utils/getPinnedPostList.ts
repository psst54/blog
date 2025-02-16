import type { SupabaseClient } from "@supabase/supabase-js";
import type { Document } from "~/types/post";
import type { Database } from "~/types/supabase";

import addTagListToPostList from "../../../utils/supabase/addTagListToPostList";
import { getPostById } from "../../../utils/supabase/getPostById";

export default async function getPinnedPostList({
  supabaseClient,
}: {
  supabaseClient: SupabaseClient<Database, "public">;
}): Promise<Document[]> {
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
    postList: data.filter((post) => post !== null),
  });
}
