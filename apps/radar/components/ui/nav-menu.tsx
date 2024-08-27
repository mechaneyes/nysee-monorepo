"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import RadarSequence from "@/components/radar-sequence";

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="NavigationMenuList">
        <NavigationMenuItem className="NavigationMenuItem">
          <NavigationMenuTrigger>NYSee</NavigationMenuTrigger>
          <NavigationMenuContent className="NavigationMenuContent">
            <a href="/">
              <ul className="nysee-nav grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {" "}
                <li className="row-span-1">
                  <NavigationMenuLink asChild>
                    <div className="flex h-full w-full select-none flex-col justify-end items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-2no-underline outline-none focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium">
                        NYSee Home
                      </div>
                      {/* <Image
                        width={2000}
                        height={2500}
                        alt={`Cover Image for NYSee Home`}
                        src="/lowdown/images/radar_052.png"
                      /> */}
                      <RadarSequence speed={0.9} nav={true} />
                      {/* <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p> */}
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="text-sm">
                  Re-usable components built using Radix UI and Tailwind CSS.
                  Beautifully designed components built with Radix UI and
                  Tailwind CSS. Re-usable components built using Radix UI and
                  Tailwind CSS. Beautifully designed components built with Radix
                  UI and Tailwind CSS.
                </li>
              </ul>
            </a>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="NavigationMenuItem">
          <NavigationMenuTrigger>Lowdown</NavigationMenuTrigger>
          <NavigationMenuContent className="NavigationMenuContent">
            <a href="/lowdown">
              <ul className="nysee-radar grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {" "}
                <li className="row-span-1">
                  <NavigationMenuLink asChild>
                    <div className="flex h-full w-full select-none flex-col justify-end items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-2no-underline outline-none focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium">
                        NYSee Lowdown
                      </div>
                      <RadarSequence speed={0.9} nav={true} />
                    </div>
                  </NavigationMenuLink>
                </li>
                <li className="text-sm">
                  Re-usable components built using Radix UI and Tailwind CSS.
                  Re-usable components built using Radix UI and Tailwind CSS.
                  Re-usable components built using Radix UI and Tailwind CSS.
                  Re-usable components built using Radix UI and Tailwind CSS.
                </li>
              </ul>
            </a>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="https://nysee.nyc/ray-weitzenberg"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Ray Weitzenberg
            </NavigationMenuLink>
          </Link>
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
