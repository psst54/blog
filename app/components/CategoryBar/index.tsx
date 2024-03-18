import { Suspense, lazy } from "react";
import type { Category, IsPostOpen } from "~/types";
import { container, categoryWrapper } from "./styles";

const LazyCategoryList = lazy(() => import("@components/CategoryList"));

export default function CategoryBar({
  data,
  isPostOpen,
  toggleCategory,
}: {
  data: Category[];
  isPostOpen: IsPostOpen;
  toggleCategory: (id: string) => void;
}) {
  return (
    <div css={container}>
      <div css={categoryWrapper}>
        <Suspense fallback="">
          <LazyCategoryList
            data={data}
            isPostOpen={isPostOpen}
            toggleCategory={toggleCategory}
          />
        </Suspense>
      </div>
    </div>
  );
}
