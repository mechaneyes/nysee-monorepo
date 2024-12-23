import { NextResponse } from "next/server";

export const runtime = "edge";

// Using SVG or emote as a favicon
// 
export default function Icon() {
  const emoji = "👁️";
  const size = 80;
  const viewBox = `0 0 ${size} ${size}`;

  let svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">
      <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="${size}">
        ${emoji}
      </text>
    </svg>
  `;

  // svgString = `
  //   <svg width="850" height="850" viewBox="0 0 850 850" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <path d="M796.45 217.6L508.3 457.3L651.1 172.55L598.4 328.95L706.35 175.1L685.1 263.5L796.45 217.6ZM642.6 60.35L513.4 411.4L494.7 93.5L527 255L544 68L569.5 154.7L642.6 60.35ZM850 430.95L481.1 494.7L747.15 319.6L623.05 428.4L793.9 349.35L731 414.8L850 430.95ZM494.7 368.9L319.6 102.85L428.4 226.95L349.35 56.1L414.8 119L430.95 -1.01328e-05L494.7 368.9ZM457.3 341.7L172.55 198.9L328.95 251.6L175.1 143.65L263.5 164.9L217.6 53.55L457.3 341.7ZM789.65 642.6L438.6 513.4L756.5 494.7L595 527L782 544L695.3 569.5L789.65 642.6ZM411.4 336.6L93.5 355.3L255 323L68 306L154.7 280.5L60.35 207.4L411.4 336.6ZM677.45 651.1L521.05 598.4L674.9 706.35L586.5 685.1L632.4 796.45L392.7 508.3L677.45 651.1ZM530.4 747.15L421.6 623.05L500.65 793.9L435.2 731L419.05 850L355.3 481.1L530.4 747.15ZM368.9 355.3L102.85 530.4L226.95 421.6L56.1 500.65L119 435.2L0 419.05L368.9 355.3ZM355.3 756.5L323 595L306 782L280.5 695.3L207.4 789.65L336.6 438.6L355.3 756.5ZM341.7 392.7L198.9 677.45L251.6 521.05L143.65 674.9L164.9 586.5L53.55 632.4L341.7 392.7Z" fill="#0085FF"/>
  //   </svg>
  // `;

  return new NextResponse(svgString, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}
