"use client"
import { useState, useEffect } from 'react';

const PreviewLoading = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`pt-15 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      {/* Title skeleton */}
      <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg mb-5 w-48"></div>
      
      {/* Grid skeleton */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-5 pb-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="aspect-video bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg"></div>
        ))}
      </div>
      
      {/* Show More link skeleton */}
      <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded w-32"></div>
    </div>
  );
};

export default PreviewLoading; 