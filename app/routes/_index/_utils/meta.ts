import getMetaData from "@utils/getMetaData";

export function meta({ data, location }) {
  return getMetaData({ pathname: location.pathname });
}
