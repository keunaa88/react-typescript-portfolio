import React from 'react';
import { ReactComponent as Icons } from './../assets/icon/icons.svg';


interface Props {
  name: string,
  width?: string,
  height?: string,
  fill?: string
}

const Icon = ({name, width, height, fill}: Props) => {
  return (
    <svg>
      <use xlinkHref={`#${name}`} width={width} height={height} fill={fill} />
      <Icons />
    </svg>
  );
}

export default Icon;