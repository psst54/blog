import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import Content from "@components/PostContent";
import PostList from "@components/PostList";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

import styles from "@styles/katex.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

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
        .from(subBlogId)
        .select("title, sub_title, content, tags, type")
        .eq("id", id)
        .single();

      if (postError) throw new Error();

      if (postData.type === "post") return postData;

      const { data: databaseData, error: databaseError } = await supabase
        .from(subBlogId)
        .select("title, sub_title, tags, id, thumbnail")
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

  return { content: data, subBlogId };
};

export default function PostPage() {
  const { content, subBlogId } = useLoaderData<typeof loader>();

  return (
    <div css={{ width: "100%" }}>
      <div
        css={{
          width: "100%",
          padding: "2rem 1.5rem",

          wordBreak: "break-word",

          [mq[1]]: {
            padding: "1rem",
          },
        }}
      >
        {content?.tags.length > 0 && (
          <div
            css={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.25rem",
              marginBottom: "0.5rem",
            }}
          >
            {content?.tags.map((tag: string, tagIdx: number) => (
              <div
                key={tagIdx}
                css={{
                  padding: "0.25rem 0.75rem",
                  background: "#4D4D4D",
                  borderRadius: "0.5rem",
                  color: "#ffffff",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <h1 css={{ fontSize: "2rem", fontWeight: 500, wordBreak: "keep-all" }}>
          {content?.title}
        </h1>
        {content?.sub_title && (
          <h2
            css={{
              marginTop: "0.5rem",
              color: "#555555",
              fontSize: "1rem",
              fontWeight: 500,
              wordBreak: "keep-all",
            }}
          >
            {content?.sub_title}
          </h2>
        )}

        <hr
          css={{ width: "100%", border: "1px solid #70E3E3", margin: "1rem 0" }}
        />

        {content?.type === "post" && <Content content={content?.content} />}

        {content?.type === "database" && (
          <PostList content={content?.posts} subBlogId={subBlogId} />
        )}
      </div>
    </div>
  );
}
