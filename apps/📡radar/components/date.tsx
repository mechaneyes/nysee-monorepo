import { parseISO } from "date-fns";

function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).formatToParts(date);

  const parts: { [key: string]: string } = {};
  formattedDate.forEach(({ type, value }) => {
    parts[type] = value;
  });

  return `${parts.weekday}, ${parts.day} ${parts.month} ${parts.year}`;
}

interface DateProps {
  dateString: string;
}

export default function Date({ dateString }: DateProps) {
  if (!dateString) {
    return
  }

  dateString = dateString.split("T")[0];
  const formattedDate = formatDate(dateString);

  return <time dateTime={dateString}>{formattedDate}</time>;
}