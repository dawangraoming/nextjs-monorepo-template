import React, { createElement, FC, memo } from 'react';
import { ImageProps } from 'next/image';

const isStorybook = process.env.STORYBOOK === '1';

const HTMLImage = (props: ImageProps) => {
  // set `alt` value just for fix ide warning
  // set `src` value is for storybook compiler
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <img src={props.src as string} {...props} alt={props.alt} />;
};

/**
 * Compatible Image components for React and NextJS
 * @param props
 */
const Img: FC<ImageProps> = (props) => {
  try {
    if (isStorybook) {
      // storybook can't handle dynamic imports
      // so have to hack like this
      // https://github.com/vercel/next.js/issues/18393#issuecomment-888451313
      return <HTMLImage {...props} />;
    }

    // eslint-disable-next-line
    return createElement((require.resolve('next/image') as any).default, {
      ...props,
      src: typeof props.src === 'string' ? props.src : props.src,
    });
  } catch {
    return <HTMLImage {...props} />;
  }
};

export const Image = memo(Img);

export default Image;
