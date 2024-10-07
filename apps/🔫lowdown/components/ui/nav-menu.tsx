"use client";

export default function NavMenu() {
  return (
    <div className="NavigationMenuList">
      <a href="/" className="font-medium text-lg">
        NYSee
      </a>
      <a href="/radar" className="pl-5 font-medium text-lg">
        Radar
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
