import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

import PostPageScreen from "@screens/$subBlogId._index.screen";

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const loadData = async ({ subBlogId }: { subBlogId: string }) => {
    try {
      const { data: databaseData, error: databaseError } = await supabase
        .from("posts")
        .select("title, sub_title, tags, id, thumbnail, sub_blog, created_at")
        .eq("sub_blog", subBlogId)
        .is("parent_id", null)
        .order("created_at");

      const { data: blogData, error: blogError } = await supabase
        .from("subBlogs")
        .select("title, description")
        .eq("id", subBlogId)
        .single();

      if (databaseError || blogError) throw new Error();

      return {
        title: blogData.title,
        sub_title: blogData.description,
        posts: databaseData,
      };
    } catch (err) {
      return null;
    }
  };

  const subBlogId = params.subBlogId || "";

  const data = await loadData({ subBlogId });

  return { content: data, subBlogId };
};

export default function PostPage() {
  const { content, subBlogId } = useLoaderData<typeof loader>();

  return <PostPageScreen content={content} subBlogId={subBlogId} />;
}
