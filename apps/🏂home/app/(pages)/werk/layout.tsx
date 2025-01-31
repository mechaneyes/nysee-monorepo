export const metadata = {
  title: "Werk | Ray Weitzenberg | NYSee",
  description: "'Always be Creating' —Glengarray Glen Ross",
  url: "https://nysee.nyc/werk",
  openGraph: {
    url: "https://nysee.nyc/werk",
    images: [
      {
        url: "https://nysee.nyc/images/og-werk.jpg",
      },
    ],
  },
  robots: "index, follow",
  keywords:
    "Ray Weitzenberg, photographer, artist, technologist, new yorker, photography, design, risography, riso, NYSee, NYC, Sacto, Sacramento, ",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-namjunepaik-1-light min-h-screen">{children}</div>;
}
