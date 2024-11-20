"use client";

import React from "react";
import dynamic from "next/dynamic";

// Importăm componenta VideoBackground doar pe client
const VideoBackgroundClient = dynamic(() => import("./VideoBackgroundClient"), {
  ssr: false, // Asigurăm că se încarcă doar pe client
});

const VideoBackground: React.FC = () => {
  return (
    <div>
      {/* Afișăm componenta VideoBackgroundClient doar pe client */}
      <VideoBackgroundClient />
    </div>
  );
};

export default VideoBackground;
