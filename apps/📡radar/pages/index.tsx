import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import Footer from "../components/footer";
import ContainerHome from "../components/container-home";
import HomeStories from "../components/home-stories";
import Date from "@/components/date";
import HeroRadarAnimation from "../components/hero-radar-animation";
import { getAllPostsForHome } from "../lib/api";

interface PostNode {
  node: {
    events: {
      eventDate: string;
    };
  };
}

interface IndexProps {
  allPosts: {
    edges: PostNode[];
  };
  preview: boolean;
}

export default function Index({ allPosts: { edges }, preview }: IndexProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const morePosts = edges;
  const displayedDates = new Set<string>();

  return (
    <ContainerHome>
      <Head>
        <title>NYSee Radar</title>
        <meta property="og:title" content="NYSee Radar" key="title" />
        <meta property="og:url" content="https://nysee.nyc/radar" />
        <meta
          property="og:image"
          content="https://nysee.nyc/images/og-juli-kosolapova.jpg"
        />
      </Head>
      <section className="hero hero--home hero--radar-animation">
        <div className="mb-20 md:mb-28 px-5">
          <div className="hero__content">
            <h1 className="pt-7 px-0 md:px-3 text-6xl lg:text-6xl text-black leading-tight">
              NYSee Radar
            </h1>

            <p className="text-xl text-black w-fit md:w-4/5 mt-4 px-0 md:px-3">
              A hand picked selection art worth seeing in NYC
            </p>

            {/* <p className="hero__social text-xl text-black w-fit md:w-3/5 mt-2 px-0 md:px-3">
              Bluesky:{" "}
              <a href="https://bsky.app/profile/nysee.bsky.social">
                @nysee.bsky.social
              </a>
              <br />
              Mastodon:{" "}
              <a href="https://bsky.app/profile/nysee.bsky.social">
                @nysee@hypermute.com
              </a>
            </p> */}

            <div className="w-fit md:w-3/5 mt-5 px-0 md:px-3 text-black">
              <a href="/" className="grid grid-rows-2 gap-0 mb-4">
                <h3 className="text-2xl">NYSee</h3>
                <p className="text-xl">Creative nexus</p>
              </a>
              <a href="/lowdown" className="grid grid-rows-2 gap-0 mb-4">
                <h3 className="text-2xl">NYSee Lowdown</h3>
                <p className="text-xl">Beyond the frame</p>
              </a>
              <a
                href="/ray-weitzenberg"
                className="grid grid-rows-2 gap-0 mb-4"
              >
                <h3 className="text-2xl">Ray Weitzenberg</h3>
                <p className="text-xl">Let&apos;s dance: @mechaneyes</p>
              </a>
              <a href="/lowdown/about" className="grid grid-rows-2 gap-0 mb-4">
                <h3 className="text-2xl">About</h3>
                <p className="text-xl">WTF?!</p>
              </a>
            </div>
          </div>
        </div>

        <Image
          className="hero__fullscreen-bg"
          src="/radar/images/radar-juli-kosolapova_2880px.jpg"
          alt="NYSee.nyc"
          width={2880}
          height={1913}
          priority
        />

        <HeroRadarAnimation />

        <div className="hero__gradient" />
      </section>

      <div id="home__stories--container" className="home__stories--container md:pt-16 px-5 max-w-[1280px] mx-auto">
        <div className="home__sub-nav pb-4">
          <ul className="home__sub-nav--list inline-flex justify-center gap-4 text-xl text-white">
            <li className="home__sub-nav--item">
              <a
                href="#"
                className={`home__sub-nav--link ${
                  selectedDate === null ? "home__sub-nav--link--active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedDate(null);
                }}
              >
                All Events
              </a>
            </li>
            {morePosts.map(({ node }, index) => {
              const eventDate = new globalThis.Date(node.events.eventDate);
              const currentDate = new globalThis.Date();
            
              if (
                node.events.eventDate &&
                !displayedDates.has(node.events.eventDate) &&
                eventDate >= currentDate
              ) {
                displayedDates.add(node.events.eventDate);
                return (
                  <React.Fragment key={index}>
                    <li className="home__sub-nav--item">
                      &middot;
                    </li>
                    <li className="home__sub-nav--item">
                      <a
                        href="#"
                        className={`home__sub-nav--link ${
                          selectedDate === node.events.eventDate
                            ? "home__sub-nav--link--active"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedDate(node.events.eventDate);
                        }}
                      >
                        <Date dateString={node.events.eventDate} />
                      </a>
                    </li>
                  </React.Fragment>
                );
              }
              return null;
            })}
          </ul>
        </div>
        {morePosts.length > 0 && (
          <>
            {selectedDate ? (
              <HomeStories
                posts={morePosts.filter(
                  ({ node }) => node.events.eventDate === selectedDate
                )}
              />
            ) : (
              <HomeStories posts={morePosts} />
            )}
          </>
        )}
      </div>
      <Footer />
    </ContainerHome>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
