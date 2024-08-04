"use client";

import * as React from "react";
import {
  ScrollMode,
  SpecialZoomLevel,
  Viewer,
  ViewMode,
  Worker,
} from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import {
  ThumbnailDirection,
  thumbnailPlugin,
} from "@react-pdf-viewer/thumbnail";

import Navigation from "@/app/components/navts";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import "@react-pdf-viewer/thumbnail/lib/styles/index.css";
import "@/app/styles/styles.scss";

const PdfExMachina: React.FC = () => {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToNextPage, jumpToPreviousPage } = pageNavigationPluginInstance;

  const thumbnailPluginInstance = thumbnailPlugin();
  const { Thumbnails } = thumbnailPluginInstance;

  return (
    <>
      <Navigation />
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <div className="scopus-ex-presentation">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                height: "40rem",
                position: "relative",
              }}
            >
              <div onClick={jumpToPreviousPage}>
                <svg
                  className="nav-button nav-button--prev"
                  width="17"
                  height="32"
                  viewBox="0 0 17 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.214893 1.24731C-0.0716309 0.960573 -0.0716309 0.501792 0.214893 0.215054C0.48709 -0.0716846 0.959855 -0.0716846 1.23205 0.215054L16.4894 15.4839C16.776 15.7706 16.776 16.2294 16.4894 16.5161L1.23205 31.7849C0.959855 32.0717 0.48709 32.0717 0.214893 31.7849C-0.0716309 31.4982 -0.0716309 31.0394 0.214893 30.7527L14.9565 16L0.214893 1.24731Z"
                    fill="#FF0000"
                  />
                </svg>
              </div>
              <Viewer
                defaultScale={SpecialZoomLevel.PageFit}
                scrollMode={ScrollMode.Page}
                viewMode={ViewMode.SinglePage}
                fileUrl={"/images/scopus-ex-presentation.pdf"}
                plugins={[
                  pageNavigationPluginInstance,
                  thumbnailPluginInstance,
                ]}
              />
              <div onClick={jumpToNextPage}>
                <svg
                  className="nav-button nav-button--next"
                  width="17"
                  height="32"
                  viewBox="0 0 17 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.214893 1.24731C-0.0716309 0.960573 -0.0716309 0.501792 0.214893 0.215054C0.48709 -0.0716846 0.959855 -0.0716846 1.23205 0.215054L16.4894 15.4839C16.776 15.7706 16.776 16.2294 16.4894 16.5161L1.23205 31.7849C0.959855 32.0717 0.48709 32.0717 0.214893 31.7849C-0.0716309 31.4982 -0.0716309 31.0394 0.214893 30.7527L14.9565 16L0.214893 1.24731Z"
                    fill="#FF0000"
                  />
                </svg>
              </div>
            </div>
            <div
              style={{
                height: "auto",
                overflow: "hidden",
              }}
            >
              <Thumbnails thumbnailDirection={ThumbnailDirection.Horizontal} />
            </div>
          </div>
        </div>
      </Worker>
    </>
  );
};

export default PdfExMachina;
