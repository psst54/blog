import { useState } from "react";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData, useParams } from "@remix-run/react";
import { Outlet } from "@remix-run/react";

import loadable from "@loadable/component";
import MenuBar from "@components/MenuBar";
const CategoryList = loadable(() => import("@components/CategoryList"), {
  fallback: <div css={{ width: "2rem" }} />,
});
import { headerContainer } from "@styles/styles";

import { createClient } from "@supabase/supabase-js";
import { Database } from "@supabase/types";

const background = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  paddingTop: "2rem",
  background:
    "linear-gradient(174deg, #A8DC90 0%, #8BE2B3 33.33%, #70E3E3 66.67%, #53A8E2 100%)",

  overflow: "hidden",
};
const categoryContainer = {
  display: "flex",
  width: "100%",
  height: "100%",
  background: "#FFFFFFB2",
  borderRadius: "2rem 0 0 0",
};
const contentContainer = {
  display: "flex",
  flexDirection: "column" as "column",

  width: "100%",
  height: "100%",
  background: "#FFFFFF7F",
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
        .select();

      if (postError) throw new Error();

      return postData;
    } catch (err) {
      return null;
    }
  };

  const rawData = await loadData();
  return buildTree(rawData);
};

export default function SubBlog() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  const [data, setData] = useState(useLoaderData<typeof loader>());
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
          isOpen={isCategoryOpen}
          data={data.data}
          setDataOpen={setDataOpen}
          dataOpen={data.dataOpen}
          postId={params?.postId}
        />

        <div css={contentContainer}>
          <div css={headerContainer} />
          <Outlet />
        </div>
      </div>
    </main>
  );
}
