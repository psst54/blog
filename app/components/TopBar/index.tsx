import CategoroyPopUp from "@components/CategoryPopUp";
import { Container } from "./styles";
import type { IsPostOpen, Category } from "~/types";

export default function TopBar({
  data,
  isPostOpen,
  toggleCategory,
}: {
  data: Category[];
  isPostOpen: IsPostOpen;
  toggleCategory: (id: string) => void;
}) {
  return (
    <div css={Container}>
      <CategoroyPopUp
        data={data}
        isPostOpen={isPostOpen}
        toggleCategory={toggleCategory}
      />
    </div>
  );
}
