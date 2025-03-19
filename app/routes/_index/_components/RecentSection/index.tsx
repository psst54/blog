import { useMemo } from "react";
import { useOutletContext } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@supabase/supabase-js";

import { type OutletContextType } from "~/types";
import { mq } from "~/constants/size";
import PostListView from "~/components/PostListView";

import RecentHeader from "./RecentHeader";
import { getRecentPostList } from "../../_utils";

export default function RecentSection() {
  const { supabaseCredential } = useOutletContext<OutletContextType>();

  const supabaseClient = useMemo(() => {
    if (!supabaseCredential) {
      return null;
    }

    return createClient(supabaseCredential.url, supabaseCredential.key);
  }, [supabaseCredential]);

  const { data: recentPostList } = useQuery({
    queryKey: ["/", "recentPost"],
    queryFn: () => getRecentPostList({ supabaseClient, showAll: false }),
  });

  return (
    <div>
      <RecentHeader />
      <div css={{ padding: "0 1rem", [mq[1]]: { padding: "0 0.5rem" } }}>
        <PostListView postList={recentPostList || []} />
      </div>
    </div>
  );
}
