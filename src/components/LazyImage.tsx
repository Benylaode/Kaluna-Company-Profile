"use client";

import React from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  shimmerClassName?: string;
  fallbackClassName?: string;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  style,
  shimmerClassName: _shimmerClassName,
  fallbackClassName: _fallbackClassName,
  ...props
}: LazyImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      style={style}
      {...props}
    />
  );
}

