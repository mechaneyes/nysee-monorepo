import { useEffect, useState } from "react";
import HomePost from "./home-post";

export default function HomeStories({ posts }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="home__stories pt-8 px-5 max-w-[1400px] mx-auto">
      {posts.map(({ node }, index) => (
        <HomePost
          key={node.slug}
          title={node.title}
          coverImage={node.featuredImage}
          date={node.date}
          slug={node.slug}
          excerpt={node.excerpt}
          reverse={isClient && index % 2 === 1}
        />
      ))}
    </section>
  );
}
