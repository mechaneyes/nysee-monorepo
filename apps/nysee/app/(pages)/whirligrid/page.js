import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/nav";

export const metadata = {
  title: "Whirligrid | NYSee",
  description: "Whirligrid is what became my first zine.",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="project project--duotone">
        <div className="hero">
          <Image
            src="/images/whirligrid-01.jpg"
            width={1920}
            height={1440}
            className="project__img"
            alt="Whirligig zine printed, including a few zines cut and folded"
          />
          <div className="hero__copy">
            <div className="hero__copy__title">
              <h1>Whirligrid</h1>
              <h3>2024</h3>
            </div>
            <p>This is the one page zine I ran with for the first project.</p>
            <p>
              When it became clear <Link href="/gossamer">Gossamer</Link>{" "}
              wasn&apos;t going to print, I backed out and leveraged some
              Illustrator files I&apos;ve been wanting to use. The repeated
              shape is a single character from the{" "}
              <Link href="/whirligrid">Whirligrid</Link> font developed by{" "}
              <Link href="https://www.emigre.com/Designer/ZuzanaLicko">
                Zuzana Licko
              </Link>
              .
            </p>
            <p>
              One thing I like about working in Illustrator is that I can
              randomly apply colors to elements using the Recolor Artwork tool.
              I can load up a colorway and then just run and re-run until I find
              something I like.
            </p>
            <p>
              Once settled on the resulting composition, I paste the vector
              elements into Photoshop, breaking each color&apos;s elements into
              their own layer for arrangement, further post, then on to print.
            </p>
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/whirligrid-03.jpg"
            width={1920}
            height={1440}
            className="project__img"
            alt="Tight shot of the front cover and title. Shows the layers out of alignment"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>Aligning Layers & Trapping</h4>
            </div>
            <p>
              In order to print the text in it&apos;s full, uninturpted Violet
              color, I created trapping by punching through the lower two layers
              before printing Violet last. Alignment was a bit of a challenge,
              but I got several to print well.
            </p>
            <p>
              Directly above you can see that the final, Violet, layer was still
              a bit off. Further tweaking within the Riso allowed me to achieve
              👇
            </p>
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/whirligrid-02.jpg"
            width={1920}
            height={1254}
            className="project__img"
            alt="Tight shot of the front cover and title. Shows the layers in perfect alignment"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>Success</h4>
            </div>
            <p>
              The edges of the text are a bit saturated. This is because when in
              creating the trapping, one typically shrinks the selection
              that&apos;s cut by a couple pixels, thereby allowing the element
              to entirely fill and cover the lower, earlier layers.
            </p>
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/whirligrid-04.jpg"
            width={1920}
            height={1440}
            className="project__img"
            alt="Printed spread on a wall prior to trimming and folding"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>Printed</h4>
            </div>
            <p>Printed, and before trimming and folding.</p>
            <p>
              Pretty happy with this, though you can see from the bottom left of
              the sheet that the layers aren&apos;t quite in perfect alignment.
              I&apos;m good with this.
            </p>
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/whirligrid-07.jpg"
            width={1920}
            height={1244}
            className="project__img"
            alt="design layout which went to print. this saved from the working photoshop file"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>File Printed From</h4>
            </div>
            <p>Capture of the PSD I used to print the sheet just above.</p>
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/whirligrid-06.jpg"
            width={1920}
            height={1244}
            className="project__img"
            alt="Color study of the design layout which went to print. Here I'm using lime and cornflower blue"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>Color Study</h4>
            </div>
            <p>
              I did a number of iterations on color as well as changing the
              ordering of the layers.
            </p>
          </div>
        </div>
        <div className="project__iteration">
          <Image
            src="/images/whirligrid-08.jpg"
            width={1920}
            height={1243}
            className="project__img"
            alt="Much earlier iteration of the design. Here I'm using a lot of reds and blues"
          />
          <div className="project__description">
            <div className="project__description__title">
              <h4>Older Iteration</h4>
            </div>
            <p>
              This is a version I was experimenting with early in the process.
            </p>
            <p>
              I&apos;m not sure what I was doing that produced such saturated
              reds. This wouldn&apos;t have been reflected in the same way once
              printed, so I backed out and reworked the file into the directions
              you see above.
            </p>
            <p>Tacking this on to pull back the curtain a bit.</p>
          </div>
        </div>
      </div>
    </>
  );
}
