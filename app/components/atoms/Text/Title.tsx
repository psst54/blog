import { memo, type ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const getTitleStyle = (level: HeadingLevel) => {
  switch (level) {
    case 1:
      return { fontSize: "2rem" };
    case 2:
      return { fontSize: "1.5rem" };
    case 3:
      return { fontSize: "1.17rem" };
    default:
      return {};
  }
};

function Title({
  level = 1,
  children,
  id,
}: {
  level?: HeadingLevel;
  children: ReactNode;
  id?: string;
}) {
  const TagName = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <TagName id={id} css={[getTitleStyle(level), { lineHeight: 1.1 }]}>
      {children}
    </TagName>
  );
}

export default memo(Title);
