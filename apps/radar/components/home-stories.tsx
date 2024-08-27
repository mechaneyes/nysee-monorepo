import { useEffect, useState } from "react";
import HomePost from "./home-post";
import { getChapterTextPruned } from "./get-reproduction";

export default function HomeStories({ posts }) {
  const [isClient, setIsClient] = useState(false);
  const [mechanicalText, setMechanicalText] = useState("");

  const getImagePath = (character) => {
    const basePath = "/radar/images/whirligigCharacters/";
    if (character === character.toUpperCase()) {
      console.log("upper:", character.toLowerCase());
      return `${basePath}caps/${character.toLowerCase()}.png`;
    } else {
      console.log("lower:", character);
      return `${basePath}lower/${character.toLowerCase()}.png`;
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const text = getChapterTextPruned();
    setMechanicalText(text);
  }, []);

  return (
    <section className="home__stories pt-8 px-5 max-w-[1400px] mx-auto">
      {mechanicalText &&
        posts.map(({ node }, index) => {
          const mechanicalCharacter = mechanicalText.charAt(index);
          const imagePath = getImagePath(mechanicalCharacter);

          return (
            <HomePost
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              mechanicalCharacter={mechanicalCharacter}
              mechanicalImage={imagePath}
              slug={node.slug}
              excerpt={node.excerpt}
              reverse={isClient && index % 2 === 1}
            />
          );
        })}
    </section>
  );
}
