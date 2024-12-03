import { useEffect, useState } from "react";
import hljs from "highlight.js/lib/core";
// Import only the languages we need
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";
import json from "highlight.js/lib/languages/json";

import styles from "./post-body.module.css";
// import "highlight.js/styles/github-dark.css";
// import "highlight.js/styles/agate.css";
// import "highlight.js/styles/dracula.css";
import "highlight.js/styles/gradient-dark.css";

export default function PostBody({ content }) {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrLaptop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`post max-w-2xl mx-auto ${!isDesktopOrLaptop && "px-5"}`}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
        ref={(node) => {
          if (node) {
            // Demo various themes at https://highlightjs.org/demo
            //
            const codeBlocks = node.querySelectorAll("pre code");
            codeBlocks.forEach((block) => {
              hljs.registerLanguage("javascript", javascript);
              hljs.registerLanguage("typescript", typescript);
              hljs.registerLanguage("python", python);
              hljs.registerLanguage("json", json);
              hljs.highlightElement(block as HTMLElement);

              // custom theme classes
              // block.classList.add("hljs");
              block.classList.add("gradient-dark");
              block.classList.add("gradient-nysee");
            });
          }
        }}
      />
    </div>
  );
}
