import { Link } from "@remix-run/react";
import { color } from "@styles/color";
import RightChevronIcon from "@assets/RightChevronIcon";
import { Container, ItemContainer, Text } from "./breadScrumbStyles";
import type { Category } from "~/types";

export default function Breadcrumb({
  breadcrumbData,
}: {
  breadcrumbData: Category[];
}) {
  return (
    <div css={Container}>
      {breadcrumbData.map((item, index) => (
        <div key={index} css={ItemContainer}>
          <Arrow index={index} />
          <Item link={`/${item.sub_blog}/${item.id}`} title={item.title} />
        </div>
      ))}
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
      <div css={{ flexShrink: 0 }}>
        <RightChevronIcon size="1rem" color={color.text.standard} />
      </div>
    );
  return <></>;
}
