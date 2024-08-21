import Link from "next/link";

export const metadata = {
  title: "NYSee",
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
    <div className="homepage">
      <div className="homepage__header">
        <h1 style={{ padding: "1rem 0 0", color: "black" }}>NYSee.nyc</h1>
        <div className="homepage__header__subheader">
          <Link href="/ray-weitzenberg">
            <h3>Ray Weitzenberg</h3>
            <h4>Let&apos;s Dance: @mechaneyes</h4>
          </Link>
        </div>
        <div className="homepage__header__subheader homepage__header__subheader--radar">
          <Link href="/optic">
            <h3>NYSee Lowdown</h3>
          </Link>
        </div>
      </div>
      <div className="project project--radar">
        <video
          className="fullscreen-video"
          autoPlay
          loop
          muted
          src="/images/radar02_2.mp4"
        ></video>
      </div>
    </div>
  );
}
