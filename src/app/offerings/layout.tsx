import Link from "next/link";

export default function OfferingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-8">
      <header className="bg-black text-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-2">Unser Angebot</h1>
        <p className="text-blue-100">Entdecken Sie Unser Angebot</p>
      </header>

      <nav className="mb-8">
        <ul className="flex gap-4 border-b border-gray-200 pb-4">
          <li>
            <Link
              href="/offerings/service-a"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Service A
            </Link>
          </li>
          <li>
            <Link
              href="/offerings/service-b"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Service B
            </Link>
          </li>
          <li>
            <Link
              href="/offerings/service-c"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Service C
            </Link>
          </li>
        </ul>
      </nav>

      <main className="bg-white rounded-lg shadow-md p-6">{children}</main>
    </div>
  );
}
