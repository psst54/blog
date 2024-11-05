import { memo, type ReactNode } from "react";
import { COLOR } from "~/constants/color";

type BodyLevel = 1 | 2;

const getStyle = (level: BodyLevel) => {
  switch (level) {
    case 1:
      return {};
    case 2:
      return { color: COLOR.TEXT.SECONDARY };
    default:
      return {};
  }
};

function Body({
  level = 1,
  children,
  id,
}: {
  level?: BodyLevel;
  children: ReactNode;
  id?: string;
}) {
  return (
    <p id={id} css={[getStyle(level), { lineHeight: 1.5 }]}>
      {children}
    </p>
  );
}

export default memo(Body);
