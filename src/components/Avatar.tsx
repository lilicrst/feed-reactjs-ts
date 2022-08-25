import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';
import React from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}

export function Avatar({ hasBorder= true, ...props}: AvatarProps) {
  return (
    <img 
    className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    {...props}
    />
  );
}