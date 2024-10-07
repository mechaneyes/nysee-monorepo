"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="NavigationMenuList">
        <NavigationMenuItem>
          <a href="/" className="font-medium text-lg">
            NYSee
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/radar" className="pl-5 font-medium text-lg">
            Radar
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/ray-weitzenberg" className="pl-5 font-medium text-lg">
            Ray
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/lowdown/about" className="pl-5 font-medium text-lg">
            About
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}