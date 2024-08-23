import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="more-stories">
      <h2 className="px-5">
        More Down Low
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 gap-y-20 mb-32 px-5">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title="More NYSee Lowdown"
            coverImage={node.featuredImage}
            date={node.date}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
