import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center space-x-4">
          <h2 className="">
            <Link href="/" className="hover:underline">
              NYSee Lowdown
            </Link>
          </h2>
        </div>
        <nav className="flex items-center space-x-3">
          <a href="/" className="text-gray-700">
            NYSee Home
          </a>
          <div>&middot;</div>
          <a href="https://nysee.nyc/ray-weitzenberg" className="text-gray-700">
            Ray Weitzenberg
          </a>
        </nav>
      </header>
    </>
  );
}
