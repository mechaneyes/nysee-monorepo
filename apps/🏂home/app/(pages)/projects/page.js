import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export const metadata = {
  title: "Projects | NYSee",
  description: "The never static projects page.",
  openGraph: {
    url: "https://nysee.nyc/images/galleries/objects/og-juli-kosolapova.jpg",
  },
  robots: "index, follow",
  keywords:
    "Ray Weitzenberg, photographer, artist, technologist, new yorker, photography, design, risography, riso, NYSee, NYC, Sacto, Sacramento, ",
};

const GalleryObjects = () => {
  return (
    <>
      <Header />
      <div className="gallery gallery--objects bg-white">
        <div className="hero">
          <div className="w-5/6 md:w-full max-w-screen-md mx-auto pt-24">
            <h1 className="text-3xl font-medium">Projects</h1>
          </div>
        </div>
        <Link href="/objects" className="">
          <div className="w-5/6 md:w-full max-w-screen-md mx-auto pt-10">
            <h2 className="text-2xl font-medium">Objects May Appear</h2>
            <h3 className="pt-4 text-1xl italic">
              Tuesday, 03 Sep 2024 14.48.14 PM EDT
            </h3>
            <p className="pt-4 text-xl">
              Laid out the first gallery today. Beware, objects may appear.
            </p>
          </div>
        </Link>
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto pt-8 px-4">
          <Image
            src="/images/galleries/objects-may-full-page.jpg"
            width={1080}
            height={1080}
            className="ww-5/6 max-w-screen-md h-auto sm:mb-32"
            alt="Design with abstract eye on checkerboard background"
          />
        </div>
      </div>
    </>
  );
};

export default GalleryObjects;
