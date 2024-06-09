import ThemeProvider from "@/context/ThemeProvider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export const metadata = {
  title: "Mahdi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-stapel">
        <Analytics />
        <SpeedInsights />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
