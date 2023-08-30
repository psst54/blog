import { useState, useEffect } from "react";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData, useParams } from "@remix-run/react";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

import SubBlogScreen from "@screens/$subBlogId.screen";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log | sub blog" },
    { name: "description", content: "여기는 서브 블로그" },
  ];
};

function buildTree(items: any) {
  const itemMap = {};

  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] };
  }

  const rootNodes = [];

  for (const item of items) {
    const parentID = item.parent_id;

    if (parentID === null || !itemMap[parentID]) {
      rootNodes.push(itemMap[item.id]);
    } else {
      itemMap[parentID].children.push(itemMap[item.id]);
    }
  }

  return rootNodes;
}

export const loader = async ({ context, params }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const loadData = async ({ subBlogId }: { subBlogId: string }) => {
    try {
      const { data: postData, error: postError } = await supabase
        .from(subBlogId)
        .select("id, title, parent_id, type")
        .order("created_at");

      if (postError) throw new Error();

      return postData;
    } catch (err) {
      return [];
    }
  };

  const subBlogId = params.subBlogId || "";

  const rawData = await loadData({ subBlogId });

  return { data: buildTree(rawData), subBlogId };
};

export default function SubBlog() {
  const { data, subBlogId } = useLoaderData<typeof loader>();
  const [isPostOpen, setIsPostOpen] = useState({});
  const params = useParams();
  const postId = params.postId || "";

  useEffect(() => {
    const newObj = {};
    data.forEach((datum) => (newObj[datum] = false));
    setIsPostOpen(newObj);
  }, [data]);

  const setDataOpen = (id: number) => {
    const newData = { ...isPostOpen };
    newData[id] = !newData[id];
    setIsPostOpen({ ...newData });
  };

  return (
    <SubBlogScreen
      data={data}
      isPostOpen={isPostOpen}
      setDataOpen={setDataOpen}
      subBlogId={subBlogId}
      postId={postId}
    />
  );
}
