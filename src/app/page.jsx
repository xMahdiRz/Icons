"use client";
import { useState, useEffect } from "react";
import iconsData from "./icons.json";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";

const Home = () => {
  const [icons, setIcons] = useState("");
  const [theme, setTheme] = useState("dark");
  const [perLine, setPerLine] = useState(10);
  const [space, setSpace] = useState(3);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [search, setSearch] = useState("");
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [filteredIcons, setFilteredIcons] = useState(iconsData);

  const handleGenerateUrl = () => {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000/api/icons";
    const url = `${baseUrl}?i=${icons}&theme=${theme}&perLine=${perLine}&space=${space}`;
    setGeneratedUrl(url);
  };

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

  const handleIconClick = (icon) => {
    if (selectedIcons.includes(icon)) {
      setSelectedIcons(selectedIcons.filter((selected) => selected !== icon));
    } else {
      setSelectedIcons([...selectedIcons, icon]);
    }
  };

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

  return (
    <div>
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
          <div className="flex w-full flex-wrap gap-2">
            {filteredIcons.map((icon) => (
              <div
                key={icon}
                className={`ease flex min-w-24 max-w-24 cursor-pointer flex-col items-center justify-center rounded border px-1 py-3 transition duration-200 ${
                  selectedIcons.includes(icon) ? "bg-slate-200" : "bg-white"
                }`}
                onClick={() => handleIconClick(icon)}
              >
                <img
                  src={`/icons/${icon}-${theme}.svg`}
                  alt={icon}
                  className="mb-2 h-8 w-8"
                />
                <span className="break-all text-xs">{icon}</span>
              </div>
            ))}
          </div>
        </CardContent>
        {generatedUrl && (
          <CardContent className="mt-4 rounded-md border border-gray-300 bg-gray-100 p-4">
            <p>Generated URL:</p>
            <a
              href={generatedUrl}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {generatedUrl}
            </a>
          </CardContent>
        )}
      </Card>
      <div className="fixed bottom-3 flex w-full items-center justify-center px-24">
        <div className="border-px container fixed bottom-[10px] z-10 flex h-min min-w-[calc(100vw-160px)] max-w-[calc(100vw-160px)] flex-wrap items-center justify-center gap-3 self-stretch rounded-lg border border-solid border-slate-700 bg-slate-400/50 bg-white p-6 backdrop-blur backdrop-filter">
          <div className="">
            <label className="block text-sm font-medium text-gray-900">
              Search Icons:
            </label>
            <Input
              placeholder="Search icons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=""
            />
          </div>

          <div className="">
            <label className="block text-sm font-medium text-gray-900">
              Icons per line:
            </label>
            <Input
              type="number"
              value={perLine}
              onChange={(e) => setPerLine(e.target.value)}
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-900">
              Space between icons:
            </label>
            <Input
              type="number"
              value={space}
              onChange={(e) => setSpace(e.target.value)}
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-gray-900">
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
          <div className="">
            <label className="block text-sm font-medium text-gray-900">
              Click To Copy URL:
            </label>
            <Button
              onClick={() => navigator.clipboard.writeText(generateUrl())}
              className="w-full max-w-60 bg-blue-500 text-white"
            >
              Copy URL to Clipboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
