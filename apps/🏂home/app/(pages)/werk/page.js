import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

const Werk = () => {
  return (
    <>
      <div className="bg-slate-900/90">
        <Header />
      </div>
      <main className="min-h-screen p-4 pt-7 md:p-8 md:pt-12 mx-auto pb-12 lg:pb-24 space-y-6">
        <header className="w-full max-w-[1200px] mx-auto">
          <h1 className="text-5xl text-namjunepaik-3 font-[cholla-unicase]">
            Ray Weitzenberg
          </h1>
          <h2 className="pt-2 text-4xl text-namjunepaik-5 font-[cholla-unicase]">
            Artist + Technologist + New Yorker
          </h2>

          <div className="w-full lg:w-2/3 pt-2 text-xl font-light text-namjunepaik-5">
            <p className="pt-1 leading-relaxed">
              Below are screenshots and brief descriptions of some of my recent
              projects.
            </p>
            <p className="leading-relaxed">
              Let&apos;s create together:{" "}
              <Link
                href="/ray-weitzenberg"
                className="text-namjunepaik-3 no-underline hover:text-[#ff8c26] hover:no-underline transition-colors duration-300 whitespace-nowrap"
              >
                nysee.nyc/ray-weitzenberg
              </Link>
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1200px] mx-auto pt-8">
          <div className="w-full lg:w-2/3 text-xl font-light text-namjunepaik-4-light">
            <div className="text-4xl text-namjunepaik-3 font-[cholla-unicase]">
              Scopus Ex Machina
            </div>
            <p className="pt-1 leading-relaxed">
              Scopus Ex Machina is a project that I worked on at RisoLAB. It is
              focused on interrogating the surveillance proliferating in our
              society. Part of the project has involved the construction of a
              facial recognition system running in my apt window.
            </p>
            <p className="pt-1 leading-relaxed">
              This is{" "}
              <Link
                href="/lowdown/scopus-presentation"
                className="text-namjunepaik-3 no-underline hover:text-[#ff8c26] hover:no-underline transition-colors duration-300"
              >
                the project presentation
              </Link>{" "}
              that I gave to the Zines and Small Publishing class at RisoLAB.
            </p>
          </div>
          <div className="w-full pt-4">
            <Image
              src="/images/act/scopus-ex-machina.png"
              alt="Cover image of Scopus Ex Machina Presentation Deck"
              width={1200}
              height={743}
            />
            <Image
              src="/images/act/scopus-2.png"
              alt="Scopus Ex Machina Slide. Text explaining considerations of surveillance."
              width={1200}
              height={743}
              className="pt-1 lg:pt-0"
            />
            <Image
              src="/images/act/scopus-3.png"
              alt="Scopus Ex Machina Slide. Section title slide. Text stating 'Watching the watchers.' Illustration of an eyeball looking at that text."
              width={1200}
              height={743}
              className="pt-1 lg:pt-0"
            />
            <Image
              src="/images/act/scopus-4a.png"
              alt="Scopus Ex Machina Slide. Title states, 'Scopeo: Roll your own facial recognition.' Picture of a camera looking out a window."
              width={1200}
              height={743}
              className="pt-1 lg:pt-0"
            />
            <Image
              src="/images/act/scopus-5.png"
              alt="Scopus Ex Machina Slide. Title states, 'Just because you're paranoid doesn't mean they're not out to get you.' Picture of a cat wearing a tinfoil hat."
              width={1200}
              height={743}
              className="pt-1 lg:pt-0"
            />
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto pt-12 lg:pt-24">
          <div className="w-full lg:w-2/3 text-xl font-light text-namjunepaik-4">
            <div className="text-4xl text-namjunepaik-3 font-[cholla-unicase]">
              Dead Dinner
            </div>
            <p className="pt-1 leading-relaxed">
              Dead Dinner focuses on creating an engaging, interactive
              exploration of important historical figures&apos; lives through an
              interactive timeline with integrated narrative elements and a
              contextual conversation interface. The first subject is Malcolm X.
            </p>
            <p className="pt-1 leading-relaxed">
              The project is very young and currently under active development.
            </p>
            <p className="pt-1 leading-relaxed">
              Below is the onboarding experience with the narrator who greets
              the user and introduces them to the app.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-start gap-4 pt-8">
            <Image
              src="/images/act/dd-mob-1.png"
              alt="Dead Dinner Mobile Screenshot. Cover image of Malcolm X."
              width={535}
              height={1062}
            />
            <Image
              src="/images/act/dd-mob-2.png"
              alt="Dead Dinner Mobile Screenshot. Nation of Islam page."
              width={535}
              height={1062}
            />
            <Image
              src="/images/act/dd-mob-3.png"
              alt="Dead Dinner Mobile Screenshot. Prison Period page."
              width={535}
              height={1062}
            />
            <Image
              src="/images/act/dd-mob-4.png"
              alt="Dead Dinner Mobile Screenshot. Birth and Early Life page."
              width={535}
              height={1062}
            />
          </div>
          <div className="w-full pt-8">
            <Image
              src="/images/act/dd-1.png"
              alt="Dead Dinner Desktop  Screenshot. Birth and Early Life page."
              width={1200}
              height={743}
            />
            <Image
              src="/images/act/dd-2.png"
              alt="Dead Dinner Mobile Screenshot. Nation of Islam page."
              width={1200}
              height={743}
              className="pt-1 lg:pt-0"
            />
            <Image
              src="/images/act/dd-3.png"
              alt="Dead Dinner Mobile Screenshot. Pilgrimage to Mecca page."
              width={1200}
              height={743}
              className="pt-1 lg:pt-0"
            />
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto pt-12 lg:pt-24">
          <div className="w-full lg:w-2/3 text-xl font-light text-namjunepaik-4-light">
            <div className="text-4xl text-namjunepaik-3 font-[cholla-unicase]">
              Thirdeyes
            </div>
            <p className="pt-1 leading-relaxed">
              Thirdeyes assists music journalists in writing artist bios.
              Powered behind the scenes by an orchestration of multiple LLMs,
              writers can step through and develop the core elements of a bio.
              Further assiting the writers, information is contextually
              generated as they interact with the app to inform upon the
              artist&apos;s life and work.
            </p>
          </div>
          <div className="w-full pt-4">
            <Image
              src="/images/act/thirdeyes-1.png"
              alt="Thirdeyes Desktop Screenshot."
              width={1200}
              height={743}
            />
            <Image
              src="/images/act/thirdeyes-2.png"
              alt="Thirdeyes Desktop Screenshot."
              width={1200}
              height={743}
            />
            <Image
              src="/images/act/thirdeyes-3.png"
              alt="Thirdeyes Desktop Screenshot."
              width={1200}
              height={743}
            />
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto pt-12 lg:pt-24">
          <div className="w-full lg:w-2/3 text-xl font-light text-namjunepaik-4-light">
            <div className="text-4xl text-namjunepaik-3 font-[cholla-unicase]">
              NYSee
            </div>
            <p className="pt-1 leading-relaxed">
              My home on the web, NYSee is a lot of things and those things are
              ever evolving. <br />
              <Link
                href="/radar"
                className="pt-2 text-namjunepaik-3 no-underline hover:text-[#ff8c26] hover:no-underline transition-colors duration-300"
              >
                /radar
              </Link>{" "}
              <br />
              <Link
                href="/lowdown"
                className="pt-2 text-namjunepaik-3 no-underline hover:text-[#ff8c26] hover:no-underline transition-colors duration-300"
              >
                /lowdown
              </Link>{" "}
              <br />
              <Link
                href="/lowdown/about"
                className="pt-2 text-namjunepaik-3 no-underline hover:text-[#ff8c26] hover:no-underline transition-colors duration-300"
              >
                /about
              </Link>
            </p>
          </div>
          <div className="w-full pt-4">
            <Image
              src="/images/act/nysee-nyc.jpg"
              alt="NYSee Desktop Screenshot. Homepage."
              width={1200}
              height={743}
              className="drop-shadow-2xl"
            />
            <Image
              src="/images/act/nysee-radar.jpg"
              alt="NYSee Radar Desktop Screenshot. Text left. Background image of a landscape. Radar antenna in the bottom right."
              width={1200}
              height={743}
              className="pt-6 lg:pt-14 drop-shadow-2xl"
            />
            <Image
              src="/images/act/nysee-radar-scroll.jpg"
              alt="NYSee Radar Desktop Screenshot. Text left. Background image of a landscape. Radar antenna in the bottom right."
              width={1200}
              height={743}
              className="pt-6 lg:pt-14 drop-shadow-2xl"
            />
            <Image
              src="/images/act/nysee-lowdown.jpg"
              alt="NYSee Lowdown Desktop Screenshot. Masthead up top. Abstract image filling the page."
              width={1200}
              height={743}
              className="pt-6 lg:pt-14 drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto pt-12 lg:pt-24">
          <div className="w-full lg:w-2/3 text-xl font-light text-namjunepaik-4-light">
            <div className="text-4xl text-namjunepaik-3 font-[cholla-unicase]">
              mechaneyes.com
            </div>
            <p className="pt-1 leading-relaxed">
              A portfolio site collecting the array of work I&apos;ve done over
              the years. <br />
              <Link
                href="https://mechaneyes.com"
                className="pt-2 text-namjunepaik-3 no-underline hover:text-[#ff8c26] hover:no-underline transition-colors duration-300"
              >
                mechaneyes.com
              </Link>
            </p>
          </div>
          <div className="w-full pt-4">
            <Image
              src="/images/act/mechaneyes-1.jpg"
              alt="Mechaneyes Desktop Screenshot. Topographic map illustration."
              width={1920}
              height={1080}
              quality={100}
              className="drop-shadow-2xl"
            />
            <Image
              src="/images/act/mechaneyes-2.jpg"
              alt="Mechaneyes Desktop Screenshot. Abstract image with floral pattern."
              width={1280}
              height={712}
              quality={100}
              className="pt-6 lg:pt-14 drop-shadow-2xl"
            />
            <Image
              src="/images/act/mechaneyes-3.jpg"
              alt="Mechaneyes Desktop Screenshot. Topographic map illustration. Map points demarking mountain peaks."
              width={1280}
              height={712}
              quality={100}
              className="pt-6 lg:pt-14 drop-shadow-2xl"
            />
            <Image
              src="/images/act/mechaneyes-4.jpg"
              alt="Mechaneyes Desktop Screenshot. Banner image looking down on the Hudson River to the NYC cityscape."
              width={1280}
              height={712}
              quality={100}
              className="pt-6 lg:pt-14 drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto pt-12 lg:pt-24">
          <div className="w-full lg:w-2/3 text-xl font-light text-namjunepaik-4-light">
            <div className="text-4xl text-namjunepaik-3 font-[cholla-unicase]">
              Riso: No Ordinary Duotone
            </div>
            <p className="leading-relaxed">
              Risograph prints made in the summer of 2024 at RisoLAB. <br />
              <Link
                href="/no-ordinary-duotone"
                className="pt-2 text-namjunepaik-3 no-underline hover:text-[#ff8c26] hover:no-underline transition-colors duration-300"
              >
                nysee.nyc/no-ordinary-duotone
              </Link>
            </p>
          </div>
          <div className="w-full pt-4">
            <Image
              src="/images/no-ordinary-duotone-1.0.0.jpg"
              alt="Risograph print. Woman on a foggy dance floor lit from behind with a strobe light."
              width={1920}
              height={1435}
              className="w-full lg:w-4/5 h-auto"
            />
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto pt-12 lg:pt-24">
          <div className="w-full lg:w-2/3 text-xl font-light text-namjunepaik-4-light">
            <div className="text-4xl text-namjunepaik-3 font-[cholla-unicase]">
              Objects May Appear
            </div>
            <Link
              href="/objects"
              className="pt-2 text-namjunepaik-3 no-underline hover:text-[#ff8c26] hover:no-underline transition-colors duration-300"
            >
              https://nysee.nyc/objects
            </Link>
            <p className="pt-2 leading-relaxed">
              First photo gallery on NYSee.
            </p>
          </div>
          <Image
            src="/images/galleries/objects-may-full-page.jpg"
            alt="Screenshot of Objects May Appear gallery. Images arranged in a grid."
            width={1024}
            height={2199}
            className="w-auto h-full max-h-[90vh] pt-4 drop-shadow-2xl"
          />
        </div>
      </main>
    </>
  );
};

export default Werk;
