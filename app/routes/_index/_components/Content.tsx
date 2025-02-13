import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";

import type { Document } from "~/types/post";
import { mq } from "~/constants/size";

import { getRecentPostList } from "../_utils/getRecentPostList";
import { getPinnedPostList } from "../_utils/getPinnedPostList";

import PostListView from "@components/PostListView";
import PostGridView from "@components/PostGridView";
import PinnedHeader from "./PinnedHeader";
import LatestHeader from "./LatestHeader";

export default function Content() {
  const { supabaseCredential } = useOutletContext();
  const [recentPostList, setRecentPostList] = useState<Document[]>([]);
  const [pinnedPostList, setPinnedPostList] = useState<Document[]>([]);

  useEffect(() => {
    if (!supabaseCredential) {
      return;
    }
    async function fetchData() {
      const supabaseClient = createClient(
        supabaseCredential.url,
        supabaseCredential.key
      );

      setRecentPostList(
        await getRecentPostList({
          supabaseClient,
          showAll: false,
        })
      );
      setPinnedPostList(
        await getPinnedPostList({
          supabaseClient,
        })
      );
    }

    fetchData();
  }, [supabaseCredential]);

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div>
        <PinnedHeader />
        <PostGridView posts={pinnedPostList} />
      </div>

      <div>
        <LatestHeader />
        <div css={{ padding: "0 1rem", [mq[1]]: { padding: "0 0.5rem" } }}>
          <PostListView posts={recentPostList} />
        </div>
      </div>
    </div>
  );
}
