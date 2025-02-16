import { Link } from "@remix-run/react";

import { COLOR } from "~/constants/color";
import type { Category } from "~/types/post";
import RightChevronIcon from "~/assets/RightChevronIcon";

import { container, itemContainer, breadcrumbText } from "./styles";
import BreadcrumbSkeleton from "./Skeleton";

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
        renderBreadcrumbData(breadcrumbData)
      )}
    </div>
  );
}

function renderBreadcrumbData(breadcrumbData: Category[]) {
  return breadcrumbData.map((item: Category, index: number) => (
    <div key={item.id} css={itemContainer}>
      {index > 0 && <Arrow />}
      <Item
        link={`/${item.sub_blog}/${item.id}`}
        title={item.emoji + " " + item.title}
      />
    </div>
  ));
}

function Item({ link, title }: { link: string; title: string }) {
  return (
    <Link to={link} css={breadcrumbText}>
      {title}
    </Link>
  );
}

function Arrow() {
  return (
    <div css={{ display: "flex" }}>
      <RightChevronIcon color={COLOR.TEXT.STANDARD} />
    </div>
  );
}
