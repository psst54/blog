import { useState } from "react";
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

  [mq[1]]: {
    borderRadius: "1rem 0 0 0",
  },
};

function buildTree(items: any) {
  const itemMap = {};
  const isOpen = {};

  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] };
    isOpen[item.id] = false;
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

  return { data: rootNodes, dataOpen: isOpen };
}

export const loader = async ({ context }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const loadData = async () => {
    try {
      const { data: postData, error: postError } = await supabase
        .from("posts")
        .select("id, title, parent_id, type")
        .order("created_at");

      if (postError) throw new Error();

      return postData;
    } catch (err) {
      return [];
    }
  };

  const rawData = await loadData();
  return rawData;
};

export default function SubBlog() {
  const [data, setData] = useState(buildTree(useLoaderData<typeof loader>()));
  const params = useParams();

  const setDataOpen = (id: number) => {
    const newData = { ...data.dataOpen };
    newData[id] = !newData[id];
    setData({ ...data, dataOpen: { ...newData } });
  };

  return (
    <main css={background}>
      <MenuBar />

      <div css={categoryContainer}>
        <CategoryList
          data={data.data}
          setDataOpen={setDataOpen}
          dataOpen={data.dataOpen}
          postId={params?.postId || ""}
        />

        <div css={contentContainer}>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
