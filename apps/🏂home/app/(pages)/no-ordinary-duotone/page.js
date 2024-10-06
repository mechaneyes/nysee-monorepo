import Image from "next/image";
import Header from "@/components/header";

export const metadata = {
  title: "No Ordinary Duotone | NYSee",
  description: "Duotone Riso print of a photo taken at No Ordinary Monkey.",
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="project project--duotone bg-white">
        <div className="hero">
          <Image
            src="/images/no-ordinary-duotone-1.0.0.jpg"
            width={1080}
            height={1080}
            className="h-auto sm:mb-32"
            alt="Design with abstract eye on checkerboard background"
          />
          <div className="hero__copy">
            <div className="hero__copy__title">
              <h1>No Ordinary Duotone</h1>
              <h3>2005 &ndash; 2024</h3>
            </div>
            <p>
              No Ordinary Monkey was an amazing party that took place in the
              basement restaurant of a FiDi office building at 50 Broadway. Many
              mornings I left and got out onto the street just as the sun was
              coming up. Not quite anything goes, but you could get away with a
              lot.
            </p>
            <p>
              The only thing I added to the image was the duotone separation
              then printing of the 2 layers, Mint and Sky Blue. The shaddow-ish,
              rhythmic effects all happened in camera, leveraging a slightly
              longer shutter speed to collect the scene lit from behind with a
              strobe.
            </p>
            <p>
              The image above is the first I&apos;ve printed. Below are some of
              the iterations I went through, some of which will be printed in
              the coming weeks.
            </p>
            {/* <Link href="https://winterwerk.one/posts/gossamer">
            <p>Read more about Gossamer on WinterWerk</p>
          </Link> */}
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/noOrdinaryMonkey.jpg"
            width={1920}
            height={1440}
            className="project__img"
            alt="No Ordinary Duotone: The shot that started it all"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>Original</h4>
              <h5>2005.09.16</h5>
            </div>
            <p>As seen that night, the shot starting it all.</p>
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/no-ordinary-duotone-000.jpg"
            width={1920}
            height={1440}
            className="project__img"
            alt="No Ordinary Duotone: File that produced the print up top"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>PSD for Print Up Top</h4>
            </div>
            <p>The PSD file used to produce the print up top.</p>
            <p>
              <span className="italics">
                Photoshop &gt; Image &gt; Mode &gt; Duotone
              </span>{" "}
              is your friend.
            </p>
            {/* <p>
              In Photoshop, I use layer masks to approximate the color that the
              Risograph is going to produce. It&apos;s not at all accurate, but
              allows me to get a sense of how it will print.
            </p> */}
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/no-ordinary-duotone--bright-red-v-yellow.jpg"
            width={1920}
            height={1440}
            className="project__img"
            alt="No Ordinary Duotone: Bright Red v Yellow"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>Bright Red v Yellow &ndash; Solarized</h4>
            </div>
            <p>
              By pushing the duotone options in Photoshop I managed to achieve
              this faux solarization effect.
            </p>
          </div>
          <Image
            src="/images/no-ordinary-duotone-options.png"
            width={1194}
            height={938}
            className="project__img project__img--duotone-options"
            alt="Screenshot of Duotone Options in Photoshop"
          />
        </div>
        <div className="project__iteration">
          <Image
            src="/images/no-ordinary-duotone--skyBlue-v-mint.jpg"
            width={1920}
            height={1440}
            className="project__img"
            alt="No Ordinary Duotone: Sky Blue v Mint"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>Sky Blue v Mint &ndash; Solarized</h4>
            </div>
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/no-ordinary-duotone--yellow-v--bright-red.jpg"
            width={1920}
            height={1440}
            className="project__img"
            alt="No Ordinary Duotone: Yellow v Bright Red"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>Yellow v Bright Red</h4>
            </div>
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/no-ordinary-duotone--teal-v-mint----solar.jpg"
            width={1920}
            height={1440}
            className="project__img"
            alt="No Ordinary Duotone: Teal v Mint - Solarized"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>Teal v Mint &ndash; Solarized</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
