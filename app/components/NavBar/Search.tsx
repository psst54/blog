import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

import type { SupabaseKey } from "~/types";

import { POST_SUMMARY_ATTR, POST_TABLE } from "~/utils/supabase";

export default function Search({ supabaseKey }: { supabaseKey: SupabaseKey }) {
  const [searchString, setSearchString] = useState("");

  if (!supabaseKey) {
    return <></>;
  }

  const supabaseClient = createClient(
    supabaseKey.SUPABASE_URL,
    supabaseKey.SUPABASE_KEY
  );

  async function getData() {
    const { data, error } = await supabaseClient
      .from(POST_TABLE)
      .select(POST_SUMMARY_ATTR)
      .ilike("content", `%${searchString}%`);
  }

  return (
    <div>
      <input
        value={searchString}
        onChange={(event) => setSearchString(event.target.value)}
      />
      <button onClick={() => getData()}>button</button>
    </div>
  );
}
