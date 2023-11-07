import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData, useOutletContext } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

import PostDetailPageScreen from "@screens/$subBlogId.$postId.screen";

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const loadData = async ({
    subBlogId,
    id,
  }: {
    subBlogId: string;
    id: string;
  }) => {
    try {
      const { data: postData, error: postError } = await supabase
        .from("posts")
        .select("id, title, sub_title, content, tags, type, created_at")
        .eq("sub_blog", subBlogId)
        .eq("id", id)
        .single();

      if (postError) throw new Error();

      if (postData.type === "post") return postData;

      const { data: databaseData, error: databaseError } = await supabase
        .from("posts")
        .select("title, sub_title, tags, id, thumbnail, sub_blog, created_at")
        .eq("sub_blog", subBlogId)
        .eq("parent_id", id)
        .order("created_at", { ascending: false });

      if (databaseError) throw new Error();

      return { ...postData, posts: databaseData };
    } catch (err) {
      return null;
    }
  };

  const subBlogId = params.subBlogId || "";

  const data = await loadData({
    subBlogId,
    id: params.postId || "",
  });

  return { content: data };
};

export default function PostPage() {
  const { content } = useLoaderData<typeof loader>();
  const plainCategoryData = useOutletContext();

  return (
    <PostDetailPageScreen
      content={content}
      plainCategoryData={plainCategoryData}
    />
  );
}
