import Link from "next/link";
import NavMenu from "@/components/ui/nav-menu";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-5 md:px-8 py-4 border-b">
        <div className="flex items-center space-x-4">
          <h2 className="text-4xl">
            <Link href="/">
              NYSee
            </Link>
          </h2>
        </div>
        <NavMenu />
      </header>
    </>
  );
}
