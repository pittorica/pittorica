import React, { useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export interface AvatarProps extends BoxProps {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  /** @default '3' */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  /** @default 'full' */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}

/**
 * Avatar component with automatic fallback handling.
 */
export const Avatar = ({
  src,
  alt,
  fallback,
  size = '3',
  radius = 'full',
  className,
  style,
  ...props
}: AvatarProps) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'loaded' | 'error'>(
    src ? 'loading' : 'idle'
  );

  useEffect(() => {
    if (!src) {
      return;
    }

    const img = new Image();
    const handleLoad = () => setStatus('loaded');
    const handleError = () => setStatus('error');

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);
    img.src = src;

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  const sizeMap = {
    '1': '24px',
    '2': '32px',
    '3': '40px',
    '4': '48px',
    '5': '64px',
    '6': '80px',
    '7': '96px',
    '8': '128px',
    '9': '160px',
  };

  const finalSize = sizeMap[size];

  return (
    <Box
      className={clsx('pittorica-avatar', className)}
      style={{
        width: finalSize,
        height: finalSize,
        borderRadius:
          radius === 'full' ? '50%' : `var(--pittorica-radius-${radius})`,
        fontSize: `calc(${finalSize} / 2.5)`,
        ...style,
      }}
      {...props}
    >
      {status === 'loaded' && src ? (
        <img src={src} alt={alt} className="pittorica-avatar-image" />
      ) : (
        <div className="pittorica-avatar-fallback" aria-label={alt}>
          {fallback || alt?.charAt(0) || '?'}
        </div>
      )}
    </Box>
  );
};
