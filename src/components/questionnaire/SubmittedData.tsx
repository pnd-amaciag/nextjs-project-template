type FormData = {
  name: string;
  favoriteColor: string;
  preferredSeason: string;
};

type SubmittedDataProps = {
  data: FormData | undefined;
};

export function SubmittedData({ data }: SubmittedDataProps) {
  if (!data || !data.name) return null;

  const colorTranslations: Record<string, string> = {
    red: "Rot",
    blue: "Blau",
    green: "Grün",
    yellow: "Gelb",
  };

  const seasonTranslations: Record<string, string> = {
    spring: "Frühling",
    summer: "Sommer",
    fall: "Herbst",
    winter: "Winter",
  };

  return (
    <div className="mt-6 bg-gray-100 rounded-lg p-4">
      <h3 className="font-semibold text-gray-700 mb-2">Übermittelte Daten:</h3>
      <dl className="space-y-1 text-sm">
        <div>
          <dt className="inline font-medium text-gray-600">Name:</dt>
          <dd className="inline ml-2">{data.name}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-gray-600">Lieblingsfarbe:</dt>
          <dd className="inline ml-2">
            {colorTranslations[data.favoriteColor] || data.favoriteColor}
          </dd>
        </div>
        <div>
          <dt className="inline font-medium text-gray-600">
            Bevorzugte Jahreszeit:
          </dt>
          <dd className="inline ml-2">
            {seasonTranslations[data.preferredSeason] || data.preferredSeason}
          </dd>
        </div>
      </dl>
    </div>
  );
}
