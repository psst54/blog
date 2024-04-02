import type { Category } from "~/types";
import { container, categoryWrapper } from "./styles";

import CategoryList from "@components/CategoryList";

export default function CategoryBar({
  data,
  onToggleCategory,
}: {
  data: Category[];
  onToggleCategory: (id: string) => void;
}) {
  return (
    <div css={container}>
      <div css={categoryWrapper}>
        <CategoryList data={data} onToggleCategory={onToggleCategory} />
      </div>
    </div>
  );
}
