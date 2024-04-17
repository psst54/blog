import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData, useOutletContext } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@supabase/types";
import { getSubBlogMainPosts, getSubBlogInfo } from "~/functions/supabase";

import PostPageScreen from "@screens/$subBlogId._index.screen";
import type { Category, Env } from "~/types";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const content = data!.content;
  return [
    { title: `${content!.title} | PSST54's log` },
    { name: "description", content: content!.subTitle },
    { name: "author", content: "psst54" },
    { name: "og:site_name", content: "PSST54's log" },
    { name: "og:title", content: content!.title },
    { name: "og:description", content: content!.subTitle },
    { name: "og:type", content: "website" },
  ];
};

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    (context.env as Env).SUPABASE_URL,
    (context.env as Env).SUPABASE_KEY
  );

  const loadData = async ({ subBlogId }: { subBlogId: string }) => {
    try {
      const databaseData = await getSubBlogMainPosts({
        supabase,
        subBlogId,
      });

      const blogData = await getSubBlogInfo({ supabase, subBlogId });

      return {
        title: blogData.title,
        subTitle: blogData.description,
        posts: databaseData,
      };
    } catch (err) {
      return null;
    }
  };

  const subBlogId = params.subBlogId || "";

  const data = await loadData({ subBlogId });

  return { content: data };
};

export default function PostPage() {
  const { content } = useLoaderData<typeof loader>();

  console.log(content);
  const categoryData: Category[] = useOutletContext();

  return <PostPageScreen content={content} categoryData={categoryData} />;
}
