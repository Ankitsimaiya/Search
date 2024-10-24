import React from 'react';

const SearchResultCard = ({ item }) => {
  const { title, link, displayLink, formattedUrl, htmlSnippet } = item;

  return (
    <div className="max-w-3xl mx-auto border-b border-gray-300 py-4">
      {/* Title and Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-800 text-xl font-medium hover:underline"
        dangerouslySetInnerHTML={{ __html: title }}
      ></a>

      {/* URL */}
      <div className="text-sm text-green-600 mt-1">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {formattedUrl || displayLink}
        </a>
      </div>

      {/* Snippet */}
      <p
        className="text-gray-700 mt-2"
        dangerouslySetInnerHTML={{ __html: htmlSnippet }}
      ></p>
    </div>
  );
};

export default SearchResultCard;
