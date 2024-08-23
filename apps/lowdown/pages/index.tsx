import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import HeroSplit from "../components/hero-split";
import Masthead from "../components/masthead";
import { getAllPostsForHome } from "../lib/api";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

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
    <Container>
      <Masthead />
      {heroPost && isDesktopOrLaptop ? (
        <HeroSplit
          title={heroPost.title}
          coverImage={heroPost.featuredImage}
          date={heroPost.date}
          author={undefined}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      ) : (
        heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={undefined}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
