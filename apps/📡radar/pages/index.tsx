import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import Footer from "../components/footer";
import ContainerHome from "../components/container-home";
import EventsContainer from "../components/events-container";
import HeroRadarAnimation from "../components/hero-radar-animation";
import { getAllPostsForHome } from "../lib/api";
import { PostNode } from "@/types/types";

interface IndexProps {
  allPosts: {
    edges: PostNode[];
  };
  preview: boolean;
}

export default function Index({ allPosts: { edges } }: IndexProps) {
  const morePosts = edges;

  return (
    <ContainerHome>
      <Head>
        <title>NYSee Radar</title>
        <meta property="og:title" content="NYSee Radar" key="title" />
        <meta property="og:url" content="https://nysee.nyc/radar" />
        <meta
          property="og:image"
          content="https://nysee.nyc/images/og-radar.jpg"
        />
      </Head>
      <section className="hero hero--home hero--radar-animation overflow-hidden">
        <div className="mb-20 md:mb-28 px-5">
          <div className="hero__content">
            <h1 className="pt-7 px-0 md:px-3 text-6xl lg:text-6xl text-black leading-tight">
              NYSee Radar
            </h1>

            <p className="text-xl text-black w-fit md:w-4/5 mt-4 px-0 md:px-3">
              A hand picked selection art worth seeing in NYC
            </p>

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
                <p className="text-xl">Let&apos;s dance</p>
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
          quality={100}
          priority
        />

        <HeroRadarAnimation />

        <div className="hero__gradient" />
      </section>

      <EventsContainer allPosts={{ edges: morePosts }} />

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
