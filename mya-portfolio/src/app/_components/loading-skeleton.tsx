"use client"
import { useState, useEffect } from 'react';

interface LoadingSkeletonProps {
  className?: string;
  aspectRatio?: 'video' | 'square' | 'custom';
  customAspectRatio?: string;
}

const LoadingSkeleton = ({ 
  className = "", 
  aspectRatio = 'video',
  customAspectRatio 
}: LoadingSkeletonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'video':
        return 'aspect-video';
      case 'square':
        return 'aspect-square';
      case 'custom':
        return customAspectRatio || 'aspect-video';
      default:
        return 'aspect-video';
    }
  };

  return (
    <div 
      className={`
        ${getAspectRatioClass()} 
        bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 
        animate-pulse rounded-lg overflow-hidden
        ${isVisible ? 'opacity-100' : 'opacity-0'} 
        transition-opacity duration-300
        ${className}
      `}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-500 text-sm font-medium">Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton; 