import getJsonLd from "~/_utils/getJsonLd";
import getMetaData from "~/_utils/getMetaData";
import type { Tag } from "~/types";

export function meta({ data, location }) {
  return getMetaData({
    pathname: location.pathname,
    title: data.postData?.title,
    subTitle: data.postData?.sub_title,
    tagList: data.postData?.tags
      .map((tag: Tag) => tag.content.join(", "))
      .join(", "),
    thumbnail: data.postData?.thumbnail,
  }).concat(
    getJsonLd({
      pathname: location.pathname,
      postData: data.postData,
    })
  );
}
