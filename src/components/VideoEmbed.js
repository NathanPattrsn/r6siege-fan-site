// src/components/VideoEmbed.js

import React from 'react';

export default function VideoEmbed({ video }) {
  const videoId = video.id.videoId;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="315"
        src={embedUrl}
        title={video.snippet.title}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
