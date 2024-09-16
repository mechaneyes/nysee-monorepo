import Image from "next/image";
import cn from "classnames";
import Link from "next/link";

export default function HeroPost({ title, coverImage, excerpt, slug }) {
  return (
    <section className="post__hero">
      <div className="mb-3 pt-5 px-5">
        {coverImage && (
          <Image
            width={2000}
            height={2500}
            quality={100}
            alt={`Cover Image for ${title}`}
            src={coverImage.node.sourceUrl}
            className={cn("shadow-small", {
              "hover:shadow-medium transition-shadow duration-200": slug,
            })}
          />
        )}
      </div>
      <div className="mb-12 px-5">
        <h1 className="mb-0 pt-4 text-5xl lg:text-6xl leading-tight">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h1>
        <div
          className="text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </section>
  );
}
