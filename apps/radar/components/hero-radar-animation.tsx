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
        <h1 className="mb-5 pt-10 px-3 text-5xl lg:text-6xl leading-tight">
          NYSee Radar
        </h1>

        <p className="text-xl text-black w-3/5 mt-2 px-3">
          NYSee Radar serves you a hand picked selection of gallery shows and
          their openings in New York City.
        </p>

        <p className="text-xl text-black w-3/5 mt-2 px-3">
          The site is updated regularly, but not on a fixed schedule. So you
          don't miss the latest updates, follow{" "}
          <a href="https://bsky.app/profile/nysee.bsky.social">
            @nysee.bsky.social
          </a>{" "}
          on Bluesky, or{" "}
          <a href="https://bsky.app/profile/nysee.bsky.social">
            @nysee@hypermute.com
          </a>{" "}
          on Mastodon.
        </p>

        <div className="flex gap-12 w-3/5 mt-3 px-3">
          <div className="flex-none">
            <a href="/optic">
              <h3 className="text-2xl">NYSee</h3>
            </a>
            <p className="text-xl text-black">Creative nexus</p>
          </div>
          <div className="flex-none">
            <a href="/optic">
              <h3 className="text-2xl">NYSee Lowdown</h3>
            </a>
            <p className="text-xl text-black">Beyond the frame</p>
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
