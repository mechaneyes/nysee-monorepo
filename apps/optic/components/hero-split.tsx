/**
 * generated by v0 by Vercel
 * @see https://v0.dev/t/dxrLCFc1vMs
 */
import Link from "next/link";
import parse from "html-react-parser";
import Date from "./date";
import CoverImage from "./cover-image";

export default function HeroSplit({ title, coverImage, date, excerpt, slug }) {
  return (
    <div className="min-h-screen bg-white">
      <main className="hero hero--split">
        <div className="hero__copy">
          <div className="hero__copy__inner">
            <h1 className="text-gray-900">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h1>
            <p className="post__date text-gray-500">
              <Date dateString={date} />
            </p>
            <div className="post__excerpt">{parse(excerpt)}</div>
          </div>
        </div>
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </main>
    </div>
  );
}
