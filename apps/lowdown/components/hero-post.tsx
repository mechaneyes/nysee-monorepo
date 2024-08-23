import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  author,
  excerpt,
  slug,
}) {
  return (
    <section>
      <div className="mb-3 pt-5 px-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 px-5">
        <div>
          <h1 className="mb-0 text-5xl lg:text-6xl leading-tight">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h1>
          <div className="mb-1 text-lg">
            <Date dateString={date} />
          </div>
          <div className="flex items-center space-x-4">
            {author && <Avatar author={author} />}
          </div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </section>
  );
}
