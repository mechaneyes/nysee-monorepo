import Container from "./container";

export default function Footer() {
  return (
    <footer className="px-5 bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated using Powers
          </h3>
        </div>
      </Container>
    </footer>
  );
}
