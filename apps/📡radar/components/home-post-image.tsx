import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function HomePostImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      // fill
      width='400'
      height='500'
      alt={`Cover Image for ${title}`}
      src={coverImage?.node.sourceUrl}
      className="object-cover"
      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );

  return (
    <div className="relative sm:aspect-[5/4] md:aspect-[4/5] w-full overflow-hidden">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
