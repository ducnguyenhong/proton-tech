import { Flex } from '@chakra-ui/react';
import NextImage from 'next/image';
import PropTypes from 'prop-types';
import { memo, useCallback, useMemo, useState } from 'react';
import { getBlurDataURL, getImageSizes } from './image.helper';

const Image = (props) => {
  const [hasError, setHasError] = useState(false);
  const {
    src,
    alt = 'vndirect image',
    borderRadius,
    onLoaded,
    onError,
    quality,
    priority,
    fallback,
    objectFit,
    w = '100%',
    h = '100%',
    imgWidth,
    imgHeight,
    fill = true
  } = props;

  const sizes = useMemo(() => getImageSizes(w), [w]);
  const blurDataURL = useMemo(() => getBlurDataURL(), []);

  const onLoadError = useCallback(
    (e) => {
      setHasError(true);
      onError && onError(e);
    },
    [onError]
  );

  return (
    <Flex w={w} h={h} position="relative">
      <NextImage
        src={hasError ? fallback : src}
        alt={alt}
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

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  fill: PropTypes.bool,
  quality: PropTypes.number, // 0 -> 100
  imgWidth: PropTypes.number, // attribute width of img tag
  imgHeight: PropTypes.number, // attribute height of img tag
  w: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      '2xl': PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ]), // css image size width
  h: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      '2xl': PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ]), // css image size height
  priority: PropTypes.bool,
  onLoaded: PropTypes.func,
  onError: PropTypes.func,
  borderRadius: PropTypes.number,
  objectFit: PropTypes.oneOf(['fill', 'contain', 'cover', 'none', 'scale-down', 'initial', 'inherit']),
  fallback: PropTypes.element
};

export default memo(Image);
