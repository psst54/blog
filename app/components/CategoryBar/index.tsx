import { Suspense, lazy } from "react";
import type { Category } from "~/types";
import { container, categoryWrapper } from "./styles";

const LazyCategoryList = lazy(() => import("@components/CategoryList"));

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
        <Suspense fallback="">
          <LazyCategoryList data={data} onToggleCategory={onToggleCategory} />
        </Suspense>
      </div>
    </div>
  );
}
