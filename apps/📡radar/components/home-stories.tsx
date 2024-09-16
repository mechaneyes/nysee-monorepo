import HomePost from "./home-post";

interface ImageNode {
  node: {
    sourceUrl: string;
  };
}

interface PostNode {
  node: {
    title: string;
    slug: string;
    excerpt: string;
    featuredImage: ImageNode;
    events: {
      eventDate: string;
    };
  };
}

interface HomeStoriesProps {
  posts: PostNode[];
}

const getImagePath = (character: string) => {
  const basePath = "/radar/images/whirligigCharacters/";
  if (character === character.toUpperCase()) {
    return `${basePath}caps/${character.toLowerCase()}.png`;
  } else {
    return `${basePath}lower/${character.toLowerCase()}.png`;
  }
};

export default function HomeStories({ posts }: HomeStoriesProps) {
  const isReverse = true;

  return (
    <section className="home__stories">
      {posts.map(({ node }, index) => {
        const titleCharacter = node.title.charAt(0);
        const imagePath = getImagePath(titleCharacter);

        return (
          <HomePost
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            eventDate={node.events.eventDate}
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