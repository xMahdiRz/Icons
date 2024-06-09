"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuSunMedium, LuLaptop } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";

const ThemeChanger = ({
  size = 18,
  lightSelectedColor = "#3b82f6",
  darkSelectedColor = "#3b82f6",
  lightSelectedBackgroundColor = "#f1f5f9",
  darkSelectedBackgroundColor = "#f1f5f9",
  lightUnselectedColor = "#0f172a",
  darkUnselectedColor = "#ffffff",
  lightUnselectedBackgroundColor = "#ffffff",
  darkUnselectedBackgroundColor = "#0f172a",
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-start justify-start gap-1 rounded-full border border-slate-100 p-[3px]">
      <div
        className={`relative flex items-start justify-start gap-2.5 rounded-full p-1.5`}
        style={{
          backgroundColor: theme === "light" ? lightSelectedBackgroundColor : darkUnselectedBackgroundColor,
        }}
        onClick={() => setTheme("light")}
      >
        <LuSunMedium
          size={size}
          style={{
            color: theme === "light" ? lightSelectedColor : darkUnselectedColor,
          }}
        />
      </div>
      <div
        className={`relative flex items-start justify-start gap-2.5 rounded-full p-1.5`}
        style={{
          backgroundColor: theme === "dark" ? darkSelectedBackgroundColor : theme === "system" ? darkUnselectedBackgroundColor : lightUnselectedBackgroundColor,
        }}
        onClick={() => setTheme("dark")}
      >
        <FiMoon
          size={size}
          style={{
            color: theme === "dark" ? darkSelectedColor : theme === "system" ? darkUnselectedColor : lightUnselectedColor,
          }}
        />
      </div>
      <div
        className={`relative flex items-start justify-start gap-2.5 rounded-full p-1.5`}
        style={{
          backgroundColor: theme === "system" ? darkSelectedBackgroundColor : theme === "dark" ? darkUnselectedBackgroundColor : lightUnselectedBackgroundColor,
        }}
        onClick={() => setTheme("system")}
      >
        <LuLaptop
          size={size}
          style={{
            color: theme === "system" ? darkSelectedColor : theme === "dark" ? darkUnselectedColor : lightUnselectedColor,
          }}
        />
      </div>
    </div>
  );
};

export default ThemeChanger;
