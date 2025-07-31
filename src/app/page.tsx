import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="mt-8 w-full">
          <h2 className="text-xl font-bold mb-4">
            Entdecken Sie unsere Angebote
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/offerings/service-a"
              className="p-4 border border-solid border-black/[.08] dark:border-white/[.145] rounded-lg hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
            >
              <h3 className="font-semibold mb-2">🌐 OSS-Entwicklung</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                OSS Entwicklung
              </p>
              </Link>
            <Link
              href="/offerings/service-b"
              className="p-4 border border-solid border-black/[.08] dark:border-white/[.145] rounded-lg hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
            >
              <h3 className="font-semibold mb-2">📱 CI</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                CI Optimierungen
              </p>
            </Link>
            <Link
              href="/offerings/service-c"
              className="p-4 border border-solid border-black/[.08] dark:border-white/[.145] rounded-lg hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
            >
              <h3 className="font-semibold mb-2">☁️ Cloud-Lösungen</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                In der Cloud bereitstellen und skalieren
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
