import { useState, useEffect } from "react";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

import IndexScreen from "@screens/_index.screen";
import { getSubBlogId, buildTree } from "@functions/category";
import { getPosts, getRecentPosts } from "@functions/supabase";

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
    const categoryRawData = await getPosts({ supabase, subBlogId });
    return {
      recentPosts: recentPosts,
      categoryData: buildTree(categoryRawData),
    };
  } catch (err) {
    return { categoryData: [], categoryData: [] };
  }
};

export default function Index() {
  const { recentPosts, categoryData } = useLoaderData<typeof loader>();
  const [isPostOpen, setIsPostOpen] = useState({});

  useEffect(() => {
    const newObj = {};
    categoryData.forEach((datum) => (newObj[datum] = false));
    setIsPostOpen(newObj);
  }, [categoryData]);

  const toggleCategory = (id: number) => {
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
