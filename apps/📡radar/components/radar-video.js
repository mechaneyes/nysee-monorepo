"use client";

import React, { useEffect, useRef } from "react";

const RadarVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.src = "/images/radarAlpha4.webm";
    video.type = "video/webm";
  }, []);

  return (
    <video
      ref={videoRef}
      className="video--radar-antenna"
      autoPlay
      loop
      muted
      width="340"
      height="440"
    />
  );
};

export default RadarVideo;
