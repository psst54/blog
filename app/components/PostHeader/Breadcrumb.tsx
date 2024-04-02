import { Link } from "@remix-run/react";
import { COLOR } from "~/constants/color";
import RightChevronIcon from "@assets/RightChevronIcon";
import { container, itemContainer, Text } from "./breadcrumbStyles";
import type { Category } from "~/types";
import BreadcrumbSkeleton from "./BreadcrumbSkeleton";

export default function Breadcrumb({
  breadcrumbData,
}: {
  breadcrumbData?: Category[];
}) {
  if (!breadcrumbData) {
    return <></>;
  }

  return (
    <div css={container}>
      {breadcrumbData.length === 0 ? (
        <BreadcrumbSkeleton />
      ) : (
        breadcrumbData.map((item, index) => (
          <div key={index} css={itemContainer}>
            <Arrow index={index} />
            <Item link={`/${item.sub_blog}/${item.id}`} title={item.title} />
          </div>
        ))
      )}
    </div>
  );
}

function Item({ link, title }: { link: string; title: string }) {
  return (
    <Link to={link} css={Text}>
      {title}
    </Link>
  );
}

function Arrow({ index }: { index: number }) {
  if (index !== 0)
    return (
      <div css={{ display: "flex" }}>
        <RightChevronIcon size="1rem" color={COLOR.TEXT.STANDARD} />
      </div>
    );
  return <></>;
}
