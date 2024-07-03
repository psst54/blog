import getMetaData from "@utils/getMetaData";

export function meta({ data: postData }) {
  return getMetaData({
    title: postData?.title,
    subTitle: postData?.sub_title,
    tagList: postData?.tags,
    thumbnail: postData?.thumbnail,
  });
}
