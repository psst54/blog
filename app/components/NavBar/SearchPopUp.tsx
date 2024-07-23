import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

import type { SupabaseKey } from "~/types";

import { POST_SUMMARY_ATTR, POST_TABLE } from "~/utils/supabase";
import SearchIcon from "~/assets/SearchIcon";
import PopUp from "../PopUp";

export default function SearchPopUp({
  supabaseKey,
}: {
  supabaseKey: SupabaseKey;
}) {
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

  function Content() {
    return (
      <div
        css={{
          position: "fixed",
          top: "calc((100dvh - 50%) / 2)",
          left: "calc((100vw - 50%) / 2)",

          background: "white",
          width: "50%",
          height: "50%",

          borderRadius: "1rem",

          zIndex: 101,
        }}
      >
        <input value={searchString} />
        <button onClick={() => getData()}>button</button>
      </div>
    );
  }

  return (
    <PopUp
      icon={<SearchIcon size="1.5rem" color="#000" />}
      content={<Content />}
    />
  );
}
