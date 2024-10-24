import React from 'react';

const VideoCard = ({ video }) => {
  const { snippet, id } = video;
  const { title, channelTitle, publishedAt, thumbnails } = snippet;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${id.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-sm border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden"
    >
      {/* Video Thumbnail */}
      <img 
        src={thumbnails.high ? thumbnails.high.url : thumbnails.default.url} 
        alt={title} 
        className="w-full h-48 object-cover"
      />

      {/* Video Info */}
      <div className="p-4">
        <h3 className=" font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-sm text-gray-500 mt-2">{channelTitle}</p>
        
        <p className="text-xs text-gray-400 mt-1">
          {new Date(publishedAt).toLocaleDateString()}
        </p>
      </div>
    </a>
  );
};

export default VideoCard;
