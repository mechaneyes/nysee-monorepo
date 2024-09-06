import path from "path";
import { promises as fs } from "fs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Header from "@/components/header";
import ImageFader from "./image-fader";

// read the contents of files for inclusion in code block on page
// 
async function getCodeString(theFile) {
  const filePath = path.join(process.cwd(), theFile);
  return await fs.readFile(filePath, "utf8");
}

export const metadata = {
  title: "RisoLAB + p5.js + Framer Motion | NYSee",
  description:
    "Explorations into the worlds of Risography, p5.js, and Framer Motion.",
  url: "https://nysee.nyc/riso-one",
  openGraph: {
    url: "https://nysee.nyc/riso-one",
    images: [
      {
        url: "https://nysee.nyc/images/galleries/riso-one/riso-one_001.jpg",
      },
    ],
  },
};

export const faderImages = [
  "/images/galleries/riso-one/riso-one_001.jpg",
  "/images/galleries/riso-one/riso-one_002.jpg",
  "/images/galleries/riso-one/riso-one_003.jpg",
  "/images/galleries/riso-one/riso-one_004.jpg",
  "/images/galleries/riso-one/riso-one_005.jpg",
  "/images/galleries/riso-one/riso-one_006.jpg",
  "/images/galleries/riso-one/riso-one_007.jpg",
  "/images/galleries/riso-one/riso-one_008.jpg",
  "/images/galleries/riso-one/riso-one_009.jpg",
  "/images/galleries/riso-one/riso-one_010.jpg",
  "/images/galleries/riso-one/riso-one_011.jpg",
];

export default async function GalleryObjects() {
  const imageFater = await getCodeString(
    "app/(galleries)/riso-motion/image-fader.js"
  );
  const p5sketch = await getCodeString(
    "app/(galleries)/riso-motion/p5sketch.js"
  );

  return (
    <>
      <Header />
      <div className="gallery gallery--riso-one bg-white">
        <div className="gallery__inner sm:w-5/6 max-w-screen-md mx-4 sm:mx-auto pt-8 sm:pt-16">
          <h1 className="text-4xl font-medium">
            RisoLAB + p5.js + Framer Motion
          </h1>
          <h3 className="pt-4 text-1xl italic">
            Thursday, 05 Sep 2024 14.44.53 PM EDT
          </h3>
          <p className="pt-4 text-xl">
            I took Panayiotis Terzis&apos;s{" "}
            <a href="https://risolab.sva.edu/courses/">
              RISO Printing: Zines and Small Publishing class at RisoLAB
            </a>{" "}
            this last summer. Our first assignment was to submit artwork that
            could be used in a class zine, and we were asked to use 3 colors
            with at least some of the colors overlapping. No other requirements.
          </p>
          <p className="pt-4 text-xl">
            I did a farily quick p5.js sketch to assemble a design similar to
            what you see below. But what&apos;s actually below is several of the
            variations the app produced. Coming across these, I thought it might
            be good fodder for my first mini-project using Framer Motion. This
            is super simple, but I&apos;m happy to have this raw material to do
            this little exploration.
          </p>
        </div>
        <div className="image-fader flex flex-col items-center w-full max-w-3xl mx-auto mt-10 border-2">
          <ImageFader images={faderImages} interval={3000} />
        </div>

        <div className="mt-10 w-full max-w-3xl mx-auto">
          <h3 className="pt-4 text-2xl">Framer Motion Component</h3>
          <p className="mt-2 mb-4 text-xl">Pretty basic:</p>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {imageFater}
          </SyntaxHighlighter>
        </div>

        <div className="mt-10 w-full max-w-3xl mx-auto">
          <h3 className="pt-4 text-2xl">p5.js Sketch</h3>
          <p className="mt-2 mb-3 text-xl">
            The p5.js sketch is probably more interesting.
          </p>
          <p className="mt-1 mb-6 text-xl">
            The colors you see below are the colors that are available at
            RisoLAB. There are two systems with their own sets of colors. There
            are methods for working in Photoshop in order to approximate those
            colors while you&apos;re constructing your artwork.
          </p>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {p5sketch}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}
