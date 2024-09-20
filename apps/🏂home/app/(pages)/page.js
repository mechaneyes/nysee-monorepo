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
      <div className="mb-20 md:mb-28 px-5">
        <h1 className="mb-5 pt-7 px-0 md:px-3 text-6xl lg:text-6xl leading-tight">
          NYSee.nyc
        </h1>
        <div className="mb-4 px-0 md:px-3">
          <Link href="/radar" className="grid grid-rows-2 gap-0">
            <h3 className="text-2xl">NYSee Radar</h3>
            <h4 className="text-xl">Art pulse, curated</h4>
          </Link>
        </div>
        <div className="mb-4 px-0 md:px-3">
          <Link href="/lowdown" className="grid grid-rows-2 gap-0">
            <h3 className="text-2xl">NYSee Lowdown</h3>
            <h4 className="text-xl">Beyond the frame</h4>
          </Link>
        </div>
        <div className="mb-4 px-0 md:px-3">
          <Link href="/ray-weitzenberg" className="grid grid-rows-2 gap-0">
            <h3 className="text-2xl">Ray Weitzenberg</h3>
            <h4 className="text-xl">Let&apos;s dance</h4>
          </Link>
        </div>
        <div className="mb-4 px-0 md:px-3">
          <Link href="/werk" className="grid grid-rows-2 gap-0">
            <h3 className="text-2xl">Werk</h3>
            <h4 className="text-xl">Conjuring experience</h4>
          </Link>
        </div>
        <div className="mb-4 px-0 md:px-3">
          <Link href="/lowdown/about" className="grid grid-rows-2 gap-0">
            <h3 className="text-2xl">About</h3>
            <h4 className="text-xl">WTF?!</h4>
          </Link>
        </div>
      </div>
      <Image
        className="fullscreen-image fullscreen-image--eruno"
        src="/images/deepmind-eruno-1.0.0.jpg"
        alt="NYSee.nyc"
        width={2880}
        height={1620}
      />
      {/* {radarElement} */}
    </div>
  );
}
