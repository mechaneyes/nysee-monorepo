import Link from "next/link";
import Image from "next/image";
import RadarVideo from "./components/radar-video";

export const metadata = {
  title: "NYSee.nyc",
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
            <h4>Beyond the Frame</h4>
          </Link>
        </div>
      </div>
      <Image
        className="fullscreen-image"
        src="/images/radar-juli-kosolapova_2880px.jpg"
        alt="NYSee.nyc"
        width={2880}
        height={1913}
      />
      <RadarVideo />
    </div>
  );
}
