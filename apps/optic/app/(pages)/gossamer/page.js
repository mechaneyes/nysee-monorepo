import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/nav";

export const metadata = {
  title: "Gossamer | NYSee",
  description: "Gossamer is the original idea I&apos;d had for the first project.",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="project project--gossamer">
        <div className="hero">
          <Image
            src="/images/gossamer-poster-2.jpg"
            width={1245}
            height={1920}
            className="gossamer-img gossamer-img--hero gossamer-img--poster"
            alt="Gossamer Poster 3.6.2"
          />
          <div className="hero__copy">
            <div className="hero__copy__title">
              <h1>Gossamer</h1>
              <h3>2003 - 2024</h3>
            </div>
            <p>
              Gossamer is a project I started in 2003 while at Parsons. I
              completely misunderstood the assignment, which was to bring in
              something other than a negative to print from.
            </p>
            <p>
              Rifiling through my stuff, the only thing I found was a harinet
              that was holding some other photo gear. This seamed like a
              stretch, but at that point I didn&apos;t have anything to loose.
              And thus Gossamer was born.
            </p>
            <p>
              Fast forward to June 2024 and I&apos;m back at it, revived as my
              first single page zine.
            </p>
            <p>
              Unfortunately, due to the very detailed line work, the file
              isn&apos;t something that&apos;s at all reasonable to print on
              Riso. I&apos;d been creating trapping to get the colors to print
              in all their glory, but lining up the layers to accomodate this
              became a nightmare.
            </p>
            <p>
              Ultimately I had to back out, starting over from scratch. In its
              place stepped <Link href="/whirligrid">Whirligrid</Link>.
            </p>
            <Link href="https://winterwerk.one/posts/gossamer">
              <p>Read about Gossamer on WinterWerk</p>
            </Link>
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/gossamer-spread.jpg"
            width={1670}
            height={1080}
            className="gossamer-img gossamer-img--spread"
            alt="Gossamer Spread"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>The Spread</h4>
            </div>
            <p>
              As mentioned, it quckly became brutally obvious that this design
              just wasn&apos;t going to print.
            </p>
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/gossamer-poster-1.jpg"
            width={1245}
            height={1920}
            className="gossamer-img gossamer-img--poster"
            alt="Gossamer Poster"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>Early Version of the Poster</h4>
            </div>
            <p>
              This is an earlier design which I iterated upon to accomplish
              what&apos;s at the very top. Included here to offer a glimpse into
              the process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
