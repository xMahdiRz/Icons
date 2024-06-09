import { NextResponse } from "next/server";
import { headers } from "next/headers";

import iconsData from "../../../../icons.json";

// Function to map short names to full names
const mapShortNames = (icons) => {
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

  return icons.map((icon) => shortNames[icon] || icon);
};

export async function GET(req) {
  const headersList = headers();
  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const i = searchParams.get("i");
  const theme = searchParams.get("theme");
  const perLine = searchParams.get("perLine");
  const space = searchParams.get("space");

  let icons;
  if (i === "all") {
    icons = iconsData;
  } else {
    // Split the 'i' query parameter to get the array of icons
    icons = i ? i.split(",") : ["NextJS"];
    // Replace shortnames with full names
    icons = mapShortNames(icons);
  }

  const selectedTheme = theme || "dark"; // default to 'dark' if theme is not provided
  const iconsPerLine = parseInt(perLine, 10) || 10; // default to 10 if perLine is not provided
  const spaceBetweenIcons = parseInt(space, 10) || 3; // default to 3 if space is not provided

  // Function to fetch icons
  const fetchIcons = async (iconNames, theme) => {
    const baseUrl = "https://icons-alpha.vercel.app"; // Replace with your server URL in production
    const iconBaseUrl = `${baseUrl}/icons`;

    return await Promise.all(
      iconNames.map(async (icon) => {
        try {
          let iconPath = `${iconBaseUrl}/${icon}-${theme}.svg`;
          let response = await fetch(iconPath);
          // if (!response.ok) {
          //   // If the requested variant doesn't exist, try the default variant (dark)
          //   iconPath = `${iconBaseUrl}/${icon}-dark.svg`;
          //   response = await fetch(iconPath);
          //   if (!response.ok) {
          //     // If the default variant also doesn't exist, try the icon without any theme suffix
          //     iconPath = `${iconBaseUrl}/${icon}.svg`;
          //     response = await fetch(iconPath);
          if (!response.ok) {
            // If the icon without any theme suffix also doesn't exist, return an empty string
            return await fetch(`${baseUrl}/error.svg`).then((response) =>
              response.text(),
            );
          }
          //   }
          // }
          return await response.text();
        } catch (error) {
          console.error(error);
          // Return a placeholder error icon here
          return await fetch(`${baseUrl}/error.svg`).then((response) =>
            response.text(),
          );
        }
      }),
    );
  };

  try {
    const svgIcons = await fetchIcons(icons, selectedTheme);

    const iconWidth = 50; // Assuming each icon is 50px wide
    const iconHeight = 50; // Assuming each icon is 50px high

    const numRows = Math.ceil(icons.length / iconsPerLine);
    const svgWidth =
      iconsPerLine * (iconWidth + spaceBetweenIcons) - spaceBetweenIcons;
    const svgHeight =
      numRows * (iconHeight + spaceBetweenIcons) - spaceBetweenIcons;

    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" fill="none">`;

    svgIcons.forEach((iconSvg, index) => {
      const row = Math.floor(index / iconsPerLine);
      const col = index % iconsPerLine;
      const x = col * (iconWidth + spaceBetweenIcons);
      const y = row * (iconHeight + spaceBetweenIcons);
      svgContent += `<g transform="translate(${x}, ${y})">${iconSvg}</g>`;
    });

    svgContent += `</svg>`;

    return new NextResponse(svgContent, {
      status: 200,
      statusText: "OK",
      headers: { "Content-Type": "image/svg+xml" },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
