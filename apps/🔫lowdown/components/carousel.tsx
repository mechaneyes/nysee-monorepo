import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
  images: string[];
}

const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const dotsVariants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -10,
    scale: 1.2,
    transition: { type: "spring", stiffness: 1000, damping: "10" },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel__container sm:px-4">
        <h3
          className="carousel__button carousel__button--left"
          onClick={handlePrevious}
        >
          👈
        </h3>
        <div className="carousel__images">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              variants={slideVariants}
              style={{ willChange: "transform, opacity" }}
            />
          </AnimatePresence>
        </div>
        <h3
          className="carousel__button carousel__button--right"
          onClick={handleNext}
        >
          👉
        </h3>
      </div>
      <div className="carousel__indicator">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`carousel__dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          >
            🤖
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;