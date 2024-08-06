export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          id_n: number;
          title: string;
          created_at: Date | null;
          last_edited_at: Date | null;
          sub_blog: string;
          content: string | null;
          parent_id: string | null;
          emoji: string | null;
          tags: any[] | null;
        };
      };
      posts_tags: {
        Row: {
          post_id: string;
          tag_id: string;
          created_at: Date | null;
          is_spoiler: boolean;
        };
      };
    };
  };
}
