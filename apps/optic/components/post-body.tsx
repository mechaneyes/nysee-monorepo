import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./post-body.module.css";

const PDFViewer = dynamic(() => import("./PDFViewer"), {
  ssr: false,
  loading: () => <p>Loading PDF viewer...</p>,
});

export default function PostBody({ content }) {
  const [pdfLink, setPdfLink] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const extractPdfLink = (content) => {
      const pdfLinkRegex = /href=["'](.*\.pdf)["']/i;
      const match = content.match(pdfLinkRegex);
      return match ? match[1] : null;
    };

    const originalPdfLink = extractPdfLink(content);
    if (originalPdfLink) {
      const url = new URL(originalPdfLink);
      const proxyLink = `/api/proxy${url.pathname}`;
      console.log("Proxy PDF Link:", proxyLink);
      setPdfLink(proxyLink);
    }
  }, [content]);

  const handleError = async (err) => {
    console.error("PDF loading error:", err);
    if (err.message.includes("Missing PDF")) {
      try {
        const response = await fetch(pdfLink);
        if (response.status === 404) {
          setError(
            "The PDF file was not found on the server. It may have been moved or deleted."
          );
        } else {
          setError(`Failed to load PDF: ${err.message}`);
        }
      } catch (fetchError) {
        setError(`Error checking PDF status: ${fetchError.message}`);
      }
    } else {
      setError(err.message);
    }
  };

  return (
    <div className="post max-w-2xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {pdfLink && (
        <div className="mt-4">
          <h3>PDF Viewer</h3>
          {error ? (
            <div>
              <p>Error: {error}</p>
              <p>
                You can try to{" "}
                <a
                  href={pdfLink.replace(
                    "/api/proxy",
                    "https://wordpress-1313045-4791931.cloudwaysapps.com"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open the PDF directly
                </a>
                .
              </p>
            </div>
          ) : (
            <PDFViewer pdfLink={pdfLink} onError={handleError} />
          )}
        </div>
      )}
    </div>
  );
}
