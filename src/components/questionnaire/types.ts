export type FormState = {
  message: string;
  error?: string;
  data?: {
    name: string;
    favoriteColor: string;
    preferredSeason: string;
  };
};
