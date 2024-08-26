import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import ContainerHome from "../components/container-home";
import HomeStories from "../components/home-stories";
import HeroRadarAnimation from "../components/hero-radar-animation";
import Header from "../components/header";
import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges;

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
    <ContainerHome>
      {/* <Header /> */}
      <HeroRadarAnimation />
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
