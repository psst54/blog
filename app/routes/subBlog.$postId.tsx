import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import loadable from "@loadable/component";
const Content = loadable(() => import("@components/PostContent"));
import styles from "katex/dist/katex.min.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

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
        .from("posts")
        .select("content")
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

  return (
    <div css={{ height: "calc(100% - 4rem)" }}>
      <div
        css={{
          height: "100%",
          padding: "1rem 1.5rem",

          wordBreak: "keep-all",

          overflowY: "auto",
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "4px",
            background: "#53A8E2",
          },
        }}
      >
        <Content content={content} />
      </div>
    </div>
  );
}
