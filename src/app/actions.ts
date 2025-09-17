"use server";

export type QuestionResult = {
  name: string;
  favoriteColor: string;
  preferredSeason: string;
};

export type PocessedForm = {
  status: "error" | "success" | "new";
  result: QuestionResult;
};

export async function processForm(
  prevState: PocessedForm,
  formData: FormData
): Promise<PocessedForm> {
  const name = formData.get("name") as string;
  const favoriteColor = formData.get("favoriteColor") as string;
  const preferredSeason = formData.get("preferredSeason") as string;

  if (!name)
    return {
      status: "error",
      result: {
        favoriteColor: "",
        name: "",
        preferredSeason: "",
      },
    };

  return {
    status: "success",
    result: {
      favoriteColor,
      name,
      preferredSeason,
    },
  };
}
