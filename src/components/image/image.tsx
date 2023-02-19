import { Flex } from '@chakra-ui/react';
import NextImage, { StaticImageData } from 'next/image';
import { memo, useCallback, useMemo, useState } from 'react';
import { getBlurDataURL, getImageSizes } from './image.helper';

interface ImageProps {
  src: string | StaticImageData;
  alt?: string;
  borderRadius?: string | number;
  onLoaded?: () => void;
  onError?: (e: Error) => void;
  quality?: number;
  priority?: boolean;
  fallback?: any;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  w?: any;
  h?: any;
  imgWidth?: number;
  imgHeight?: number;
  fill?: boolean;
  opacity?: number;
}

const Image: React.FC<ImageProps> = (props) => {
  const [hasError, setHasError] = useState(false);
  const {
    src,
    alt,
    borderRadius,
    onLoaded,
    onError,
    quality = 100,
    priority,
    fallback,
    objectFit,
    w = '100%',
    h = '100%',
    imgWidth,
    imgHeight,
    fill = true,
    opacity = 1
  } = props;

  const sizes = useMemo(() => getImageSizes(w), [w]);
  const blurDataURL = useMemo(() => getBlurDataURL(), []);

  const onLoadError = useCallback(
    (e: any) => {
      setHasError(true);
      onError && onError(e);
    },
    [onError]
  );

  return (
    <Flex w={w} h={h} position="relative" opacity={opacity}>
      <NextImage
        src={hasError ? fallback : src}
        alt={`Proton Tech ${alt}`}
        fill={fill}
        sizes={sizes}
        width={imgWidth}
        height={imgHeight}
        quality={quality}
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority={priority}
        onLoadingComplete={onLoaded}
        onError={onLoadError}
        style={{
          borderRadius,
          objectFit
        }}
      />
    </Flex>
  );
};

export default memo(Image);
