import getMetaData from "~/_utils/getMetaData";

export function meta({ data, location }) {
  return getMetaData({ pathname: location.pathname });
}
