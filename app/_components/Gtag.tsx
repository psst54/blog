import { useEffect } from "react";
import { useLocation } from "@remix-run/react";

import * as gtag from "@utils/gtags.client";

export default function GTag({
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
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <script
        async
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${gaTrackingId}', {
                      page_path: window.location.pathname,
                    });`,
        }}
      />
    </>
  );
}
