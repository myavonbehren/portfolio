"use client"
import { useState } from 'react';
import Image from 'next/image';
import LoadingSkeleton from './loading-skeleton';

interface MediaLoaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: 'blur' | 'empty' | 'data:image/...';
  blurDataURL?: string;
  isVideo?: boolean;
  videoTitle?: string;
  aspectRatio?: 'video' | 'square' | 'custom';
  customAspectRatio?: string;
  caption?: string;
}

const MediaLoader = ({
  src,
  alt,
  width = 1920,
  height = 1080,
  className = "",
  placeholder = "blur",
  blurDataURL,
  isVideo = false,
  videoTitle = "Video player",
  aspectRatio = 'video',
  customAspectRatio,
  caption
}: MediaLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => setIsReady(true), 100);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`aspect-video bg-red-50 border-2 border-red-200 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="text-red-500 text-lg mb-2">😔</div>
          <div className="text-red-600 text-sm">Failed to load media</div>
        </div>
      </div>
    );
  }

  if (isVideo) {
    return (
      <div className={`aspect-video relative ${className}`}>
        {isLoading && (
          <LoadingSkeleton 
            aspectRatio={aspectRatio}
            customAspectRatio={customAspectRatio}
            className="absolute inset-0 z-10 pointer-events-none"
          />
        )}
        <iframe
          width="100%"
          height="100%"
          src={src}
          title={videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full ${isReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        />
      </div>
    );
  }

  return (
    <div className={`aspect-video relative ${className}`}>
      {isLoading && (
        <LoadingSkeleton 
          aspectRatio={aspectRatio}
          customAspectRatio={customAspectRatio}
          className="absolute inset-0 z-10 pointer-events-none"
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover ${isReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
      />
      <p className="text-sm pt-1 text-gray-600 dark:text-gray-300">{caption}</p>
    </div>
  );
};

export default MediaLoader; 