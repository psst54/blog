export const loader = async () => {
  const supabaseCredential = {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  };

  return {
    gaTrackingId: process.env.GA_TRACKING_ID,
    supabaseCredential,
  };
};
