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
          <h2 className="pb-3 text-4xl text-gray-900 pb-2">
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h2>
          <p className="text-gray-500 pb-2">
            <Date dateString={date} />
          </p>
          <div className="flex items-center space-x-4">
            {author && <Avatar author={author} />}
          </div>
          <div
            className="text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </section>
  );
}
