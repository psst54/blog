import { useMemo } from "react";
import { useOutletContext } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@supabase/supabase-js";

import { type OutletContextType } from "~/types";
import PostGridView from "~/components/PostGridView";

import PinnedHeader from "./PinnedHeader";
import { getPinnedPostList } from "../../_utils";

export default function RecentSection() {
  const { supabaseCredential } = useOutletContext<OutletContextType>();

  const supabaseClient = useMemo(() => {
    if (!supabaseCredential) {
      return null;
    }

    return createClient(supabaseCredential.url, supabaseCredential.key);
  }, [supabaseCredential]);

  const { data: pinnedPostList } = useQuery({
    queryKey: ["/", "pinnedPost"],
    queryFn: () => getPinnedPostList({ supabaseClient, showAll: false }),
  });

  return (
    <div>
      <PinnedHeader />
      <PostGridView postList={pinnedPostList || []} />
    </div>
  );
}
