"use client";
import { useSearchParams } from "next/navigation";
import IconsShowcase from "@/components/IconsShowcase";

const Icon = () => {
  const searchParams = useSearchParams();
  const i = searchParams.get("i");
  const theme = searchParams.get("theme");
  const perLine = searchParams.get("perLine");
  const space = searchParams.get("space");

  // Split the 'i' query parameter to get the array of icons
  let icons = i ? i.split(",") : ["NextJS"];

  // Map shortnames to full names
  const shortNames = {
    js: "javascript",
    ts: "typescript",
    py: "python",
    tailwind: "tailwindcss",
    vue: "vuejs",
    nuxt: "nuxtjs",
    go: "golang",
    cf: "cloudflare",
    wasm: "webassembly",
    postgres: "postgresql",
    k8s: "kubernetes",
    next: "nextjs",
    mongo: "mongodb",
    md: "markdown",
    ps: "photoshop",
    ai: "illustrator",
    pr: "premiere",
    ae: "aftereffects",
    scss: "sass",
    sc: "scala",
    net: "dotnet",
    gatsbyjs: "gatsby",
    gql: "graphql",
    vlang: "v",
    amazonwebservices: "aws",
    bots: "discordbots",
    express: "expressjs",
    googlecloud: "gcp",
    mui: "materialui",
    windi: "windicss",
    unreal: "unrealengine",
    nest: "nestjs",
    ktorio: "ktor",
    pwsh: "powershell",
    au: "audition",
    rollup: "rollupjs",
    rxjs: "reactivex",
    rxjava: "reactivex",
    ghactions: "githubactions",
    sklearn: "scikitlearn",
  };

  // Replace shortnames with full names
  icons = icons.map((icon) => shortNames[icon] || icon);
  console.log(icons);
  const selectedTheme = theme || "dark"; // default to 'Dark' if theme is not provided
  const iconsPerLine = parseInt(perLine, 10) || 10; // default to 10 if perLine is not provided
  const spaceBetweenIcons = parseInt(space, 10) || 3; // default to 3 if space is not provided

  return (
    <IconsShowcase
      icons={icons}
      theme={selectedTheme}
      perLine={iconsPerLine}
      space={spaceBetweenIcons}
    />
  );
};

export default Icon;
