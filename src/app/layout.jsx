import Head from "next/head";
import ThemeProvider from "@/context/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = {
  title: "Icon URL Generator",
  description:
    "Generate a URL with selected icons to use in your readme or website with the Icon URL Generator.",
  url: "https://icons-alpha.vercel.app/",
  image: "https://icons-alpha.vercel.app/icons?i=nextjs",
  author: "x.mahdirz",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph (Facebook) Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:alt" content={metadata.title} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:image:alt" content={metadata.title} />
        {/* <meta name="twitter:site" content="@MahdiRezaiguia" />
        <meta name="twitter:creator" content="@MahdiRezaiguia" /> */}

        {/* Discord Meta Tags */}
        <meta name="discord:app_id" content="557711715610001428" />

        {/* Other Meta Tags */}
        <meta name="author" content={metadata.author} />
      </Head>
      <html lang="en">
        <body className="font-stapel">
          <Analytics />
          <SpeedInsights />
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </>
  );
}
