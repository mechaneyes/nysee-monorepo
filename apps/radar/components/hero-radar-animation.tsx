import { useState, useEffect } from "react";
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

  return <> {radarElement} </>;
}
