export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {
          // the data expected from .select()
          id: number;
          title: string;
          created_at: Date;
          last_edited_at: Date;
          content: Date;
          parent_id: number;
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
