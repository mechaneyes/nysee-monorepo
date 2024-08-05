import { Analytics } from "@vercel/analytics/react";
import "@/app/styles/styles.scss";

export const metadata = {
  title: "Scopus Ex Machina | NYSee.nyc",
  description: "Presenting Scopus Ex Machina",
  url: "https://nysee.nyc/",
  type: "website",
  images: "https://nysee.nyc/images/og-presentation.png",
  openGraph: {
    images: "https://nysee.nyc/images/og-presentation.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mechaneyes",
    title: "Present Ex Machina",
    description: "Presenting Scopus Ex Machina",
    image: "https://nysee.nyc/images/og-presentation.png",
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
