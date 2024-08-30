import Image from 'next/image'; // Ensure this import is correct
import cn from 'classnames';
import Avatar from './avatar';
import Date from './date';
import Link from 'next/link';

export default function HeroPost({
  title,
  coverImage,
  date,
  author,
  excerpt,
  slug,
}) {
  return (
    <section className="post__hero">
      <div className="mb-3 pt-5 px-5">
        {coverImage && (
          <Image
            width={2000}
            height={2500}
            alt={`Cover Image for ${title}`}
            src={coverImage.node.sourceUrl}
            className={cn("shadow-small", {
              "hover:shadow-medium transition-shadow duration-200": slug,
            })}
          />
        )}
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-8 md:mb-28 px-5">
        <h1 className="mb-0 pt-4 text-5xl lg:text-6xl leading-tight">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h1>
        <div className="mb-1 pt-5 text-lg text-gray-500">
          <Date dateString={date} />
        </div>
        <div className="flex items-center space-x-4 pt-3">
          {author && <Avatar author={author} />}
        </div>
        <div
          className="text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </section>
  );
}