import Link from "next/link";

export default function VersionPage() {
  const appVersion = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.1";

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">App Version</h1>
          <Link
            href="/"
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Back to Todo List
          </Link>
        </div>
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-xl">Version: {appVersion}</p>
        </div>
      </main>
    </div>
  );
}
