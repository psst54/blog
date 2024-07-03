import type { V2_MetaFunction } from "@remix-run/cloudflare";

import getMetaData from "@utils/getMetaData";

export function meta({ data }): V2_MetaFunction {
  const content = data!.content;

  return getMetaData({
    title: content!.title,
    subTitle: content!.subTitle,
  });
}
