import getMetaData from "@utils/getMetaData";

export function meta({ location }) {
  return getMetaData({ pathname: location.pathname });
}
