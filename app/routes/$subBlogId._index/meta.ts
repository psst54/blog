import getMetaData from "@utils/getMetaData";

export function meta({ data }) {
  const content = data!.content;

  return getMetaData({
    title: content!.title,
    subTitle: content!.subTitle,
  });
}
