import type { V2_MetaFunction } from "@remix-run/cloudflare";

import getMetaData from "@utils/getMetaData";

export function meta(): V2_MetaFunction {
  return getMetaData({});
}
