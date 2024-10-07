import Head from "next/head";
import Image from "next/image";
import Container from "@/components/container";
import Masthead from "@/components/masthead";
import ImageFader from "@/components/image-fader";

export const faderImages = [
  "/lowdown/images/whirligrid/whirligrid-sacred-mystery-1.jpg",
  "/lowdown/images/whirligrid/whirligrid-sacred-mystery-2.jpg",
  "/lowdown/images/whirligrid/whirligrid-sacred-mystery-3.jpg",
  "/lowdown/images/whirligrid/whirligrid-sacred-mystery-4.jpg",
  "/lowdown/images/whirligrid/whirligrid-sacred-mystery-5.jpg",
  "/lowdown/images/whirligrid/whirligrid-sacred-mystery-6.jpg",
  "/lowdown/images/whirligrid/whirligrid-sacred-mystery-7.jpg",
];

export default function About() {
  return (
    <Container>
      <Head>
        <title>NYSee Radar</title>
        <meta property="og:title" content="NYSee Lowdown" key="title" />
        <meta property="og:url" content="https://nysee.nyc/lowdown/about" />
        <meta
          property="og:image"
          content="https://nysee.nyc/images/og-about.jpg"
        />
      </Head>
      <Masthead />
      <main className="about page page--about mx-auto px-5 pt-8 pb-24">
        <ImageFader images={faderImages} interval={3000} />

        <div className="about__max w-5/6 mx-auto px-5">
          <h1 className="text-3xl font-bold pt-10">About NYSee</h1>
          <h3 className="pt-4 text-2xl italic">
            Raise the hair on your neck. Tune in to the city.
          </h3>

          <h4 className="pt-6">NYSee Radar</h4>
          <p className="pt-4 text-xl">
            I rabidly consume art, a large part of my time spent in galleries.
            For a long while now I've been compiling lists of shows worth seeing
            then sharing them with friends. The lives of these lists are often
            extended when used then shared further. People seem to find real
            value in these.
          </p>
          <p className="pt-2 text-xl">
            NYSee Radar is what those lists has grown into. I see work that
            excites me and that others are often excited by. No sense keeping it
            bottled up.
          </p>

          <h4 className="pt-6">NYSee Lowdown</h4>
          <p className="pt-2 text-xl">
            NYSee Lowdown is currently a repository for loosely coupled
            information be it art, design, music, tech, nyc, etc. This is
            regularly updated with what I'm creating or that influences what I
            create.
          </p>
          <p className="pt-2 text-xl">
            I tend immerse myself in the work and discover what I'm making in
            the process of making it. Mapmaking combines science, aesthetics,
            and technique to communicate information through visual
            representation. That concept resonates with me. I'm forever a fan of{" "}
            <a href="https://mechaneyes.com/">maps</a>.
          </p>
          <p className="pt-4 text-xl">
            So in this proces, as one might in Disco Elysium, I'm dumping all of
            my points into Shivers. {""}
            <a href="https://www.youtube.com/watch?v=Md5PTWBuGpg">
              Homework here
            </a>
            .
          </p>
          <blockquote className="flex flex-col justify-center w-3/4 mx-auto mt-10 text-xl italic bg-neutral-50">
            <div className="mb-5 text-xl italic">
              Raise the hair on your neck. Tune in to the city.
            </div>
            Shivers come when the temperature drops and you become more keenly
            aware of your surroundings. It enables you to hear the city itself,
            to truly belong to the streets. It is a supra-natural ability; old
            wrongs play out in present time, scenes across the city happen in
            front of you. But who is speaking to you? <br />
            <br />
            <a href="https://discoelysium.fandom.com/wiki/Shivers">
              &mdash; Disco Elysium Wiki
            </a>
          </blockquote>
          <p className="pt-16 text-xl">
            Join me. Let's discover, create and share.
          </p>
          <p className="pt-6 text-xl leading-5">
            <a href="/ray-weitzenberg">&lt;Ray /&gt;</a>
          </p>
          <div />
        </div>
      </main>
    </Container>
  );
}
