import Image, { type ImageProps } from "next/image";

type AssetImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export function AssetImage({ src, alt, ...props }: AssetImageProps) {
  return <Image unoptimized src={src} alt={alt} {...props} />;
}