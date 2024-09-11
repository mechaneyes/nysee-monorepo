"use client";

import { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";

function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).formatToParts(
    date
  );

  const parts: { [key: string]: string } = {};
  formattedDate.forEach(({ type, value }) => {
    parts[type] = value;
  });

  return `${parts.weekday}, ${parts.day} ${parts.month} ${parts.year}`;
}

function formatDateForSubNav(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, "EEEE, MMM do");
}

function formatDateForMobileSubNav(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, "MMM d");
}

interface DateProps {
  dateString: string;
  subNav?: boolean;
}

export default function Date({ dateString, subNav }: DateProps) {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrLaptop(window.innerWidth >= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!dateString) {
    return null;
  }

  let formattedDate: string;

  dateString = dateString.split("T")[0];

  if (!isDesktopOrLaptop && subNav) {
    formattedDate = formatDateForMobileSubNav(dateString);
  } else if (subNav) {
    formattedDate = formatDateForSubNav(dateString);
    // formattedDate = formatDate(dateString);
  } else {
    formattedDate = formatDate(dateString);
  }

  return <time dateTime={dateString}>{formattedDate}</time>;
}
