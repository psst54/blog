import react from "react";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import MenuBar from "@components/MenuBar";
import CategoryList from "@components/CategoryList";
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
  width: "100%",
  height: "100%",
  background: "#FFFFFF7F",
};

export const loader = async ({ context }: LoaderArgs) => {
  const supabase = createClient<Database>(
    context.env.SUPABASE_URL,
    context.env.SUPABASE_KEY
  );

  const loadData = async () => {
    try {
      const { data, error } = await supabase.from("posts").select();
      if (error) throw new Error();

      return data;
    } catch (err) {
      alert("데이터를 불러오지 못했습니다");
      return null;
    }
  };

  return loadData();
};

function buildTree(items: any[]) {
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

export default function SubBlog() {
  const rawData = useLoaderData<typeof loader>();
  const [isCategoryOpen, setIsCategoryOpen] = react.useState(true);

  return (
    <main css={background}>
      <MenuBar />

      <div css={categoryContainer}>
        <CategoryList isOpen={isCategoryOpen} data={buildTree(rawData)} />

        <div css={contentContainer}>
          <div css={headerContainer} />
        </div>
      </div>
    </main>
  );
}
