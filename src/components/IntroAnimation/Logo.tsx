import React from 'react';
import {motion} from 'framer-motion';

const pathVariants = {
    init: {
        opacity: 0,
        pathLength: 0
    },
    target: {
        opacity: 1,
        pathLength: 1.0,
        transition: {
            duration: 1.5,
            ease: 'easeInOut'
        }
    }
};

export default function Logo({bcgColor, size}) {
    return (
        <motion.svg
            transition={{
                duration: 1,
                ease: 'easeOut'
            }}
            animate={{opacity: [0, 1]}}
            whileTap={{scale: 0.95}}
            whileHover={{scale: 1.2}}
            style={{originX: '50%', originY: '50%'}}
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
                    id="chroma"
                >
                    <stop stopColor="red" offset="0%"/>
                    <stop stopColor="#A00951" offset="17.829%"/>
                    <stop stopColor="#9A0056" offset="35.993%"/>
                    <stop stopColor="#FF3D00" offset="57.979%"/>
                    <stop stopColor="#FFC900" offset="81.25%"/>
                    <stop stopColor="#2F0" offset="100%"/>
                </motion.linearGradient>
            </defs>
            <motion.g
                transition={{
                    duration: 0.5,
                    delay: 2,
                    ease: 'easeOut'
                }}
                animate={{scale: [1.0, 1.15, 0], opacity: [1, 0]}}
            >
                <motion.g
                    fill="none"
                    fillRule="evenodd"
                    transition={{
                        duration: 1.5,
                        ease: 'backOut'
                    }}
                    animate={{rotate: [-45, 90]}}
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
                        initial='init'
                        animate='target'
                        stroke="url(#chroma)"
                        strokeWidth={12}
                        d="M35 34h361v361H35z"
                    />
                </motion.g>
                <motion.text
                    opacity="0"
                    transition={{
                        duration: 1.5,
                        ease: 'circIn'
                    }}
                    animate={{opacity: [0, 1]}}
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
