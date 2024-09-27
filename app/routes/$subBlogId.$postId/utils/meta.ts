import getMetaData from "@utils/getMetaData";
import type { Tag } from "~/types";

export function meta({ data }) {
  return getMetaData({
    title: data.postData?.title,
    subTitle: data.postData?.sub_title,
    tagList: data.postData?.tags
      .map((tag: Tag) => tag.content.join(", "))
      .join(", "),
    thumbnail: data.postData?.thumbnail,
  });
}
