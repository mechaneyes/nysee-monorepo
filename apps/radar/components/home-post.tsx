"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";

import Date from "./date";
import HomePostImage from "./home-post-image";

export default function HomePost({
  title,
  coverImage,
  date,
  mechanicalCharacter,
  mechanicalImage,
  excerpt,
  slug,
  reverse,
}) {

  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrLaptop(window.innerWidth >= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`flex flex-col-reverse md:flex-row ${reverse ? "md:flex-row-reverse" : ""} gap-2 md:gap-10 relative pb-20 pt-8`}
    >
      <div className="relative w-full md:w-7/12 pt-32 flex-col justify-start items-start inline-flex">
        <div className="top-5 absolute opacity-10 text-white text-[240px] font-bold font-['Gilroy'] leading-[240px]">
          <Image
            src={mechanicalImage}
            alt={mechanicalCharacter}
            width={240}
            height={240}
          />
        </div>

        <div className="post__content md:pl-32">
          <div className="relative">
            <div className="left-[96px] top-0 absolute text-[#fbd784] text-lg font-normal uppercase">
              <Date dateString={date} />
            </div>
            <div className="w-[72px] h-0.5 left-0 top-[12px] absolute bg-[#fbd784]" />
          </div>
          <Link href={`/posts/${slug}`}>
            <h2 className="pt-10 text-white text-4xl font-semibold overflow-hidden break-words">
              {title}
            </h2>
          </Link>
          <div className="w-full md:w-4/5 pt-4 text-white text-lg">{parse(excerpt)}</div>
          <div className="h-[22px] relative">
            <Link href={`/posts/${slug}`}>
              <h4 className="left-0 top-0 absolute text-[#fbd784] text-lg font-normal">
                read more {reverse ? "→" : "←"}
              </h4>
            </Link>
            <div className="w-4 h-6 left-[103px] top-[19px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-5/12">
        {coverImage && (
          <HomePostImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
    </div>
  );
}
