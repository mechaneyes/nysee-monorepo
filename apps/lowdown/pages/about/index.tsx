import Image from "next/image";
import Container from "@/components/container";
import Masthead from "@/components/masthead";

export default function About() {

  return (
    <Container>
      <Masthead />
      <main className="about page page--about mx-auto px-5 pt-5 pb-24">
        <Image
          width="3840"
          height="2160"
          alt={`Disco Elysium screenshot`}
          src="/lowdown/images/about_discoElysium.jpg"
          className="object-cover"
        />

        <div className="about__max w-5/6 mx-auto px-5">
          <h1 className="text-3xl font-bold pt-10">About NYSee</h1>
          <h3 className="pt-4 text-2xl italic">
            Raise the hair on your neck. Tune in to the city.
          </h3>
          <p className="pt-4 text-xl">
            NYSee.nyc is a domain I registered as soon as the TLD became
            available. I've been sitting on it for years waiting for the
            inspiration to put it to use.
          </p>
          <p className="pt-4 text-xl">
            Matteo MacQueen and I were rabidly consuming art most of this last
            this year, a large part of that time being spent at gallery
            openings. For a long while now I've been known for meticulously
            compiling lists of shows to hit, then sharing those with friends
            who'd join. The lives of these lists were extended when those
            friends used them then passed them on. People seemed to find real
            value in these.
          </p>
          <p className="pt-4 text-xl">
            Matteo's idea: Amplify it. Share that information further still.
          </p>
          <p className="pt-4 text-xl">
            It's not just with gallery shows/openings, I've tended to be pretty
            good at finding information others find actionable. Turns out some
            of what I get excited by others do as well. It doesn't benefit
            anyone else if it's kept bottled up.
          </p>
          <p className="pt-4 text-xl">
            Funny, this reminds me a bit of combing through my sources when I'd
            first moved to NYC. I'd started an email list for events that was
            circulated, again amongst people close to me. No surprise that I
            then went on to work at Flavorpill doing similar on a larger scale.
          </p>
          <h4 className="pt-6">NYSee Radar</h4>
          <p className="pt-2 text-xl">
            NYSee Radar is what those lists of gallery shows has grown into.
            It's not entirely clear how often I can or want to make updates
            here. But as mentioned I see some cool shit that others are often
            excited by as well. For now the focus is gallery and museum shows.
          </p>
          <h4 className="pt-6">NYSee Lowdown</h4>
          <p className="pt-2 text-xl">
            NYSee Lowdown exists as an avenue for more general information worth
            passing on. I'm picturing it as being a repository for loosely
            coupled information be it art, design, music, tech, nyc, etc. This
            is regularly updated with stuff I'm creating or that influences what
            I create. It's form is a bit nebulous. As part of my practice I like
            to immerse myself in the work and find out what I'm making while in
            the process of making it. I like the idea of mapmaking combining
            science, aesthetics, and technique to communicate information
            through visual representation. That said, we're not sticking only to
            what can be seen. Something along the lines of the overwhelming,
            euphoric feeling on the dance floor last night, with Carlos
            Souffrant on the wheels of steel&mdash;while 100% sober, mind
            you&mdash;might qualify at some point.
          </p>
          <p className="pt-4 text-xl">
            So in this proces, as one might in Disco Elysium, I'm dumping all of
            my points into Shivers. (That's homework for you if you don't
            already know).
          </p>
          <blockquote className="flex justify-center w-3/4 mx-auto mt-12 text-xl italic">
            Raise the hair on your neck. Tune in to the city.
          </blockquote>
          <blockquote className="flex flex-col justify-center w-3/4 mx-auto mt-10 text-xl italic">
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
          <p className="pt-6 text-xl leading-5">&lt;Ray /&gt;</p>
          <div />
        </div>
      </main>
    </Container>
  );
}
