"use client";
import { useState, useEffect } from "react";
import iconsData from "../../icons.json";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import ThemeChanger from "@/components/ThemeChanger";

const Home = () => {
  // Define state variables using useState hooks
  const [icons, setIcons] = useState("");
  const [theme, setTheme] = useState("dark");
  const [perLine, setPerLine] = useState(10);
  const [space, setSpace] = useState(3);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [search, setSearch] = useState("");
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [filteredIcons, setFilteredIcons] = useState(iconsData);

  // Function to handle generating URL based on user inputs
  const handleGenerateUrl = () => {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/api/icons";
    const url = `${baseUrl}?i=${icons}&theme=${theme}&perLine=${perLine}&space=${space}`;
    setGeneratedUrl(url);
  };

  // Effect hook to update filtered icons based on search input
  useEffect(() => {
    if (search === "") {
      setFilteredIcons(iconsData);
    } else {
      setFilteredIcons(
        iconsData.filter((icon) =>
          icon.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    }
  }, [search]);

  // Function to handle icon click and selection
  const handleIconClick = (icon) => {
    if (selectedIcons.includes(icon)) {
      setSelectedIcons(selectedIcons.filter((selected) => selected !== icon));
    } else {
      setSelectedIcons([...selectedIcons, icon]);
    }
  };

  // Function to generate URL with selected icons
  const generateUrl = () => {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://icons-alpha.vercel.app/icons";
    const url = new URL(baseUrl);
    url.searchParams.set("i", selectedIcons.join(","));
    url.searchParams.set("theme", theme);
    url.searchParams.set("perLine", perLine);
    url.searchParams.set("space", space);
    return url.toString();
  };

  // Return the JSX structure for the Home component
  return (
    <div>
      {/* Card component for displaying icon selection and generated URL */}
      <Card>
        <CardHeader>
          <CardTitle>
            <p className="text-2xl">
              Icon URL Generator{" "}
              <span className="text-base">(click on the icon to select)</span>
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent className="mb-28 flex flex-col gap-2">
          {/* Displaying filtered icons */}
          <div className="flex w-full flex-wrap gap-2">
            {filteredIcons.map((icon) => (
              <div
                key={icon}
                className={`ease border-px flex min-w-24 max-w-24 cursor-pointer flex-col items-center justify-center rounded border border-solid px-1 py-3 transition duration-200 ${
                  selectedIcons.includes(icon)
                    ? "bg-slate-200 dark:border-slate-500 dark:bg-slate-700"
                    : "bg-white dark:border-slate-500 dark:bg-slate-800"
                }`}
                onClick={() => handleIconClick(icon)}
              >
                <img
                  src={`/icons/${icon}-${theme}.svg`}
                  alt={icon}
                  className="mb-2 h-8 w-8"
                />
                <span className="break-all text-xs dark:text-gray-300">
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
        {/* Display generated URL if available */}
        {generatedUrl && (
          <CardContent className="mt-4 rounded-md border border-gray-300 bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="dark:text-white">Generated URL:</p>
            <a
              href={generatedUrl}
              className="text-blue-500 dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {generatedUrl}
            </a>
          </CardContent>
        )}
      </Card>
      {/* Settings and actions panel */}
      <div className="fixed bottom-3 flex w-full items-center justify-center px-24">
        <div className="container fixed bottom-[10px] z-10 flex h-min min-w-[calc(100vw-160px)] max-w-[calc(100vw-160px)] flex-wrap items-center justify-center gap-3 self-stretch rounded-lg border border-solid border-slate-700 bg-slate-400/50 p-6 backdrop-blur backdrop-filter dark:bg-slate-900/50">
          {/* Search input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Search Icons:
            </label>
            <Input
              placeholder="Search icons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* Icons per line input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Icons per line:
            </label>
            <Input
              type="number"
              value={perLine}
              onChange={(e) => setPerLine(e.target.value)}
            />
          </div>
          {/* Space between icons input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Space between icons:
            </label>
            <Input
              type="number"
              value={space}
              onChange={(e) => setSpace(e.target.value)}
            />
          </div>
          {/* Theme selection dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Theme:
            </label>
            <Select
              className="rounded-none"
              value={theme}
              onValueChange={(value) => setTheme(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="light">Light</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Button to copy generated URL */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Click To Copy URL:
            </label>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(generateUrl());
                handleGenerateUrl();
              }}
              className="w-full max-w-60 bg-blue-500 text-white dark:bg-blue-600 dark:text-white"
            >
              Copy URL to Clipboard
            </Button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Dark Mode:
            </label>
            <ThemeChanger
              size={18}
              lightSelectedColor="#3b82f6"
              darkSelectedColor="#3b82f6"
              lightSelectedBackgroundColor="#f1f5f9"
              darkSelectedBackgroundColor="#f1f5f9"
              lightUnselectedColor="#0f172a"
              darkUnselectedColor="#ffffff"
              lightUnselectedBackgroundColor="#ffffff00"
              darkUnselectedBackgroundColor="#0f172a00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
