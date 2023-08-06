import CategoryItem from "./CategoryItem";

const tmpCategoryList = [
  {
    id: 1,
    title: "PS",
    href: "/subBlog",
    postCount: 2,
    subCategory: [
      { id: 2, title: "BOJ", postCount: 2, href: "/subBlog" },
      { id: 3, title: "프로그래머스", postCount: 0, href: "/subBlog" },
    ],
  },
  {
    id: 4,
    title: "React.js",
    subCategory: [],
    href: "/subBlog",
    postCount: 14,
  },
];

export default function CategoryList({ isOpen }: { isOpen: boolean }) {
  return (
    <div css={{ width: isOpen ? "18rem" : "4rem", flexShrink: 0 }}>
      <div css={{ height: "4rem", borderBottom: "2px solid #95E8BB" }} />

      {isOpen && (
        <div css={{ padding: "1rem" }}>
          <div>
            {tmpCategoryList.map(
              (categoryItem: any, categoryItemIdx: number) => {
                const isSelected = categoryItemIdx === 1;
                return (
                  <div key={categoryItemIdx}>
                    <CategoryItem
                      key={null}
                      href={categoryItem.href}
                      title={categoryItem.title}
                      postCount={categoryItem.postCount}
                      indent={0}
                      isSelected={categoryItem.id === 2}
                    />

                    {categoryItem.subCategory.map(
                      (subCategoryItem: any, subCategoryItemIdx: number) => {
                        return (
                          <CategoryItem
                            key={subCategoryItemIdx}
                            href={subCategoryItem.href}
                            title={subCategoryItem.title}
                            postCount={subCategoryItem.postCount}
                            indent={1}
                            isSelected={subCategoryItem.id === 2}
                          />
                        );
                      }
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
}
