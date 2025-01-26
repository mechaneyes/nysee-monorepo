"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { PhotoData } from "../utils/exif";

// Dynamically import the Map component with no SSR
const Map = dynamic(() => import("./map"), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-gray-100 rounded-lg" />
});

interface Props {
  initialPhotos: PhotoData[];
}

const PhotoMapGallery = ({ initialPhotos }: Props) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <Map />
    </div>
  );
};

export default PhotoMapGallery;
