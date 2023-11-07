import { Link } from "@remix-run/react";
import { color } from "@styles/color";
import RightChevronIcon from "@assets/RightChevronIcon";

export default function Breadcrumb({
  breadcrumbData,
}: {
  breadcrumbData: {
    [key: string]: string;
    id: string;
    parentId: string;
    title: string;
    subBlog: string;
  }[];
}) {
  return (
    <div
      css={{
        display: "flex",
        gap: "0.5rem",
        marginBottom: "0.5rem",
        alignItems: "center",
      }}
    >
      {breadcrumbData.map((item, itemIndex) => (
        <div
          key={itemIndex}
          css={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {itemIndex !== 0 && (
            <div css={{ flexShrink: 0 }}>
              <RightChevronIcon size="1rem" color={color.text.standard} />
            </div>
          )}
          <Link
            to={`/${item.subBlog}/${item.id}`}
            css={{
              textDecoration: "none",
              wordBreak: "keep-all",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",

              "&:hover": {
                color: color.secondary.standard,
              },
            }}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
