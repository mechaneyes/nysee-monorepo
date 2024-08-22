import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import "@/styles/styles.scss";

export const metadata = {
  title: "NYSee | Ray Weitzenberg",
  description: "Art + Tech + Riso",
  url: "https://nysee.nyc/",
  openGraph: {
    url: "https://nysee.nyc/images/og-juli-kosolapova.jpg",
  },
  robots: "index, follow",
  keywords:
    "Ray Weitzenberg, photographer, artist, technologist, new yorker, photography, design, risography, riso, NYSee, NYC, Sacto, Sacramento, ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
