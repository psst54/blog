export interface Env {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
  GA_TRACKING_ID: string;
  ENVIRONMENT: string;
}

export interface SupabaseKey {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
}

export interface Tag {
  text: string;
  isSpoiler: boolean;
}

export const NORMAL_PAGE = "post";
export const DIRECTORY_PAGE = "database";

type NORMAL_PAGE_TYPE = typeof NORMAL_PAGE;
type DIRECTORY_PAGE_TYPE = typeof DIRECTORY_PAGE;

export interface Post {
  id: string;
  title: string;
  sub_title?: string; // [todo] fix this
  subTitle?: string;
  parent_id: string;
  type: NORMAL_PAGE_TYPE | DIRECTORY_PAGE_TYPE;
  sub_blog: string;
  created_at?: string;
  last_edited_at?: string;
  tags?: Tag[];
  thumbnail?: string;
  emoji?: string;
  content: string;
}

export interface Category {
  children: Category[];
  id: string;
  parent_id: string | null;
  sub_blog: string;
  title: string;
  emoji?: string;
  type: NORMAL_PAGE_TYPE | DIRECTORY_PAGE_TYPE;
  isOpen: boolean;
}

export interface Menu {
  href: string;
  icon: JSX.Element;
  alt: string;
}
