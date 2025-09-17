"use client";

import { useActionState } from "react";
import {
  SubmitButton,
  TextInput,
  RadioGroup,
  SubmittedData,
  StatusMessage,
} from "@/components/questionnaire";
import { PocessedForm, processForm } from "@/app/actions";

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
];

const seasonOptions = [
  { value: "spring", label: "Spring" },
  { value: "summer", label: "Summer" },
  { value: "fall", label: "Autumn" },
  { value: "winter", label: "Winter" },
];

export default function Home() {
  const [state, formAction, isPending] = useActionState<PocessedForm, FormData>(
    processForm,
    {
      status: "new",
      result: {
        favoriteColor: "",
        name: "",
        preferredSeason: "",
      },
    }
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Short questionnaire
          </h1>
          <p className="mt-2 text-gray-600">Please answer three questions</p>
        </div>

        <form
          action={formAction}
          className="bg-white shadow rounded-lg p-6 space-y-6"
        >
          <TextInput
            id="name"
            name="name"
            label="1. What is your name?"
            placeholder="Please enter your name"
            defaultValue={state?.result?.name}
            required
          />

          <RadioGroup
            name="favoriteColor"
            legend="2. What is your preferred color?"
            options={colorOptions}
            defaultValue={state?.result?.favoriteColor}
            required
          />

          <RadioGroup
            name="preferredSeason"
            legend="3. What is your preferred season?"
            options={seasonOptions}
            defaultValue={state?.result?.preferredSeason}
            required
          />

          <SubmitButton />
        </form>
        {state.status === "success" && (
          <SubmittedData
            name={state.result.name}
            favoriteColor={state.result.favoriteColor}
            preferredSeason={state.result.preferredSeason}
          />
        )}
        {state.status === "error" && (
          <StatusMessage
            error="Error"
            message="Something went wrong"
          ></StatusMessage>
        )}
      </div>
    </div>
  );
}
