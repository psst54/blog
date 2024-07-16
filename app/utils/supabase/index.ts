export const POST_TABLE = "posts";

export const POST_SUMMARY_ATTR_LIST = [
  "id",
  "emoji",
  "title",
  "sub_title",
  "tags",
  "thumbnail",
  "sub_blog",
];

export const POST_SUMMARY_ATTR = POST_SUMMARY_ATTR_LIST.join(", ");

export const POST_DETAIL_ATTR_LIST = [
  "id",
  "emoji",
  "title",
  "sub_title",
  "created_at",
  "content",
  "tags",
  "type",
];

export const POST_DETAIL_ATTR = POST_DETAIL_ATTR_LIST.join(", ");
