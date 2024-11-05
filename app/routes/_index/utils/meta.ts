import getMetaData from "@utils/getMetaData";

export function meta({ location }: { location: Location }) {
  return getMetaData({ pathname: location.pathname });
}
