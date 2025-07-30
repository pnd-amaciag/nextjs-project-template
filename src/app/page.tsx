"use client";

import ChartComponent from "@/components/ChartComponent";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Einwohnerzahl in Berlin
        </h2>
        <ChartComponent />
      </div>
    </main>
  );
}
