import React from 'react';
import styles from "./post-body.module.css";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PostBody({ content }) {
  // Function to extract PDF link from content
  const extractPdfLink = (content: string) => {
    const pdfLinkRegex = /href=["'](.*\.pdf)["']/i;
    const match = content.match(pdfLinkRegex);
    return match ? match[1] : null;
  };

  const pdfLink = extractPdfLink(content);

  return (
    <div className="post max-w-2xl mx-auto">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {pdfLink && (
        <div className="mt-4">
          <h3>PDF Viewer</h3>
          <div style={{ height: '750px' }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={pdfLink} />
            </Worker>
          </div>
        </div>
      )}
    </div>
  );
}