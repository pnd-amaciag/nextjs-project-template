import { QuestionResult } from "@/app/actions";

export function SubmittedData({
  name,
  favoriteColor,
  preferredSeason,
}: QuestionResult) {
  if (!name) return null;

  const colorTranslations: Record<string, string> = {
    red: "Red",
    blue: "Blue",
    green: "Green",
    yellow: "Yellow",
  };

  const seasonTranslations: Record<string, string> = {
    spring: "Spring",
    summer: "Summer",
    fall: "Autumn",
    winter: "Winter",
  };

  return (
    <div className="mt-6 bg-gray-100 rounded-lg p-4">
      <h3 className="font-semibold text-gray-700 mb-2">Sent data:</h3>
      <dl className="space-y-1 text-sm">
        <div>
          <dt className="inline font-medium text-gray-600">Name:</dt>
          <dd className="inline ml-2">{name}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-gray-600">Color:</dt>
          <dd className="inline ml-2">
            {colorTranslations[favoriteColor] ?? favoriteColor}
          </dd>
        </div>
        <div>
          <dt className="inline font-medium text-gray-600">
            Season:
          </dt>
          <dd className="inline ml-2">
            {seasonTranslations[preferredSeason] ?? preferredSeason}
          </dd>
        </div>
      </dl>
    </div>
  );
}
