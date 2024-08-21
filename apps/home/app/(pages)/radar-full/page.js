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
      <div className="project project--radar">
        <h1 style={{ padding: "1rem 0 1rem", color: "black" }}>NYSee Radar</h1>{" "}
        <video
          className="fullscreen-video"
          autoPlay
          loop
          muted
          src="/images/radar02_2.mp4"
        ></video>
      </div>
    </>
  );
}
