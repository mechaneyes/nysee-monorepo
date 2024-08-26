import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import RadarVideo from "./radar-video";
import RadarSequence from "./radar-sequence";

export default function HeroRadarAnimation() {
  const [radarElement, setRadarElement] = useState<JSX.Element | null>(null);

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
    <section className="hero--radar-animation mb-8">
      <div className="mb-20 md:mb-28 px-5">
        <h1 className="mb-3 pt-7 px-0 md:px-3 text-6xl lg:text-6xl leading-tight">
          NYSee Radar
        </h1>

        <p className="text-xl text-black w-fit md:w-4/5 mt-2 px-0 md:px-3">
          A hand picked selection of NYC gallery shows and their openings.
        </p>

        <p className="text-xl text-black w-fit md:w-3/5 mt-2 px-0 md:px-3">
          Bluesky:{" "}
          <a href="https://bsky.app/profile/nysee.bsky.social">
            @nysee.bsky.social
          </a>
          <br />
          Mastodon:{" "}
          <a href="https://bsky.app/profile/nysee.bsky.social">
            @nysee@hypermute.com
          </a>
        </p>

        <div className="w-fit md:w-3/5 mt-3 px-0 md:px-3">
          <Link href="/lowdown" className="grid grid-rows-2 gap-0 mb-4">
            <h3 className="text-2xl">NYSee Lowdown</h3>
            <h4 className="text-xl">Beyond the frame</h4>
          </Link>

          <Link href="/" className="grid grid-rows-2 gap-0">
            <h3 className="text-2xl">NYSee</h3>
            <h4 className="text-xl">Creative nexus</h4>
          </Link>
        </div>

        <Image
          className="fullscreen-image"
          src="/radar/images/radar-juli-kosolapova_2880px.jpg"
          alt="NYSee.nyc"
          width={2880}
          height={1913}
          priority
        />
        {radarElement}
      </div>
    </section>
  );
}
