import { useState } from "react";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

import SubBlogScreen from "@screens/$subBlogId.screen";
import { getSubBlogId, buildTree, spread } from "@functions/category";
import { getPostsByBlogId } from "@functions/supabase";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log | sub blog" },
    { name: "description", content: "여기는 서브 블로그" },
  ];
};

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const subBlogId = getSubBlogId({ params });
  try {
    const categoryRawData = await getPostsByBlogId({ supabase, subBlogId });
    return {
      plainCategoryData: spread(categoryRawData),
      categoryData: buildTree(categoryRawData),
    };
  } catch (err) {
    return { plainCategoryData: {}, categoryData: [] };
  }
};

export default function SubBlog() {
  const { plainCategoryData, categoryData } = useLoaderData<typeof loader>();
  const [isPostOpen, setIsPostOpen] = useState({});

  const toggleCategory = (id: number) => {
    const newData = { ...isPostOpen };
    newData[id] = !newData[id];
    setIsPostOpen({ ...newData });
  };

  console.log(categoryData);

  return (
    <SubBlogScreen
      plainCategoryData={plainCategoryData}
      data={categoryData}
      isPostOpen={isPostOpen}
      toggleCategory={toggleCategory}
    />
  );
}
