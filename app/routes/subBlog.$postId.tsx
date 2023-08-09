import react from "react";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const loadData = async (id: string) => {
    try {
      const { data: postData, error: postError } = await supabase
        .from("postContent")
        .select()
        .eq("id", id)
        .single();

      if (postError) throw new Error();

      return postData?.content;
    } catch (err) {
      return null;
    }
  };

  const postId = params.postId;
  if (!postId) {
    return null;
  }

  const data = await loadData(postId);

  return data;
};

export default function PostPage() {
  const content = useLoaderData<typeof loader>();

  return <div>{content}</div>;
}
