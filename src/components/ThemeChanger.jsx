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
    <div className="flex justify-start items-start gap-1 p-[3px] rounded-full border border-slate-100">
      <div
        className={`flex justify-start items-start relative gap-2.5 p-1.5 rounded-full ${
          theme === "light"
            ? `bg-[${lightSelectedBackgroundColor}]`
            : `bg-[${darkUnselectedBackgroundColor}]`
        }`}
        onClick={() => setTheme("light")}
      >
        <LuSunMedium
          size={size}
          className={
            theme === "light"
              ? `text-[${lightSelectedColor}]`
              : `text-[${darkUnselectedColor}]`
          }
        />
      </div>
      <div
        className={`flex justify-start items-start relative gap-2.5 p-1.5 rounded-full ${
          theme === "dark"
            ? `bg-[${darkSelectedBackgroundColor}]`
            : theme === "system"
            ? `bg-[${darkUnselectedBackgroundColor}]`
            : `bg-[${lightUnselectedBackgroundColor}]`
        }`}
        onClick={() => setTheme("dark")}
      >
        <FiMoon
          size={size}
          className={
            theme === "dark"
              ? `text-[${darkSelectedColor}]`
              : theme === "system"
              ? `text-[${darkUnselectedColor}]`
              : `text-[${lightUnselectedColor}]`
          }
        />
      </div>
      <div
        className={`flex justify-start items-start relative gap-2.5 p-1.5 rounded-full ${
          theme === "system"
            ? `bg-[${darkSelectedBackgroundColor}]`
            : theme === "dark"
            ? `bg-[${darkUnselectedBackgroundColor}]`
            : `bg-[${lightUnselectedBackgroundColor}]`
        }`}
        onClick={() => setTheme("system")}
      >
        <LuLaptop
          size={size}
          className={
            theme === "system"
              ? `text-[${darkSelectedColor}]`
              : theme === "dark"
              ? `text-[${darkUnselectedColor}]`
              : `text-[${lightUnselectedColor}]`
          }
        />
      </div>
    </div>
  );
};

export default ThemeChanger;
