export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {
          // the data expected from .select()
          id: string;
          id_n: number;
          title: string;
          created_at: Date | null;
          last_edited_at: Date | null;
          content: string | null;
          parent_id: string | null;
        };
        Insert: {
          // the data to be passed to .insert()
        };
        Update: {
          // the data to be passed to .update()
        };
      };
    };
  };
}
