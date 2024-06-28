import type { Category } from "~/types";

export default function toggleCategory(
  categoryId: string,
  categoryData: Category[]
): Category[] {
  return categoryData.map((category: Category) => {
    if (category.id === categoryId) {
      return { ...category, isOpen: !category.isOpen };
    }
    if (category.children && category.children.length > 0) {
      return {
        ...category,
        children: toggleCategory(categoryId, category.children),
      };
    }
    return category;
  });
}
