import katexStyle from "katex/dist/katex.css";

export function Fonts({ isInitialRender }: { isInitialRender: boolean }) {
  return (
    <>
      <link
        rel={isInitialRender ? "preload" : "stylesheet"}
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
      />

      <link
        rel={isInitialRender ? "preload" : "stylesheet"}
        as="style"
        href={katexStyle}
      />
    </>
  );
}

export function GTag({ gaTrackingId }: { gaTrackingId: string }) {
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
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
    </>
  );
}
