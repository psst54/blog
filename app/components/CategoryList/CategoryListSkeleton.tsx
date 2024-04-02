import { COLOR } from "~/constants/color";
import { keyframes } from "@emotion/react";

const shine = keyframes`
0% {
  background-color: ${COLOR.PRIMARY.LIGHT};
}
50% {
  background-color: ${COLOR.PRIMARY.VERY_LIGHT};
}
100% {
  background-color: ${COLOR.PRIMARY.LIGHT};
}`;

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
        <div
          css={{
            flexShrink: 0,

            width: "1.8rem",
            height: "1.8rem",

            borderRadius: "100%",
            marginRight: "0.5rem",

            animation: `${shine} 2s infinite`,
          }}
        />
        <div
          css={{
            width: `${width * 100}%`,
            height: "1.2rem",

            borderRadius: "2rem",

            animation: `${shine} 2s infinite`,
          }}
        />
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
