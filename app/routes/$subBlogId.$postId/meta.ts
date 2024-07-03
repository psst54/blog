import type { V2_MetaFunction } from "@remix-run/cloudflare";

import getMetaData from "@utils/getMetaData";

export function meta({ data: postData }): V2_MetaFunction {
  return getMetaData({
    title: postData?.title,
    subTitle: postData?.sub_title,
    tagList: postData?.tags,
    thumbnail: postData?.thumbnail,
  });
}
