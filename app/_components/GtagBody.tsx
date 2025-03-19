/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */

import { useEffect } from "react";
import { useLocation } from "@remix-run/react";

import * as gtag from "~/_utils/gtags.client";

export default function GtagBody({
  gaTrackingId,
}: {
  gaTrackingId: string | null;
}) {
  const location = useLocation();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  if (!gaTrackingId) {
    return null;
  }

  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gaTrackingId}`}
          height="0"
          width="0"
          // @ts-ignore
          style="display:none;visibility:hidden"
        />
      </noscript>
    </>
  );
}
