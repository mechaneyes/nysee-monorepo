import { useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import ContainerHome from "../components/container-home";
import HomeStories from "../components/home-stories";
import HeroRadarAnimation from "../components/hero-radar-animation";
import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges;

  return (
    <ContainerHome>
      <section className="hero hero--home hero--radar-animation">
        <div className="mb-20 md:mb-28 px-5">
          <div className="hero__content">
            <h1 className="mb-3 pt-7 px-0 md:px-3 text-6xl lg:text-6xl leading-tight">
              NYSee Radar
            </h1>

            <p className="text-xl text-black w-fit md:w-4/5 mt-2 px-0 md:px-3">
              A hand picked selection art in NYC.
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

            <div className="w-fit md:w-3/5 mt-3 px-0 md:px-3">
              <a href="/lowdown" className="grid grid-rows-2 gap-0 mb-4">
                <h3 className="text-2xl">NYSee Lowdown</h3>
                <h4 className="text-xl">Beyond the frame</h4>
              </a>

              <a href="/" className="grid grid-rows-2 gap-0">
                <h3 className="text-2xl">NYSee</h3>
                <h4 className="text-xl">Creative nexus</h4>
              </a>
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
        </div>
        <div className="hero__gradient w-screen h-80" />
      </section>
      {morePosts.length > 0 && <HomeStories posts={morePosts} />}
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
