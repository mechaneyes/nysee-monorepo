import Link from "next/link";
import NavMenu from "@/components/ui/nav-menu";

export default function Header() {
  return (
    <>
      <header className="flex flex-col sm:flex-row items-center justify-between px-5 md:px-8 py-4 border-b">
        <h2 className="block text-4xl">
          <Link href="/" className="hover:no-underline">
            NYSee
          </Link>
        </h2>
        <NavMenu />
      </header>
    </>
  );
}
