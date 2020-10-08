import React from 'react';
import { motion } from 'framer-motion';
import {
  startVariants,
  gradientVariants,
  endPathVariants,
  rotateVariants,
  pathVariants,
  textVariants,
} from './animations';

export default function Logo({ bcgColor, size }) {
  return (
    <motion.svg
      variants={startVariants}
      initial={'start'}
      animate={'end'}
      whileTap={'tap'}
      whileHover={'hover'}
      style={{ originX: '50%', originY: '50%' }}
      overflow="visible"
      height={size}
      width={size}
      viewBox="0 0 430 430"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      display="block"
    >
      <title>{'myLogo'}</title>
      <defs>
        <motion.linearGradient
          variants={gradientVariants}
          x1="-9.515%"
          y1="-30.83%"
          x2="92.107%"
          y2="123.934%"
          id="chroma"
        >
          <stop stopColor="red" offset="0%" />
          <stop stopColor="#A00951" offset="17.829%" />
          <stop stopColor="#9A0056" offset="35.993%" />
          <stop stopColor="#FF3D00" offset="57.979%" />
          <stop stopColor="#FFC900" offset="81.25%" />
          <stop stopColor="#2F0" offset="100%" />
        </motion.linearGradient>
      </defs>
      <motion.g variants={endPathVariants}>
        <motion.g
          fill="none"
          fillRule="evenodd"
          variants={rotateVariants}
          width="100%"
          height="100%"
        >
          <path
            id="main-square"
            fill="#000"
            fillRule="nonzero"
            d="M0 0h430v430H0z"
          />
          <motion.path
            variants={pathVariants}
            stroke="url(#chroma)"
            strokeWidth={12}
            d="M35 34h361v361H35z"
          />
        </motion.g>
        <motion.text
          variants={textVariants}
          id="text"
          transform="translate(105 96)"
          fill="#FFF"
          fillRule="nonzero"
          fontFamily="TrebuchetMS, Trebuchet MS"
          fontSize={220}
        >
          <tspan x={0} y={207}>
            {'Kr'}
          </tspan>
        </motion.text>
      </motion.g>
    </motion.svg>
  );
}
