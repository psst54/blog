import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";

import type { Document } from "~/types/post";
import Page from "~/components/Page";

import { getPinnedPostList, getRecentPostList } from "./_utils";
import { PinnedSection, RecentSection } from "./_components";

export { meta } from "./_utils/meta";

interface SupabaseCredential {
  url: string;
  key: string;
}

interface OutletContextType {
  supabaseCredential?: SupabaseCredential;
}

export default function Index() {
  const { supabaseCredential } = useOutletContext<OutletContextType>();
  const [recentPostList, setRecentPostList] = useState<Document[]>([]);
  const [pinnedPostList, setPinnedPostList] = useState<Document[]>([]);

  const supabaseClient = useMemo(() => {
    if (!supabaseCredential) {
      return null;
    }

    return createClient(supabaseCredential.url, supabaseCredential.key);
  }, [supabaseCredential]);

  useEffect(() => {
    if (!supabaseClient) {
      return;
    }

    (async () => {
      const [recentPosts, pinnedPosts] = await Promise.all([
        getRecentPostList({ supabaseClient, showAll: false }),
        getPinnedPostList({ supabaseClient }),
      ]);

      setRecentPostList(recentPosts);
      setPinnedPostList(pinnedPosts);
    })();
  }, [supabaseClient]);

  return (
    <Page>
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <PinnedSection postList={pinnedPostList} />
        <RecentSection postList={recentPostList} />
      </div>
    </Page>
  );
}
