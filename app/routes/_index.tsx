import { useState } from "react";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

import IndexScreen from "@screens/_index.screen";
import { getSubBlogId, buildTree } from "@functions/category";
import { getPostsByBlogId, getRecentPosts } from "@functions/supabase";
import { Post, Category, IsPostOpen } from "~/types";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const subBlogId = getSubBlogId({ params });
  try {
    const recentPosts = await getRecentPosts({ supabase });
    const categoryRawData = await getPostsByBlogId({ supabase, subBlogId });
    return {
      recentPosts: recentPosts,
      categoryData: buildTree(categoryRawData),
    };
  } catch (err) {
    return { recentPosts: [], categoryData: [] };
  }
};

export default function Index() {
  const {
    recentPosts,
    categoryData,
  }: { recentPosts: Post[]; categoryData: Category[] } =
    useLoaderData<typeof loader>();
  const [isPostOpen, setIsPostOpen] = useState<IsPostOpen>({});

  const toggleCategory = (id: string) => {
    const newData = { ...isPostOpen };
    newData[id] = !newData[id];
    setIsPostOpen({ ...newData });
  };

  return (
    <IndexScreen
      recentPosts={recentPosts}
      categoryData={categoryData}
      isPostOpen={isPostOpen}
      toggleCategory={toggleCategory}
    />
  );
}
