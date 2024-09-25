"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ImageFader = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);

  const duration = (interval * 0.95) / 1000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsForward(true);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div
      className="aspect-video relative w-3/5 mx-auto"
      style={{ backgroundColor: "#753400", width: "80%", maxWidth: "1200px", aspectRatio: "16 / 9" }}
    >
      <AnimatePresence initial={false} custom={isForward}>
        <motion.div
          key={currentIndex}
          custom={isForward}
          variants={{
            enter: () => ({
              opacity: 0,
            }),
            center: {
              opacity: 1,
              zIndex: 1,
            },
            exit: () => ({
              opacity: 0,
              zIndex: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: duration },
          }}
          className="absolute w-full h-full inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            width={1476}
            height={830}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageFader;
