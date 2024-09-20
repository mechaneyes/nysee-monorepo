"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="NavigationMenuList">
        <NavigationMenuItem>
          <a href="/" className="pl-5 font-medium text-lg">
            NYSee
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/lowdown" className="pl-5 font-medium text-lg">
            Lowdown
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/werk" className="sm:pl-5 font-medium text-lg">
            Werk
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/ray-weitzenberg" className="pl-5 font-medium text-lg">
            Ray
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/radar/about" className="pl-5 font-medium text-lg">
            About
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
