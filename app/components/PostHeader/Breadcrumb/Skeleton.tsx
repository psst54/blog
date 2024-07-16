import { keyframes } from "@emotion/react";
import { COLOR } from "~/constants/color";

const shine = keyframes`
0% {
  background-color: ${COLOR.PRIMARY.VERY_LIGHT};
}
50% {
  background-color: ${COLOR.PRIMARY.ULTRA_LIGHT};
}
100% {
  background-color: ${COLOR.PRIMARY.VERY_LIGHT};
}`;

export default function BreadcrumbSkeleton() {
  return (
    <>
      <div
        css={{
          width: "4rem",
          height: "1rem",
          borderRadius: "1rem",
          animation: `${shine} 2s infinite`,
        }}
      />
      <div
        css={{
          width: "1rem",
          height: "1rem",
          borderRadius: "1rem",
          animation: `${shine} 2s infinite`,
        }}
      />
      <div
        css={{
          width: "8rem",
          height: "1rem",
          borderRadius: "1rem",
          animation: `${shine} 2s infinite`,
        }}
      />
    </>
  );
}
