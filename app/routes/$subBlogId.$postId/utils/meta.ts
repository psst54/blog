import getMetaData from "@utils/getMetaData";

export function meta({ data }) {
  return getMetaData({
    title: data.postData?.title,
    subTitle: data.postData?.sub_title,
    tagList: data.postData?.tags,
    thumbnail: data.postData?.thumbnail,
  });
}
