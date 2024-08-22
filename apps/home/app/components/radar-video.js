"use client";

import React, { useEffect, useRef } from "react";

const RadarVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const isIOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );

    //   if (isIOS || isSafari) {
    //     video.src = "/images/radarAlpha4_ios.mov";
    //     video.type = "video/quicktime";
    //   } else {
        video.src = "/images/radarAlpha4.webm";
        video.type = "video/webm";
    //   }
    }
  }, []);

  return (
    <div className="project project--radar">
      <video
        ref={videoRef}
        className="video--radar-antenna"
        autoPlay
        loop
        muted
        width="340"
        height="440"
      />
    </div>
  );
};

export default RadarVideo;
