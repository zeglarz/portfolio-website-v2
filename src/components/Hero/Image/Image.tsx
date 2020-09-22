import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

interface ImageProps {
    src: string;
}

const StyledImgContainer = styled(motion.div)`
 display: flex;
 max-width: 480px;
 max-height: 480px;
 width: 100%;
 height: 100%;
   overflow: hidden;

 position: relative;
   .rect1 {
    position: absolute;
    background: ${({ theme }) => theme.colors.background};
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .rect2 {
    position: absolute;
    background: ${({ theme }) => theme.gradients.primary};
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
  }
`;

const divVariants = {
    init: {
        width: '100%'
    },
    end: {
        width: '0%',
        transition: {
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.25
        }
    }
};
const divVariants2 = {
    init: {
        width: '100%'
    },
    end: {
        width: '0%',
        transition: {
            ease: 'easeInOut',
            duration: 1.1
        }
    }
};
const variants = {
    init: {},
    end: {
        transition: {
            staggerChildren: .3
        }
    }
};
const imgVariants = {
    init: { scale: 1.6 },
    end: {
        scale: 0.9,
        filter: ['brightness(0.3)', 'brightness(2.3)'],
        transition: {
            filter: {
                duration: 3,
                yoyo: Infinity

            },
            duration: .8
        }
    }
};

const Image: FunctionComponent<ImageProps> = ({ src }) => {
    return (
        <StyledImgContainer variants={variants} initial='init' animate='end'>
            <motion.div variants={divVariants2} className='rect2'></motion.div>
            <motion.div variants={divVariants} className='rect1'></motion.div>
            <img src={src} alt={''}/>
        </StyledImgContainer>
    );
};

export default Image;
