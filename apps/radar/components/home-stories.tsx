import { useEffect, useState } from "react";
import HomePost from "./home-post";
import { getChapterTextPruned } from "./get-reproduction";

export default function HomeStories({ posts }) {
  const [isReverse, setIsReverse] = useState(false);
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
    setIsReverse(true);
  }, []);

  useEffect(() => {
    const text = getChapterTextPruned();
    setMechanicalText(text);
  }, []);

  return (
    <section className="home__stories pt-8 md:pt-28 px-5 max-w-[1280px] mx-auto">
      {posts.map(({ node }, index) => {
        const titleCharacter = node.title.charAt(0);
        const imagePath = getImagePath(titleCharacter);

        return (
          <HomePost
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            mechanicalCharacter={titleCharacter}
            mechanicalImage={imagePath}
            slug={node.slug}
            excerpt={node.excerpt}
            reverse={isReverse && index % 2 !== 1}
          />
        );
      })}
    </section>
  );
}
