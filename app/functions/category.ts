import type { Category, Post } from "~/types";

export function getSubBlogId({ params }: { params: Params }) {
  if (!params?.subBlogId) return "cse";
  if (typeof params.subBlogId === "string") return params.subBlogId;
  return "cse";
}

export function buildTree(items: Post[]) {
  const itemMap: { [key: string]: Category } = {};

  for (const item of items) {
    itemMap[item.id] = { ...item, isOpen: false, children: [] };
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

export function spread(items: Post[]) {
  const ret: { [key: string]: any } = {}; // fix any

  for (const item of items) {
    ret[item.id] = {
      id: item.id,
      parentId: item.parent_id,
      title: item.title,
      subBlog: item.sub_blog,
    };
  }
  return ret;
}
