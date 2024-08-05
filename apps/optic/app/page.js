"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const opticURL = process.env.NEXT_PUBLIC_OPTIC_DOMAIN;

  return (
    <div className="homepage">
      <div className="homepage__header">
        <h1>NYSee.nyc</h1>

        <div className="homepage__header__subheader">
          <h2>Ray Weitzenberg</h2>
          <Link href="/ray-weitzenberg">
            <h4>Reach Out. Let&apos;s Dance: @mechaneyes</h4>
          </Link>

          <p>
            NYSee collects the projects I&apos;ve produced at{" "}
            <Link className="link-colored" href="https://risolab.sva.edu/">
              RisoLAB
            </Link>{" "}
            this summer of 2024.
          </p>
        </div>
      </div>

      <article className="project">
        <Image
          src={`${opticURL}/images/algoeye-cover-poster.jpg`}
          width={1920}
          height={1440}
          className="project__img"
          alt="Algoeye poster and cover studies"
        />
        <h2>Algoeye</h2>
        <div className="project__description">
          <p className="project__date">2024.07.27</p>
          <p>
            Main project, rebranded as Algoeye. Things have shifted from a heavy
            emphasis on surveillance to broader digital civil liberties, privacy
            and personal operational security. I want to give people the
            information and tools to keep themselves safe in our collective
            sprint toward, or toward averting, a total fascist takeover.
          </p>
          <p>
            Got bogged down in the research phase of it, so unfortunately this
            is the first output that&apos;s actually been committed to paper.
          </p>
          <p>
            Above are studies for the cover and a poster. I&apos;m happy with
            both versions of the poster, the difference being that there&apos;s
            a 2nd layer of orange printed on the more saturated version.
          </p>
          <p>
            Next week taking another step back and gonna focus on honing the
            poster as well as printing a flyer to announce and link to the
            project.
          </p>
        </div>
      </article>

      <article className="project">
        <Image
          src={`${opticURL}/images/nysee-qrCode.jpg`}
          width={768}
          height={768}
          className="project__img project__img--nysee-qrCode"
          alt="qr code for NYSee.nyc"
        />
        <h2>QR code for NYSee.nyc</h2>
        <div className="project__description project__description--no-date">
          <p>Tell your friends. Tell your loved ones.</p>
        </div>
      </article>
      <article className="project">
        <Link href="/scopus-ex-presentation">
          <Image
            src={`${opticURL}/images/scopus-ex-machina-presentation-cover.png`}
            width={1920}
            height={1080}
            className="project__img project__img--sem"
            alt="Scopus Ex Machina Presentation Cover"
          />
          <h2>Scopus Ex Machina: Initial Ideas Presentation</h2>
        </Link>
        <div className="project__description">
          <p className="project__date">2024.07.01</p>
          <p>
            Scopus Ex Machina is what I&apos;ve settled on for my final project.
          </p>
          <p>
            I presented my initial thoughts on the project to the class via this
            slide deck.
          </p>
        </div>
      </article>

      <article className="project">
        <Link href="/whirligrid">
          <Image
            src={`${opticURL}/images/whirligrid-01.jpg`}
            width={1920}
            height={1440}
            className="project__img"
            alt="Whirligig zine printed"
          />
          <h2>One Page Zine: Whirligrid</h2>
        </Link>
        <div className="project__description">
          <p className="project__date">2024.06.28</p>
          <p>Got the first one page zine out the door.</p>
          <p>
            It&apos;s printed on a single 11x17&quot; sheet of paper, then cut
            and folded to produce 6 pages + front and back cover. The final
            dimensions are very pocketable, so it&apos;s very easy to carry out
            and gift to people.
          </p>
        </div>
      </article>

      <article className="project">
        <Link href="/no-ordinary-duotone">
          <Image
            src={`${opticURL}/images/no-ordinary-duotone-001-1.1.0.jpg`}
            width={1920}
            height={1458}
            className="project__img"
            alt="No Ordinary Duotone printed image"
          />
          <h2>No Ordinary Duotone</h2>
        </Link>
        <div className="project__description">
          <p className="project__date">2024.06.25</p>
          <p>
            For this first duotone project, I used a photo I shot at the sorely
            missed No Ordinary Monkey party, which that night was a !!! after
            party. Many moons ago ... September 16, 2005.
          </p>
        </div>
      </article>

      <article className="project">
        <Link href="/gossamer">
          <Image
            src={`${opticURL}/images/gossamer-poster-2.jpg`}
            width={1245}
            height={1920}
            className="project__img project__img--gossamer"
            alt="Gossamer Poster 3.6.2"
          />
          <h2>One Page Zine: Gossamer</h2>
        </Link>
        <div className="project__description">
          <p className="project__date">2024.06.21</p>
          <p>
            Gossamer was intended to be my first single page zine. It was also
            the first project I printed outside of class time.
          </p>
          <p>
            I got some tests of the poster to print nicely, but when it came
            into printing the zine itself, things became impossibly difficult.
          </p>
        </div>
      </article>
    </div>
  );
}
