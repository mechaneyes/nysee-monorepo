/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/dxrLCFc1vMs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useState, useEffect } from "react";
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Categories from "./categories";

export default function PostHero({
  title,
  categories,
  featuredImage,
  date,
  author,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white">
      {isMobile ? (
        <main className="hero hero--post mb-24 pt-5 px-5">
          {featuredImage && (
            <CoverImage title={title} coverImage={featuredImage} />
          )}
          <div className="hero__copy mt-4">
            <div className="hero__copy__inner">
              <h1 className="text-gray-900 pb-4">{title}</h1>
              <p className="post__meta text-gray-500">
                <Date dateString={date} /> &middot;{" "}
                <Categories categories={categories} />
              </p>
            </div>
          </div>
        </main>
      ) : (
        <main className="hero hero--post hero--split">
          <div className="hero__copy">
            <div className="hero__copy__inner">
              <h1 className="text-gray-900">{title}</h1>
              <p className="post__meta text-gray-500">
                <Date dateString={date} /> &middot;{" "}
                <Categories categories={categories} />
              </p>
            </div>
          </div>
          {featuredImage && (
            <CoverImage title={title} coverImage={featuredImage} />
          )}
        </main>
      )}
    </div>
  );
}
