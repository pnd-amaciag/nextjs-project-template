"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import Loading from "@/app/loading";

type PopulationData = {
  id: number;
  value: number;
  date: string;
};

export default function ChartComponent() {
  const [data, setData] = useState<PopulationData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/population");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching population data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
        <XAxis
          dataKey="date"
          tick={{ fill: "var(--chart-text)" }}
          axisLine={{ stroke: "var(--chart-axis)" }}
        />
        <YAxis
          domain={["dataMin - 100000", "dataMax + 100000"]}
          tickFormatter={(value: number) => `${(value / 1000000).toFixed(1)}M`}
          tick={{ fill: "var(--chart-text)" }}
          axisLine={{ stroke: "var(--chart-axis)" }}
        />
        <Tooltip
          formatter={(value: number | string) =>
            `${Number(value).toLocaleString("de")}`
          }
          contentStyle={{
            backgroundColor: "var(--background)",
            border: "1px solid var(--chart-grid)",
            borderRadius: "0.375rem",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="var(--chart-primary)"
          strokeWidth={2}
          dot={{ fill: "var(--chart-primary)", r: 4 }}
          activeDot={{ r: 6 }}
          name="Population"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
