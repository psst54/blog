import { backgroundPulse } from "~/styles/pulse";

const icon = {
  flexShrink: 0,

  width: "1.8rem",
  height: "1.8rem",

  borderRadius: "100%",
  marginRight: "0.5rem",

  ...backgroundPulse,
};

const title = (width: number) => ({
  width: `${width * 100}%`,
  height: "1.2rem",

  borderRadius: "2rem",

  ...backgroundPulse,
});

function Row({ width }: { width: number }) {
  return (
    <div>
      <div
        css={{
          display: "flex",
          alignItems: "center",

          height: "2.25rem",
        }}
      >
        <div css={icon} />
        <div css={title(width)} />
      </div>
    </div>
  );
}

export default function CategoryListSkeleton() {
  return (
    <div>
      <Row width={0.75} />
      <Row width={0.6} />
      <Row width={1} />
    </div>
  );
}
