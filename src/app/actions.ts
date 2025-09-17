"use server";

export type QuestionResult = {
  name: string;
  favoriteColor: string;
  preferredSeason: string;
};

export async function processForm(
  prevState: QuestionResult,
  formData: FormData
): Promise<QuestionResult> {
  const name = formData.get("name") as string;
  const favoriteColor = formData.get("favoriteColor") as string;
  const preferredSeason = formData.get("preferredSeason") as string;

  return {
    name,
    favoriteColor,
    preferredSeason,
  };
}
