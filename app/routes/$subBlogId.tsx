import { useState, useEffect } from "react";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData, useParams } from "@remix-run/react";
import { Outlet } from "@remix-run/react";

import MenuBar from "@components/MenuBar";
import CategoryList from "@components/CategoryList";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log | sub blog" },
    { name: "description", content: "여기는 서브 블로그" },
  ];
};

const background = {
  display: "flex",
  width: "100vw",
  height: "100dvh",
  paddingTop: "2rem",
  background:
    "linear-gradient(174deg, #A8DC90 0%, #8BE2B3 33.33%, #70E3E3 66.67%, #53A8E2 100%)",

  overflow: "hidden",

  [mq[0]]: {
    paddingTop: "3.5rem",
  },
};
const categoryContainer = {
  display: "flex",
  width: "100%",
  height: "100%",
  background: "#FFFFFFD8",
  borderRadius: "2rem 0 0 0",

  [mq[1]]: {
    borderRadius: "1rem 0 0 0",
  },
};
const contentContainer = {
  flexGrow: 1,
  width: "0px",
  display: "flex",
  flexDirection: "column" as "column",

  height: "100%",
  background: "#FFFFFF",

  [mq[0]]: {
    borderRadius: "2rem 0 0 0",
  },
  [mq[1]]: {
    borderRadius: "1rem 0 0 0",
  },
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
    <main css={background}>
      <MenuBar />

      <div css={categoryContainer}>
        <CategoryList
          data={data}
          isPostOpen={isPostOpen}
          setIsPostOpen={setDataOpen}
          subBlogId={subBlogId}
          postId={postId}
        />

        <div css={contentContainer}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
