"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("light", initialTheme === "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-gray-200 border border-cyan-500/20 dark:border-cyan-500/20 light:border-gray-300 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center group hover-lift"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 group-hover:rotate-180" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
