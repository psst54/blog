export function getSubBlogId({ params }: { params: Params }) {
  if (!params?.subBlogId) return "";
  if (typeof params.subBlogId === "string") return params.subBlogId;
  return "";
}

export function buildTree(items: any) {
  const itemMap = {};

  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] };
  }

  const rootNodes = [];

  for (const item of items) {
    const parentID = item.parent_id;

    if (parentID === null || !itemMap[parentID]) {
      rootNodes.push(itemMap[item.id]);
    } else {
      itemMap[parentID].children.push(itemMap[item.id]);
    }
  }

  return rootNodes;
}
