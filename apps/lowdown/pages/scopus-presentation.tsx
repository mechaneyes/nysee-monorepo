import Container from "@/components/container";
import Header from "@/components/header";
import Carousel from "@/components/carousel";

export default function Scopus() {
  const imageFiles = Array.from(
    { length: 21 },
    (_, i) =>
      `/lowdown/images/scopusExMachina/scopusExMachina_${String(i).padStart(3, "0")}.jpg`
  );

  return (
    <Container>
      <Header />
      <div className="page page--scopusExMachina sm:px-4">
        <h1 className="p-4 text-4xl text-gray-900">
          Scopus Ex Machina Presentation
        </h1>
        <p className="text-gray-500 sm:w-3/5 px-4 pb-8">
          The presentation on the Scopus Ex Machina project that I gave to the
          Zines and Small Publishing class at RisoLAB.
        </p>
        <Carousel images={imageFiles} />
      </div>
    </Container>
  );
}
