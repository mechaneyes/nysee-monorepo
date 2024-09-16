import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";

export default function HeroSplit({ title, coverImage, excerpt, slug }) {
  return (
    <div className="min-h-screen">
      <main className="hero hero--split">
        <div className="hero__copy">
          <div className="hero__copy__inner">
            <h1 className="text-gray-900">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h1>
            {excerpt && <div className="post__excerpt">{parse(excerpt)}</div>}
          </div>
        </div>
        {coverImage && (
          <div className="post__image--cover">
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
          </div>
        )}
      </main>
    </div>
  );
}
