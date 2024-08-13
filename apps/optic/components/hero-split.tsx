/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/dxrLCFc1vMs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroSplit({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="min-h-screen bg-white">
      <main className="hero hero--split">
        <div className="hero__copy">
          <div className="hero__copy__inner">
            <p className="text-gray-500">
              <Date dateString={date} />
            </p>
            <h1 className="text-4xl font-bold text-gray-900">
              <Link
                href={`/posts/${slug}`}
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              ></Link>
            </h1>
            <p
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
            <div className="flex items-center space-x-4">
              <Avatar author={author} />
            </div>
          </div>
        </div>
        <div className="hero__image">
          {coverImage && (
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          )}
        </div>
      </main>
    </div>
  );
}