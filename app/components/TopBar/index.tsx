import CategoroyPopUp from "@components/CategoryPopUp";
import { Container } from "./styles";
import type { Category } from "~/types";

export default function TopBar({
  data,
  onToggleCategory,
}: {
  data: Category[];
  onToggleCategory: (id: string) => void;
}) {
  return (
    <div css={Container}>
      <CategoroyPopUp data={data} onToggleCategory={onToggleCategory} />
    </div>
  );
}
