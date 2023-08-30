import IndexScreen from "~/screens/_index.screen";

import type { V2_MetaFunction } from "@remix-run/cloudflare";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "PSST54's log" },
    { name: "description", content: "PSST54의 블로그" },
  ];
};

export default function Index() {
  return <IndexScreen />;
}
