"use client";

import { useState, useEffect } from "react";

export default function DeviceInfo() {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">
        You are viewing this on a {isMobile ? "mobile" : "desktop"} device
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Screen width: {screenWidth}px
      </p>
    </div>
  );
}
