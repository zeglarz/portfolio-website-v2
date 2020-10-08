import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { imgVariants, variants, divVariants2, divVariants } from './animations';
import StyledImgContainer from './Styles/container';

interface ImageProps {
  src: string;
}

const Index: FunctionComponent<ImageProps> = ({ src }) => {
  return (
    <StyledImgContainer variants={variants} initial="init" animate="end">
      <motion.div variants={divVariants2} className="rect2" />
      <motion.div variants={divVariants} className="rect1" />
      <motion.img src={src} variants={imgVariants} alt="hero image" />
    </StyledImgContainer>
  );
};

export default Index;
