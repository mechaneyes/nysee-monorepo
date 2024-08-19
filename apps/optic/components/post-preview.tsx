import Link from "next/link";
import parse from "html-react-parser";

import Date from "./date";
import CoverImage from "./cover-image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className="post post--preview">
      <div className="mb-3">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="post__title post__title--preview text-3xl">
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h3>
      <p className="post__meta text-gray-500">
        <Date dateString={date} />
      </p>
      <div className="post__excerpt">{parse(excerpt)}</div>
    </div>
  );
}
