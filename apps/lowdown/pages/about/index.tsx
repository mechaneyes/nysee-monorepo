import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Container from "@/components/container";
import Masthead from "@/components/masthead";
import { getAllPostsForHome } from "@/lib/api";

export default function About({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrLaptop(window.innerWidth >= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Masthead />
      <main className="about page page--about mx-auto px-5 pb-24">
        <Image
          width="3840"
          height="2160"
          alt={`Disco Elysium screenshot`}
          src="/lowdown/images/about_discoElysium.jpg"
          className="object-cover"
        />

        <div className={`w-5/6 mx-auto px-5`}>
          <h1 className="text-3xl font-bold pt-10">About NYSee</h1>
          <h3 className="pt-4 text-2xl italic">
            Raise the hair on your neck. Tune in to the city.
          </h3>
          <p className="pt-4 text-xl">
            NYSee.nyc is a domain I registered as soon as the TLD became
            available. I've been sitting on it for years not knowing what I'd
            use it for.
          </p>
          <p className="pt-4 text-xl">
            Matteo MacQueen and I were rabidly consuming art throughout this
            year, a large part of that time being spent at gallery openings. For
            a long while now I've been known for compiling lists of what to hit,
            then sharing those with friends who'd join. That went further to
            those friends sharing with still more. People seemed to find real
            value in these.
          </p>
          <p className="pt-4 text-xl">
            Matteo's idea: share that information with many more.
          </p>
          <p className="pt-4 text-xl">
            It's not just with gallery shows/openings, I've tended to be pretty
            good at finding information others find actionable. Turns out some
            of what I find interesting others do as well. It doesn't benefit
            anyone else if it's kept bottled up.
          </p>
          <p className="pt-4 text-xl">
            Funny, this reminds me a bit of some of my sources when I'd first
            moved here. I'd started an email list for events that was
            circulated, again amongst people close to me. It wasn't a surprise
            then that I went on to work at Flavorpill doing similar on a larger
            scale.
          </p>
          <h4 className="pt-6">NYSee Radar</h4>
          <p className="pt-2 text-xl">
            NYSee Radar is what those lists of gallery shows has grown into.
            It's not entirely clear how often I can or want to make updates
            here. But as mentioned I see some cool shit that others seem to
            think is inspiring as well. Right now I'm starting with shows in
            galleries and museums. We'll see what shape it finally takes.
          </p>
          <h4 className="pt-6">NYSee Lowdown</h4>
          <p className="pt-2 text-xl">
            NYSee Lowdown exists as an avenue for more general information worth
            passing on. I'm picturing it as being a store for loosely coupled
            information be it art, design, music, tech, nyc, etc. This is
            regularly updated with stuff I'm creating or that influences what I
            create. Again, it's form is a bit nebulous. I like to just immerse
            myself in the work and find out what I'm making in the process of
            making it. I like the idea of mapmaking combining science,
            aesthetics, and technique to communicate information through visual
            representation. That said, we're not sticking only to what can be
            seen.
          </p>
          <p className="pt-4 text-xl">
            So in this proces, as one might in Disco Elysium, I'm dumping all of
            my points into Shivers.
          </p>
          <blockquote className="flex justify-center w-3/4 mx-auto mt-12 text-2xl italic">
            Raise the hair on your neck. Tune in to the city.
          </blockquote>
          <blockquote className="flex flex-col justify-center w-3/4 mx-auto mt-12 text-2xl italic">
            Shivers come when the temperature drops and you become more keenly
            aware of your surroundings. It enables you to hear the city itself,
            to truly belong to the streets. It is a supra-natural ability; old
            wrongs play out in present time, scenes across the city happen in
            front of you. But who is speaking to you? <br />
            <br />
            <a href="https://discoelysium.fandom.com/wiki/Shivers">
              https://discoelysium.fandom.com/wiki/Shivers
            </a>
          </blockquote>
          <p className="pt-16 text-xl">
            Join me. Let's discover, create and share.
          </p>
          <p className="pt-6 text-xl leading-5">&lt;Ray /&gt;</p>
          <div />
        </div>
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
