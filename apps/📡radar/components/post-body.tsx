import { useEffect, useState } from "react";
import styles from "./post-body.module.css";

export default function PostBody({ content }) {
  const [postContent, eventDate] = content;
  const formattedDate = eventDate.split("T")[0];

  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  console.log('formattedDate:', formattedDate);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrLaptop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`post__body max-w-3xl ml-[13%] ${!isDesktopOrLaptop && "px-5"}`}>
      <div
        className={`${styles.content} ${styles.gallery}`}
        dangerouslySetInnerHTML={{ __html: postContent }}
      />
    </div>
  );
}
