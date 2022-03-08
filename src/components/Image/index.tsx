import React from 'react';

interface IImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

const Image: React.FC<IImageProps> = ({
  src,
  alt,
  className,
  height,
  width,
}) => (
  <img src={src} alt={alt} className={className} width={width} height={height} />
);

export default Image;
