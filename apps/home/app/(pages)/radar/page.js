import Navigation from "@/components/nav";

export const metadata = {
  title: "NYSee Radar",
  openGraph: {
    images: [
      {
        url: "https://nysee.nyc/images/og-juli-kosolapova.jpg",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="project project--radar">
        <div className="hero">
          <h1 style={{ padding: "0.5rem 0 1rem" }}>Radar</h1>{" "}
        </div>
        <div className="project__iteration">
          <video autoPlay loop muted src="/images/radar02_2.mp4"></video>
        </div>
      </div>
    </>
  );
}
