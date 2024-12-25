"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <div className="homepage">
      <div className="mb-20 md:mb-28 px-5 z-20">
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
          <Link href="/ray-weitzenberg">
            <h3 className="text-2xl">Ray Weitzenberg</h3>
          </Link>
        </div>
        <div className="mb-4 px-0 md:px-3">
          <Link href="/werk" className="grid grid-rows-2 gap-0">
            <h3 className="text-2xl">Werk</h3>
            <h4 className="text-xl">Conjuring experience</h4>
          </Link>
        </div>
        <div className="mb-4 px-0 md:px-3">
          <Link href="/lowdown/about">
            <h3 className="text-2xl">About</h3>
          </Link>
        </div>
      </div>
      <div className="homepage__gradient fixed w-screen h-screen bottom-0 z-10"></div>
      <Image
        className="fullscreen-image fullscreen-image--eruno"
        src="/images/atlanticTerminalRect.jpg"
        alt="NYSee.nyc"
        width={2880}
        height={1620}
      />
    </div>
  );
}
