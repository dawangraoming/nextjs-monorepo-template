import React, { createElement, FC, memo } from 'react';

const isStorybook = process.env.STORYBOOK === '1';

const HTMLImage = (props: JSX.IntrinsicElements['img']) => {
  // set `alt` value just for fix ide warning
  return <img {...props} alt={props.alt} />;
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
      src: typeof props.src === 'string' ? props.src : props.src.src,
    });
  } catch {
    return <HTMLImage {...props} />;
  }
};

export const Image = memo(Img);

export default Image;
