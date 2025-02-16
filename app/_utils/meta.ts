import getMetaData from "~/_utils/getMetaData";

export function meta({ location }) {
  return getMetaData({ pathname: location.pathname });
}
