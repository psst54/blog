export default function GtagBody({
  gaTrackingId,
}: {
  gaTrackingId: string | null;
}) {
  if (!gaTrackingId) {
    return null;
  }

  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gaTrackingId}"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    </>
  );
}
