import { useMemo } from "react";
import TagList from "~/components/TagList";
import Breadcrumb from "./Breadcrumb";
import { Title, SubTitle, DateText, DivideLine } from "./styles";

import type { Tag } from "~/types/post";
import { getBreadcrumbData, formatDate } from "./functions";
import useCategoryStore from "~/stores/category";

export default function PostHeader({
  id,
  title,
  subTitle,
  tags,
  postDate,
}: {
  id: string;
  title: string;
  subTitle: string | undefined;
  tags: Tag[] | null;
  postDate: string | null;
}) {
  const { categoryList } = useCategoryStore();

  const breadcrumbData = useMemo(() => {
    return getBreadcrumbData({ categoryList, id });
  }, [id, categoryList]);

  return (
    <header css={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Breadcrumb breadcrumbData={breadcrumbData} />

      <h1 css={Title}>{title}</h1>
      {subTitle && <p css={SubTitle}>{subTitle}</p>}
      <TagList data={tags} />
      {postDate && (
        <time dateTime={postDate} css={DateText}>
          {formatDate(postDate)}
        </time>
      )}

      <hr css={DivideLine} />
    </header>
  );
}
