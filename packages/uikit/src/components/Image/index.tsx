import React, { createElement, FC, memo } from 'react';

const isStorybook = process.env.STORYBOOK === '1';

const HTMLImage = (props: Record<any, any>) => {
  return <img {...props} />;
};

const Img: FC<{
  src: string | { src: string };
  [key: string]: any;
}> = ({ src, ...props }) => {
  try {
    if (isStorybook) {
      return <HTMLImage src={src} {...props} />;
    }

    return createElement((require.resolve('next/image') as any).default, {
      src: typeof src === 'string' ? src : src.src,
    });
  } catch {
    return <HTMLImage src={src} {...props} />;
  }
};

export const Image = memo(Img);

export default Image;
