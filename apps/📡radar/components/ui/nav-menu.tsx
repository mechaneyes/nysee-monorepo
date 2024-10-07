"use client";

export default function NavMenu() {
  return (
    <div className="NavigationMenuList">
      <a href="/" className="font-medium text-lg">
        NYSee
      </a>
      <a href="/lowdown" className="pl-5 font-medium text-lg">
        Lowdown
      </a>
      <a href="/ray-weitzenberg" className="pl-5 font-medium text-lg">
        Ray
      </a>
      <a href="/lowdown/about" className="pl-5 font-medium text-lg">
        About
      </a>
    </div>
  );
}
