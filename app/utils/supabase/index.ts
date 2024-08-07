export const POST_TABLE = "posts";
export const POST_TAG_TABLE = "posts_tags";

export const POST_SUMMARY_ATTR_LIST = [
  "id",
  "emoji",
  "title",
  "sub_title",
  "thumbnail",
  "sub_blog",
  "tags",
];

export const POST_SUMMARY_ATTR = POST_SUMMARY_ATTR_LIST.join(", ");

export const POST_DETAIL_ATTR_LIST = [
  "id",
  "emoji",
  "title",
  "sub_title",
  "created_at",
  "content",
  "type",
  "tags",
];

export const POST_DETAIL_ATTR = POST_DETAIL_ATTR_LIST.join(", ");

export const TAG_ATTR = "is_spoiler, tags ( id, title, content )";
