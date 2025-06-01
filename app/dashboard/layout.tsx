"use client";

import Navbar from "@/components/common/navbar";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setTheme, theme } = useTheme(); // Set dark as the default theme

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);
  return (
    <div className="pt-[100px]">
      <Navbar />
      {children}
    </div>
  );
}
