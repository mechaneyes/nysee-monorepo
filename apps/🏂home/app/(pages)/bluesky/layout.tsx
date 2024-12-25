export const metadata = {
  title: "🔗 NYSee Links",
  description: "A link blog via @nysee.nyc",
  url: "https://nysee.nyc/bsky",
  openGraph: {
    url: "https://nysee.nyc/bsky",
    images: [
      {
        url: "https://nysee.nyc/images/og-link-blog.png",
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
