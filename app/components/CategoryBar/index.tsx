import CategoryList from "@components/CategoryList";
import { Category, IsPostOpen } from "~/types";
import { container, categoryWrapper } from "./styles";

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
        <CategoryList
          data={data}
          isPostOpen={isPostOpen}
          toggleCategory={toggleCategory}
        />
      </div>
    </div>
  );
}
