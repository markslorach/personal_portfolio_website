"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <div className="p-2 ml-4 bg-slate-700 rounded-lg hover:scale-105 duration-300">
          <p className="text-white/70">
            <RiSunFill />
          </p>
        </div>
      ) : (
        <div className="p-2 ml-4 bg-slate-200 rounded-lg hover:scale-105 duration-300">
          <p className="opacity-50">
            <FaMoon />
          </p>
        </div>
      )}
    </button>
  );
};

export default ThemeButton;
