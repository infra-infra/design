import React from "react";
import RcImage from "rc-image";

type ImageType = {
  size?: "small" | "default" | "medium" | "large";
  src: string;
  className?: string;
  onClick?: () => void;
};
const Image = ({  src }: ImageType) => {
  return <RcImage preview={{ mask: 'Click to Preview' }} width={200} src={src} />;
};

export default Image;
