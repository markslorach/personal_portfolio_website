"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";

const ThemeButton = () => {
  const {resolvedTheme, setTheme} = useTheme();

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
        <div className="light-mode-toggle group">
          <p className="sun">
            <RiSunFill />
          </p>
        </div>
      ) : (
        <div className="dark-mode-toggle group">
          <p className="moon">
            <FaMoon />
          </p>
        </div>
      )}
    </button>
  );
};

export default ThemeButton;
