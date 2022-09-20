declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// Copied from next/image
interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

declare module '*.png' {
  const content: StaticImageData;
  export default content;
}

declare module '*.jpg' {
  const content: StaticImageData;

  export default content;
}

declare module '*.jpeg' {
  const content: StaticImageData;

  export default content;
}

declare module '*.gif' {
  const content: StaticImageData;

  export default content;
}

declare module '*.webp' {
  const content: StaticImageData;

  export default content;
}

declare module '*.avif' {
  const content: StaticImageData;

  export default content;
}

declare module '*.ico' {
  const content: StaticImageData;

  export default content;
}

declare module '*.bmp' {
  const content: StaticImageData;

  export default content;
}

interface ImageProps
  extends Omit<
    JSX.IntrinsicElements['img'],
    'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading'
  > {
  src: string | StaticImport;
  width?: number | string;
  height?: number | string;
  layout?: LayoutValue;
  loader?: ImageLoader;
  quality?: number | string;
  priority?: boolean;
  loading?: LoadingValue;
  lazyRoot?: React.RefObject<HTMLElement> | null;
  lazyBoundary?: string;
  placeholder?: PlaceholderValue;
  blurDataURL?: string;
  unoptimized?: boolean;
  objectFit?: ImgElementStyle['objectFit'];
  objectPosition?: ImgElementStyle['objectPosition'];
  onLoadingComplete?: OnLoadingComplete;
}
