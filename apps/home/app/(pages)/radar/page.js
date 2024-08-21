import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/nav";

export const metadata = {
  title: "Gossamer | NYSee",
  description:
    "Gossamer is the original idea I&apos;d had for the first project.",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="project project--radar">
        <div className="hero">
          <h1 style={{ padding: "0.5rem 0 1rem" }}>Radar</h1>{" "}
        </div>
        <div className="project__iteration">
          <video autoPlay loop muted src="/images/radar02_2.mp4"></video>
        </div>
      </div>
    </>
  );
}
