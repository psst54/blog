import { useMemo } from "react";
import TagItem from "@components/Tag";
import Breadcrumb from "./Breadcrumb";
import {
  Title,
  SubTitle,
  TagListContainer,
  DateText,
  DivideLine,
} from "./styles";

import { Tag, PlainCategory } from "~/types";
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
      {doesTagExist({ data: tags }) && <TagList data={tags as Tag[]} />}
      {postDate && <p css={DateText}>{formatDate(postDate)}</p>}

      <hr css={DivideLine} />
    </div>
  );
}

function doesTagExist({ data }: { data: Tag[] | null }) {
  if (data === null) return false;
  if (data.length === 0) return false;
  return true;
}

function TagList({ data }: { data: Tag[] }) {
  return (
    <div css={TagListContainer}>
      {data.map(
        (tag: { text: string; isSpoiler: boolean }, tagIndex: number) => (
          <TagItem key={tagIndex} item={tag} />
        )
      )}
    </div>
  );
}
