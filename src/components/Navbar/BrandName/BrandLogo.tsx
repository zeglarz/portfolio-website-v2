import * as React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const StyledSVG = styled.svg`
    overflow:hidden;
    box-shadow: ${({theme}) => theme.shadows.primary};
    text {
      fill: ${({theme}) => theme.colors.text};
    }
    #main-square {
      fill: ${({theme}) => theme.colors.background};
    }
`;

interface BrandProps {
    size: string,
    showIntro: boolean;
}

const pathVariants = {
    init: {
        opacity: 0,
        pathLength: 0
    },
    target: custom => ({
        opacity: 1,
        pathLength: 1,
        transition: {
            pathLength: {
                duration: 3
            },
            duration: 1,
            delay: custom ? 2.5 : 0,
            ease: 'easeInOut'
        }
    })
};

const BrandLogo: React.FC<BrandProps> = ({size, showIntro, ...props}) => {
    return (
        <Link to={'/home'}>
            <StyledSVG width={size} height={size} viewBox="0 0 430 430" {...props}>
                <title>{'myLogo'}</title>
                <defs>
                    <motion.linearGradient
                        transition={{
                            duration: 4,
                            ease: 'easeOut',
                            yoyo: Infinity
                        }}
                        animate={{
                            x1: ['-360%', '360%']
                        }}
                        x1="-9.515%"
                        y1="-30.83%"
                        x2="92.107%"
                        y2="123.934%"
                        id="prefix__a"
                    >
                        <stop stopColor="red" offset="0%"/>
                        <stop stopColor="#A00951" offset="17.829%"/>
                        <stop stopColor="#9A0056" offset="35.993%"/>
                        <stop stopColor="#FF3D00" offset="57.979%"/>
                        <stop stopColor="#FFC900" offset="81.25%"/>
                        <stop stopColor="#2F0" offset="100%"/>
                    </motion.linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path id="main-square" fill="#000" fillRule="nonzero" d="M0 0h430v430H0z"/>
                    <motion.path
                        custom={showIntro}
                        variants={pathVariants}
                        initial='init'
                        animate='target'
                        stroke="url(#prefix__a)"
                        strokeWidth={12}
                        d="M35 34h361v361H35z"
                    />
                    <text
                        transform="translate(105 96)"
                        fill="#FFF"
                        fillRule="nonzero"
                        fontFamily="TrebuchetMS, Trebuchet MS"
                        fontSize={220}
                    >
                        <tspan x={0} y={207}>
                            {'Kr'}
                        </tspan>
                    </text>
                </g>
            </StyledSVG>
        </Link>
    );
}

export default BrandLogo;
