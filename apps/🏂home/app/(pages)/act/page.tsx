"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Act = () => {
  return (
    <main className="min-h-screen p-4 md:p-8 mx-auto space-y-6">
      <header className="w-full max-w-[1200px] mx-auto">
        <h1 className="text-5xl text-namjunepaik-3 font-[cholla-unicase]">
          Ray Weitzenberg
        </h1>
        <h2 className="text-3xl text-namjunepaik-5 font-[cholla-unicase]">
          Artist + Technologist + NYC
        </h2>

        <div className="w-2/3 pt-2 text-xl font-light text-namjunepaik-5">
          <p className="leading-relaxed">
            Below are screenshots and very brief descriptions of some of my
            recent projects. I&apos;m happy to discuss any of these in more
            detail:{" "}
            <a
              href="https://nysee.nyc/ray-weitzenberg"
              className="text-namjunepaik-3"
            >
              nysee.nyc/ray-weitzenberg
            </a>
          </p>
        </div>
      </header>

      <div className="w-full max-w-[1200px] mx-auto pt-8">
        <div className="w-2/3 text-xl font-light text-namjunepaik-4-light">
          <div className="text-4xl text-namjunepaik-3-light font-[cholla-unicase]">
            Scopus Ex Machina
          </div>
          <p className="pt-1 leading-relaxed">
            Scopus Ex Machina is a project that I worked on at RisoLAB. It is
            focused on interrogating the surveillance proliferating in our
            society. Part of the project has involved the construction of a
            facial recognition system running in my apt window.
          </p>
          <p className="pt-1 leading-relaxed">
            <a
              href="/lowdown/scopus-presentation"
              className="text-namjunepaik-3"
            >
              This is the project presentation
            </a>{" "}
            that I gave to the Zines and Small Publishing class at RisoLAB.
          </p>
        </div>
        <div className="w-full pt-4">
          <Image
            src="/images/act/scopus-ex-machina.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/scopus-2.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/scopus-3.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/scopus-4.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/scopus-5.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto pt-24">
        <div className="w-2/3 text-xl font-light text-namjunepaik-4">
          <div className="text-4xl text-namjunepaik-3-light font-[cholla-unicase]">
            Dead Dinner
          </div>
          <p className="pt-1 leading-relaxed">
            Dead Dinner focuses on creating an engaging, interactive exploration
            of important historical figures&apos; lives through an interactive
            timeline with integrated narrative elements and a contextual
            conversation interface. The first subject is Malcolm X. The project
            is very young and currently under active development.
          </p>
          <p className="pt-1 leading-relaxed">
            These screenshots show the narrator who greets the user and
            introduces them to the app.
          </p>
        </div>
        <div className="w-full grid grid-cols-4 justify-start gap-4 pt-8">
          <Image
            src="/images/act/dd-mob-1.png"
            alt="Dead Dinner"
            width={535}
            height={1062}
          />
          <Image
            src="/images/act/dd-mob-2.png"
            alt="Dead Dinner"
            width={535}
            height={1062}
          />
          <Image
            src="/images/act/dd-mob-3.png"
            alt="Dead Dinner"
            width={535}
            height={1062}
          />
          <Image
            src="/images/act/dd-mob-4.png"
            alt="Dead Dinner"
            width={535}
            height={1062}
          />
        </div>
        <div className="w-full pt-8">
          <Image
            src="/images/act/dd-1.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/dd-2.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/dd-3.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto pt-24">
        <div className="w-2/3 text-xl font-light text-namjunepaik-4-light">
          <div className="text-4xl text-namjunepaik-3-light font-[cholla-unicase]">
            Thirdeyes
          </div>
          <p className="pt-1 leading-relaxed">
            Thirdeyes assists music journalists in writing artist bios. Powered
            behind the scenes by an orchestration of multiple LLMs, writers can
            step through and develop the core elements of a bio. Further
            assiting the writers, information is contextually generated as they
            interact with the app.
          </p>
        </div>
        <div className="w-full pt-4">
          <Image
            src="/images/act/thirdeyes-1.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/thirdeyes-2.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/thirdeyes-3.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto pt-24">
        <div className="w-2/3 text-xl font-light text-namjunepaik-4-light">
          <div className="text-4xl text-namjunepaik-3-light font-[cholla-unicase]">
            NYSee
          </div>
          <p className="pt-1 leading-relaxed">
            Thirdeyes aids music journalists in writing artist bios. Leveraging
            multiple LLMs writers can step through and develop the core elements
            of a bio. Assiting the writers, information is contextually
            generated as they interact with the app.
          </p>
          <p className="pt-1 leading-relaxed">
            <a href="https://nysee.nyc" className="text-namjunepaik-3">
              https://nysee.nyc/
            </a>
          </p>
        </div>
        <div className="w-full pt-4">
          <Image
            src="/images/act/nysee-nyc.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/nysee-radar.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/nysee-radar-scroll.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/nysee-radar-the-americans.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
          <Image
            src="/images/act/nysee-lowdown.png"
            alt="Dead Dinner"
            width={1200}
            height={743}
          />
        </div>
      </div>
    </main>
  );
};

export default Act;
