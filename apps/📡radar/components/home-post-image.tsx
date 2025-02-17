import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: string;
  slug: string;
}

export default function HomePostImage({ title, coverImage, slug }: Props) {
  const image = (
    <Image
      width={400}
      height={500}
      quality={100}
      alt={`Cover Image for ${title}`}
      src={coverImage}
      className="object-cover"
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
