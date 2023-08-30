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
        .from(subBlogId)
        .select("title, sub_title, tags, id, thumbnail")
        .is("parent_id", null)
        .order("created_at");

      if (databaseError) throw new Error();

      return {
        title: "subBlog",
        sub_title: "임시",
        tags: [],
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
