import React, {useState} from "react"
import {motion, Variants} from "framer-motion";
import styled from 'styled-components';

const StyledSun = styled(motion.svg)`
cursor: pointer;
`;

const StyledCircle = styled(motion.g)`
    fill: ${({theme}) => theme.colors.background};
    stroke: ${({theme}) => theme.colors.text};
`
const circleTransition = {
    transition: {
        rotate: {
            delay: 0.3,
            duration: 0.3
        },
        staggerChildren: 0.25,
        staggerDirection: -1,
        delayChildren: 0.15,
        duration: 0.25,
        opacity: {delay: 0.15}
    }
}
const circleVaraints: Variants = {
    show: {opacity: 1, scale: 1, rotate: 0, ...circleTransition},
    hidden: {
        scale: 0.8,
        rotate: -90,
        opacity: 0,
        ...circleTransition
    },
};

const rays = {
    show: {
        pathLength: 1,
    },
    hidden: {
        pathLength: 0,
    }
}

const rayN = {
    show: {y: 0},
    hidden: {
        y: 6
    }
}
const rayW = {
    show: {x: 0},
    hidden: {
        x: 6
    }
}
const rayS = {
    show: {y: 0},
    hidden: {
        y: -6
    }
}
const rayE = {
    show: {x: 0},
    hidden: {
        x: -6
    }
}
const raySE = {
    show: {x: 0, y: 0},
    hidden: {
        x: -4.3, y: -4.3
    }
}
const rayNW = {
    show: {x: 0, y: 0},
    hidden: {
        x: 4.3, y: 4.3
    }
}
const raySW = {
    show: {x: 0, y: 0},
    hidden: {
        x: 4.3, y: -4.3
    }
}
const rayNE = {
    show: {x: 0, y: 0},
    hidden: {
        x: -4.3,
        y: 4.3
    }
}

const moonTransition = {
    transition: {
        delay: 0.1,
        rotate: {
            delay: 0.3,
            duration: 0.3
        },
        scale: {
            delay: 0.25,
            duration: 0.6
        }
    }
}

const moonVariants: Variants = {
    hidden: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        ...moonTransition
    },
    show: {
        opacity: 0,
        scale: 0.4,
        rotate: -270,
        ...moonTransition
    },
}

const Sun = ({toggleTheme, theme}) => {
    return (
        <StyledSun
            onClick={() => {
                toggleTheme();
                console.log('clicked');
            }}
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={'show'}
            animate={theme ? 'show' : 'hidden'}
        >
            <StyledCircle variants={circleVaraints} style={{originX: '12px', originY: '12px'}}>
                //N
                <motion.path d="M12 3 L12 1" variants={rays}/>
                //NE
                <motion.path d="M19.78 4.22 L18.36 5.64" variants={rays}/>
                //E
                <motion.path d="M23 12 L21 12" variants={rays}/>
                //SE
                <motion.path d="M19.78 19.78 L18.36 18.36" variants={rays}/>
                //S
                <motion.path d="M12 21 L12 23" variants={rays}/>
                //SW
                <motion.path d="M5.64 18.36 L4.22 19.78" variants={rays}/>
                //W
                <motion.path d="M1 12 L3 12" variants={rays}/>
                //NW
                <motion.path d="M5.64 5.64 L4.22 4.22" variants={rays}/>
                <circle cx={12} cy={12} r={5}/>
            </StyledCircle>
            //Moon
            <motion.path style={{originX: '12px', originY: '12px'}} variants={moonVariants} opacity='0'
                         d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </StyledSun>
    )
}

export default Sun;
