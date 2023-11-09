export interface Env {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
  GA_TRACKING_ID: string;
  ENVIRONMENT: string;
}

export interface Tag {
  text: string;
  isSpoiler: boolean;
}

export interface Post {
  id: string;
  title: string;
  subTitle?: string;
  parent_id: string;
  type: string;
  sub_blog: string;
  created_at: string;
  tags: Tag[];
}

export interface IsPostOpen {
  [key: string]: boolean;
}

export interface Category {
  children: Category[];
  id: string;
  parent_id: string | null;
  sub_blog: string;
  title: string;
  type: "post" | "database";
}

export interface PlainCategory {
  [key: string]: string | null;
  id: string;
  parentId: string | null;
}

export interface Menu {
  href: string;
  icon: JSX.Element;
  alt: string;
}
