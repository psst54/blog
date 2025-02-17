import { useEffect, useRef } from "react";

export default function Comment({ id }: { id: string | null }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const script = document.createElement("script");

    const config = {
      src: "https://giscus.app/client.js",
      "data-repo": "psst54/psst54-blog-comment",
      "data-repo-id": "R_kgDONOyzcg",
      "data-category": "Announcements",
      "data-category-id": "DIC_kwDONOyzcs4CkPDD",
      "data-mapping": "pathname",
      "data-strict": "0",
      "data-reactions-enabled": "0",
      "data-emit-metadata": "0",
      "data-input-position": "bottom",
      "data-theme": "https://psst54.me/giscus.css",
      // "data-theme": "http://localhost:8788/giscus.css",
      "data-lang": "ko",
      crossOrigin: "anonymous",
      async: "true",
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    ref.current.appendChild(script);

    return () => {
      if (ref.current) ref.current.removeChild(script);
    };
  }, [id]);

  return <div ref={ref} />;
}
