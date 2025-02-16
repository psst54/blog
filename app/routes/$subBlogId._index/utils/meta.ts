import getMetaData from "~/_utils/getMetaData";

export function meta({ data, location }) {
  const content = data!.content;

  return getMetaData({
    pathname: location.pathname,
    title: content!.title,
    subTitle: content!.subTitle,
  });
}
