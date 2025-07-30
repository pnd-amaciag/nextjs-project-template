"use client";

import { useActionState } from "react";
import {
  SubmitButton,
  TextInput,
  RadioGroup,
  StatusMessage,
  SubmittedData,
  type FormState,
} from "@/components/questionnaire";

async function submitQuestionnaire(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const response = await fetch("/api/questionnaire", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      return {
        message: "",
        error:
          "Fehler beim Absenden des Formulars. Bitte versuchen Sie es erneut.",
      };
    }

    const result = await response.json();
    console.log("Server response:", result);

    return {
      message: "Formular erfolgreich abgesendet!",
      data: result.data,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      message: "",
      error: "Ein Fehler ist beim Absenden des Formulars aufgetreten.",
    };
  }
}

export default function Home() {
  const [state, formAction] = useActionState(submitQuestionnaire, {
    message: "",
  });

  const colorOptions = [
    { value: "red", label: "Rot" },
    { value: "blue", label: "Blau" },
    { value: "green", label: "Grün" },
    { value: "yellow", label: "Gelb" },
  ];

  const seasonOptions = [
    { value: "spring", label: "Frühling" },
    { value: "summer", label: "Sommer" },
    { value: "fall", label: "Herbst" },
    { value: "winter", label: "Winter" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Kurzer Fragebogen
          </h1>
          <p className="mt-2 text-gray-600">
            Bitte beantworten Sie diese drei Fragen
          </p>
        </div>

        <form
          action={formAction}
          className="bg-white shadow rounded-lg p-6 space-y-6"
        >
          <TextInput
            id="name"
            name="name"
            label="1. Wie ist Ihr Name?"
            placeholder="Geben Sie Ihren Namen ein"
            defaultValue={state.data?.name}
            required
          />

          <RadioGroup
            name="favoriteColor"
            legend="2. Was ist Ihre Lieblingsfarbe?"
            options={colorOptions}
            defaultValue={state.data?.favoriteColor}
            required
          />

          <RadioGroup
            name="preferredSeason"
            legend="3. Was ist Ihre bevorzugte Jahreszeit?"
            options={seasonOptions}
            defaultValue={state.data?.preferredSeason}
            required
          />

          <StatusMessage
            error={state.error}
            message={state.message && !state.error ? state.message : undefined}
          />

          <SubmitButton />
        </form>

        <SubmittedData data={state.data} />
      </div>
    </div>
  );
}
