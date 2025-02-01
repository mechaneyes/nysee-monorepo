import Head from "next/head";

export const metadata = {
  title: "Werk | Ray Weitzenberg | NYSee",
  description: "'Always be Creating' —Glengarray Glen Ross",
  url: "https://nysee.nyc/werk",
  openGraph: {
    url: "https://nysee.nyc/werk",
    images: [
      {
        url: "https://nysee.nyc/images/og-nysee.png",
      },
    ],
  },
  robots: "index, follow",
  keywords:
    "Ray Weitzenberg, photographer, artist, technologist, new yorker, photography, design, risography, riso, NYSee, NYC, Sacto, Sacramento, ",
};

export const viewport = {
  themeColor: "rgb(15 23 42 / 0.9)",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <body className="bg-namjunepaik-1-light">
        <div className="bg-namjunepaik-1-light min-h-screen">{children}</div>
      </body>
    </html>
  );
}

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return <div className="bg-namjunepaik-1-light min-h-screen">{children}</div>;
// }
