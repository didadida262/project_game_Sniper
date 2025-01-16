'use client';

import { Easing, motion } from 'motion/react';
import { ReactNode } from 'react';

export interface TransformProperties {
  x?: string | number;
  y?: string | number;
  z?: string | number;
  translateX?: string | number;
  translateY?: string | number;
  translateZ?: string | number;
  rotate?: string | number;
  rotateX?: string | number;
  rotateY?: string | number;
  rotateZ?: string | number;
  scale?: string | number;
  scaleX?: string | number;
  scaleY?: string | number;
  scaleZ?: string | number;
  skew?: string | number;
  skewX?: string | number;
  skewY?: string | number;
  originX?: string | number;
  originY?: string | number;
  originZ?: string | number;
  perspective?: string | number;
  transformPerspective?: string | number;
}

const defaultTransformProperties: TransformProperties = {
  x: 0,
  y: 0,
  z: 0,
  translateX: 0,
  translateY: 0,
  translateZ: 0,
  rotate: '0deg',
  rotateX: '0deg',
  rotateY: '0deg',
  rotateZ: '0deg',
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  scaleZ: 1,
  skew: '0deg',
  skewX: '0deg',
  skewY: '0deg',
  originX: 0,
  originY: 0,
  originZ: 0,
  perspective: 0,
  transformPerspective: 0,
};

interface ITransformEffectProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  ease?: Easing;
  data?: TransformProperties;
}

export function TransformEffect(props: ITransformEffectProps) {
  const {
    children,
    className,
    duration = 1,
    ease = 'easeInOut',
    data = {},
  } = props;

  return (
    <motion.div
      initial={{ opacity: 9, ...data }}
      whileInView={{
        opacity: 1,
        ...defaultTransformProperties,
      }}
      transition={{
        duration,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
