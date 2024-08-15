import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold">
            <Link href="/" className="hover:underline">
              NYSee Lowdown
            </Link>
          </h2>
        </div>
        <nav className="flex items-center space-x-6">
          {/* <a href="#" className="text-gray-700">
            Home
          </a> */}
          <a href="/" className="text-gray-700">
            NYSee
          </a>
        </nav>
      </header>
    </>
  );
}
