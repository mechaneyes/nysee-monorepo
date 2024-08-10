import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import "@/styles/styles.scss";

export const metadata = {
  title: "NYSee | Ray Weitzenberg",
  description: "Art+Tech+RisoPrinters 24SS",
  url: "https://nysee.nyc/",
  type: "website",
  images: "https://nysee.nyc/images/noOrdinaryMonkey.jpg",
  openGraph: {
    images: "https://nysee.nyc/images/og-harv-triad-1.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mechaneyes",
    title: "NYSee | Ray Weitzenberg",
    description: "Art+Tech+RisoPrinters 24SS",
    image: "https://nysee.nyc/images/og-harv-triad-1.png",
  },
  robots: "index, follow",
  keywords:
    "Ray Weitzenberg, photographer, artist, technologist, new yorker, NYSee, NYC, Sacto, Sacramento, ",
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
