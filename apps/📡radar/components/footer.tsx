import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./container";
import { crossingBrooklynFerry } from "@/lib/crossingBrooklynFerry";

export default function Footer() {
  const [crossingLine, setCrossingLine] = useState("");
  const [crossingLineIndex, setCrossingLineIndex] = useState(-1);

  useEffect(() => {
    const randomIndex = Math.floor(
      Math.random() * crossingBrooklynFerry.length
    );
    const crossingStartLine = crossingBrooklynFerry[randomIndex];

    setCrossingLine(crossingStartLine);
    setCrossingLineIndex(randomIndex);
  }, []);

  const handleClick = () => {
    const nextIndex = (crossingLineIndex + 1) % crossingBrooklynFerry.length;
    setCrossingLineIndex(nextIndex);
    setCrossingLine(crossingBrooklynFerry[nextIndex]);
  };

  return (
    <footer className="lg:min-h-[540px] px-5 bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col flex-start">
          <h3
            className="text-4xl lg:text-5xl text-white tracking-tighter leading-tight lg:leading-tight text-left mb-10 lg:pr-4 lg:w-2/3 cursor-pointer"
            onClick={handleClick}
          >
            {crossingLine}
          </h3>
          <p className="text-slate-400">via</p>
          <Link href="https://www.poetryfoundation.org/poems/45470/crossing-brooklyn-ferry">
            <p className="leading-normal italic">Crossing Brooklyn Ferry</p>
            <p className="leading-normal">By Walt Whitman</p>
          </Link>
        </div>
      </Container>
    </footer>
  );
}
