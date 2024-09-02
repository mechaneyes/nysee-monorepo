import Link from "next/link";
import NavMenu from "@/components/ui/nav-menu";

export default function Header() {
  return (
    <>
      <header className="masthead flex flex-col items-center justify-between gap-y-1.5 px-5 md:px-8 py-4 border-b">
        <div className="flex items-center space-x-4">
          <h2 className="text-4xl">
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
