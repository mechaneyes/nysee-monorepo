"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RadarVideo from "../components/radar-video";
import RadarSequence from "../components/radar-sequence";

export default function Home() {
  const [radarElement, setRadarElement] = useState(null);

  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isIOS || isSafari) {
      setRadarElement(<RadarSequence speed={0.9} />);
    } else {
      setRadarElement(<RadarVideo />);
    }
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__header">
        <h1 style={{ padding: "1rem 0 0", color: "black" }}>NYSee.nyc</h1>
        <div className="mb-4">
          <Link href="/ray-weitzenberg" className="grid grid-rows-2 gap-0">
            <h3 className="text-2xl">Ray Weitzenberg</h3>
            <h4 className="text-xl">Let&apos;s dance: @mechaneyes</h4>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="/lowdown" className="grid grid-rows-2 gap-0">
            <h3 className="text-2xl">NYSee Lowdown</h3>
            <h4 className="text-xl">Beyond the frame</h4>
          </Link>
        </div>
        <div className="grid grid-rows-2 gap-0">
          <h3 className="text-2xl">NYSee Radar</h3>
          <h4 className="text-xl">Art pulse, curated</h4>
        </div>
      </div>
      <Image
        className="fullscreen-image"
        src="/images/radar-juli-kosolapova_2880px.jpg"
        alt="NYSee.nyc"
        width={2880}
        height={1913}
      />
      {radarElement}
    </div>
  );
}
