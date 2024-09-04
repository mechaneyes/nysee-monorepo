import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export const metadata = {
  title: "Objects May Appear | NYSee",
  description:
    "The first gallery up on NYSee. Objects in mirror are closer than they appear",
  url: "https://nysee.nyc/objects",
  openGraph: {
    url: "https://nysee.nyc/objects",
    images: [
      {
        url: "https://nysee.nyc/images/galleries/objects/og-objects.jpg",
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
      <div className="gallery gallery--objects bg-white">
        <div className="hero">
          <div className="sm:w-5/6 max-w-screen-md mx-4 sm:mx-auto pt-8 sm:pt-24">
            <h1 className="text-3xl font-medium">Objects May Appear</h1>
            <h3 className="pt-4 text-1xl italic">
              Tuesday, 03 Sep 2024 14.01.50 PM EDT
            </h3>
            <p className="pt-4 text-xl">
              Objects May Appear was started in 2015 and ran through 2018. Many
              summer evenings after work I&apos;d roam the city shooting just
              about everything, but having a priority of finding these
              distortions in car windows.
            </p>
            <p className="pt-4 text-xl">
              Out of all the exposures I made, it was the one directly below,
              the reflection in the Cadillac&apos;s hood, that struck me the
              most. When Jessica Angel saw the image she said to me, &quot;This
              exploration has reached the next level.&quot;
            </p>
            <p className="pt-4 text-xl">
              That was the last pic I shot in the series.
            </p>
            <p className="pt-4 text-xl">
              Thinking about the feeling of finding and composing that last
              image, I realize now that one thing that hightened the experience
              was finding this reflection in the Caddy&apos;s hood rather than
              as I typically might in a car&apos;s windows. I think it was this
              departure that was most striking to me.
            </p>
            <p className="pt-4 text-xl">
              Thinking further still, I&apos;m reminded of my excitement 2 weeks
              ago when shooting the fractured reflections in the
              Newschool&apos;s University Center windows. Discovering those
              stopped me and sucked me into exploring them for not a short
              amount of time. Seems this project could be reanimated in a new
              form.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-center gap-4 md:gap-8 mt-16 sm:mt-36">
            <Image
              src="/images/galleries/objects/deKadillac.jpg"
              width={629}
              height={785}
              className="w-[100%] h-auto sm:mb-32"
              alt="DeKadillac"
            />
            <Image
              src="/images/galleries/objects/33thomas.jpg"
              width={630}
              height={841}
              className="w-[100%] h-auto object-cover mt-4 sm:mt-32"
              alt="Negative Effects of 33 Thomas"
            />
          </div>
          <div className="w-full flex-column sm:flex gap-4 md:gap-8 my-8 sm:my-24">
            <Image
              className="w-full sm:w-[40%] h-auto object-cover"
              alt="Tix to Carlton"
              src="/images/galleries/objects/carltonTix.jpg"
              width={630}
              height={630}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4 md:gap-8 sm:w-[60%] mt-8 sm:mt-0">
              <Image
                className="self-center w-full h-auto object-contain"
                alt="Crosby Wiper"
                src="/images/galleries/objects/crosbyWiper.jpg"
                width={346}
                height={346}
              />
              <Image
                className="self-center w-full h-auto object-contain"
                alt="Crosby Street Hotel"
                src="/images/galleries/objects/crosbyStreetHotel.jpg"
                width={346}
                height={346}
              />
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row items-end gap-4 md:gap-8 mt-0 mb-32 pl-0 sm:pl-0 md:pl-0">
            <div className="w-full sm:w-[40%] relative mb-4 sm:mb-0">
              <div className="sm:absolute bottom-0 left-0 w-full sm:w-[calc(100%-5rem)] md:w-[calc(100%-8rem)] h-auto aspect-square">
                <Image
                  className="w-full h-full object-contain object-bottom"
                  alt="First Object May Appear"
                  src="/images/galleries/objects/firstObjectMayAppearFlipped.jpg"
                  width={750}
                  height={750}
                />
              </div>
            </div>
            <Image
              className="w-full sm:w-[60%] h-auto object-contain"
              alt="TITANPOINT (Concerned Citizen)"
              src="/images/galleries/objects/titanpoint.jpg"
              width={724}
              height={906}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryObjects;
