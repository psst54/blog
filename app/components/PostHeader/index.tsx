import { useMemo } from "react";
import TagList from "@components/TagList";
import Breadcrumb from "./Breadcrumb";
import { Title, SubTitle, DateText, DivideLine } from "./styles";

import type { Tag, Category } from "~/types";
import { getBreadcrumbData, formatDate } from "./functions";

export default function PostHeader({
  id,
  title,
  subTitle,
  tags,
  postDate,
  categoryData,
}: {
  id: string;
  title: string | null;
  subTitle: string | undefined;
  tags: Tag[] | null;
  postDate: string | null;
  categoryData: Category[];
}) {
  console.log(categoryData);
  const breadcrumbData = useMemo(() => {
    return getBreadcrumbData({ categoryData: categoryData, id });
  }, [id, categoryData]);

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
