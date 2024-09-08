import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="more-stories">
      <h2 className="px-5 pb-4 text-3xl">More Down Low</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 gap-y-20 mb-32 px-5">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
        <div className="post post--preview">
          <div className="mb-3">
            <div className="post__image--cover">
              <Link href={`/`} aria-label="Back to NYSee Radar">
                <Image
                  width={2000}
                  height={2500}
                  alt="Back to NYSee Radar"
                  src="/radar/images/mo-radar.jpg"
                  className={cn("shadow-small", {
                    "hover:shadow-medium transition-shadow duration-200":
                      "back-to-lowdown",
                  })}
                />
              </Link>
            </div>
          </div>
          <h3 className="post__title post__title--preview text-3xl">
            <Link href={`/`}>Return to Base</Link>
          </h3>
          <div className="post__excerpt">Back to NYSee Radar</div>
        </div>
      </div>
    </section>
  );
}
