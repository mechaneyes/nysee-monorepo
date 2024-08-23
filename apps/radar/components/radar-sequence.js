"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const RadarSequence = ({ speed = 0.5, nav = false }) => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const frameCount = 75;
  const animationRef = useRef(null);
  const lastUpdateTime = useRef(0);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!lastUpdateTime.current) lastUpdateTime.current = timestamp;

      const elapsed = timestamp - lastUpdateTime.current;
      
      // Adjust this value to change the speed. Lower value = slower animation
      const frameInterval = 1000 / (60 * speed); 

      if (elapsed > frameInterval) {
        setCurrentFrame((prevFrame) => (prevFrame % frameCount) + 1);
        lastUpdateTime.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, frameCount]);

  const padFrame = (frame) => {
    return frame.toString().padStart(3, '0');
  };

  return (
    <div className={`radar-sequence ${nav && "radar-sequence--nav px-3"}`}>
      <Image
        src={`/radar/images/radarSequence/radar_${padFrame(currentFrame)}.png`}
        alt="Radar Animation"
        className="radar-antenna"
        width={340}
        height={440}
        priority
      />
    </div>
  );
};

export default RadarSequence;