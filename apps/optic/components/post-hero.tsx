/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/dxrLCFc1vMs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import parse from "html-react-parser";
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Categories from "./categories";

export default function PostHero({
  title,
  categories,
  featuredImage,
  date,
  excerpt,
  author,
}) {
  return (
    <div className="bg-white">
      <main className="hero hero--post hero--split">
        <div className="hero__copy">
          <div className="hero__copy__inner">
            <h1 className="text-gray-900">{title}</h1>
            <p className="post__meta text-gray-500">
              <Date dateString={date} /> &middot;{" "}
              <Categories categories={categories} />
            </p>

            {/* <div className="post__excerpt">{parse(excerpt)}</div> */}
            <div className="flex items-center space-x-4">
              <Avatar author={author} />
            </div>
          </div>
        </div>
        {featuredImage && (
          <CoverImage title={title} coverImage={featuredImage} />
        )}
      </main>
    </div>
  );
}
