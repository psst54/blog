import { useMemo } from "react";
import TagList from "@components/TagList";
import Breadcrumb from "./Breadcrumb";
import { Title, SubTitle, DateText, DivideLine } from "./styles";

import type { Tag, PlainCategory } from "~/types";
import { getAncestors, formatDate } from "./functions";

export default function PostHeader({
  id,
  title,
  subTitle,
  tags,
  postDate,
  plainCategoryData,
}: {
  id: string;
  title: string | null;
  subTitle: string | undefined;
  tags: Tag[] | null;
  postDate: string | null;
  plainCategoryData: PlainCategory[];
}) {
  const breadcrumbData = useMemo(() => {
    return getAncestors({ categoryData: plainCategoryData, id });
  }, [id]);

  return (
    <div>
      <Breadcrumb breadcrumbData={breadcrumbData} />

      <h1 css={Title}>{title}</h1>
      {subTitle && <h2 css={SubTitle}>{subTitle}</h2>}
      <TagList data={tags} />
      {postDate && <p css={DateText}>{formatDate(postDate)}</p>}

      <hr css={DivideLine} />
    </div>
  );
}
