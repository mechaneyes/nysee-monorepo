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
        <h1 className="mb-5 pt-10 px-0 md:px-3 text-5xl lg:text-6xl leading-tight">
          NYSee Radar
        </h1>

        <p className="text-xl text-black w-fit md:w-4/5 mt-2 px-0 md:px-3">
          A hand picked selection of NYC gallery shows and their openings.
        </p>

        {/* <p className="text-xl text-black w-fit md:w-3/5 mt-2 px-0 md:px-3">
          <div>
            Bluesky:{" "}
            <a href="https://bsky.app/profile/nysee.bsky.social">
              @nysee.bsky.social
            </a>
          </div>
          <div>
            Mastodon:{" "}
            <a href="https://bsky.app/profile/nysee.bsky.social">
              @nysee@hypermute.com
            </a>
          </div>
        </p> */}

        <div className="flex gap-8 md:gap-20 w-fit md:w-3/5 mt-3 px-0 md:px-3">
          <div className="flex-none">
            <a href="/lowdown">
              <h3 className="text-2xl">NYSee Lowdown</h3>
            </a>
            <p className="text-xl text-black">Beyond the frame</p>
          </div>
          <div className="flex-none">
            <a href="/">
              <h3 className="text-2xl">NYSee</h3>
            </a>
            <p className="text-xl text-black">Creative nexus</p>
          </div>
        </div>

        <Image
          className="juli-bg-image"
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
