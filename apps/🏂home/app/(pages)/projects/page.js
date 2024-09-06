import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import ImageFader from "@/(galleries)/riso-motion/image-fader";
import { faderImages } from "@/(galleries)/riso-motion/page";

export const metadata = {
  title: "Projects | NYSee",
  description: "As heard on Glengarray Glen Ross, 'Always be Creating'",
  url: "https://nysee.nyc/projects",
  openGraph: {
    url: "https://nysee.nyc/projects",
    images: [
      {
        url: "https://nysee.nyc/images/og-no-ordinary-duotone-000.jpg",
      },
    ],
  },
  robots: "index, follow",
  keywords:
    "Ray Weitzenberg, photographer, artist, technologist, new yorker, photography, design, risography, riso, NYSee, NYC, Sacto, Sacramento, ",
};

const GalleryObjects = () => {
  return (
    <>
      <Header />
      <div className="gallery gallery--objects bg-white sm:px-6">
        <div className="gallery__inner w-full sm:w-5/6 md:w-full max-w-screen-md mx-auto px-4">
          <div className="hero pt-8 sm:pt-16">
            <h1 className="text-4xl font-medium">Projects</h1>
          </div>
          <Link href="/riso-motion" className="">
            <div className="pt-10">
              <h2 className="text-3xl font-medium">
                RisoLAB + p5.js + Framer Motion
              </h2>
              <h4 className="pt-1 text-1xl text-gray-500 italic">
                Thursday, 05 Sep 2024 14.44.53 PM EDT
              </h4>
              <h3 className="pt-4 text-2xl">https://nysee.nyc/riso-motion</h3>
              <p className="pt-4 text-xl">
                Explorations into the worlds of Risography, p5.js, and Framer
                Motion.
              </p>
            </div>
          </Link>

          <div className="image-fader flex flex-col items-center w-1/2 mt-4 mb-8 border-2">
            <ImageFader images={faderImages} interval={3000} />
          </div>

          <Link href="/objects" className="">
            <div className="pt-10">
              <h2 className="text-3xl font-medium">Objects May Appear</h2>
              <h4 className="pt-1 text-1xl text-gray-500 italic">
                Tuesday, 03 Sep 2024 14.48.14 PM EDT
              </h4>
              <h3 className="pt-4 text-2xl">https://nysee.nyc/objects</h3>
              <p className="pt-4 text-xl">
                Laid out the first gallery today. Beware appearing objects.
              </p>
            </div>
          </Link>
          <div className="flex flex-col items-center w-1/2 pt-8">
            <Image
              src="/images/galleries/objects-may-full-page.jpg"
              width={1080}
              height={1080}
              className="h-auto sm:mb-32"
              alt="Design with abstract eye on checkerboard background"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryObjects;
