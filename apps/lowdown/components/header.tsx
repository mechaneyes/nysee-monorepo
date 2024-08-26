import Link from "next/link";
import NavMenu from "@/components/ui/nav-menu";

export default function Header() {
  return (
    <>
      <header className="masthead flex flex-col items-center justify-between px-5 md:px-8 py-4 border-b">
        <div className="flex items-center space-x-4 mb-3">
          <h2 className="">
            <Link href="/">
              NYSee Lowdown
            </Link>
          </h2>
        </div>
        <NavMenu />
      </header>
    </>
  );
}
