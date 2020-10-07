import React, {useEffect, useState} from "react"
import {motion, Variants} from "framer-motion";
import styled from 'styled-components/macro';

const StyledCircle = styled(motion.g)`
    fill: ${({theme, custom}) => custom ? theme.colors.background : 'none'};
    stroke: ${({theme}) => theme.colors.text};    
`

const StyledSun = styled(motion.svg)`
cursor: pointer;
margin: 10px;
  &:hover ${StyledCircle} {
        stroke: ${({theme}) => theme.gradients.svg};
    }
`;

const circleTransition = {
    transition: {
        rotate: {
            delay: 0.3,
            duration: 0.3
        },
        staggerChildren: 0.045,
        staggerDirection: 1,
        delayChildren: 0.15,
        duration: 0.25,
        opacity: {delay: 0.15}
    }
}
const circleVaraints: Variants = {
    show: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        ...circleTransition
    },
    hidden: {
        scale: 0.8,
        rotate: -90,
        opacity: 0,
        ...circleTransition
    },
};

const rayN = {
    show: {
        y: 0
    },
    hidden: {
        y: 6,
    }
}
const rayW = {
    show: {
        x: 0
    },
    hidden: {
        x: 6,
    }
}
const rayS = {
    show: {
        y: 0
    },
    hidden: {
        y: -6,
    }
}
const rayE = {
    show: {
        x: 0
    },
    hidden: {
        x: -6,
    }
}
const raySE = {
    show: {
        x: 0,
        y: 0
    },
    hidden: {
        x: -4.3,
        y: -4.3
    }
};

const rayNW = {
    show: {x: 0, y: 0},
    hidden: {
        x: 4.3, y: 4.3

    }
};

const raySW = {
    show: {x: 0, y: 0},
    hidden: {
        x: 4.3, y: -4.3
    }
};

const rayNE = {
    show: {
        x: 0, y: 0
    },
    hidden: {
        x: -4.3,
        y: 4.3,
    }
};

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
};

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
    const [iconClicked, setIconClicked] = useState(false);
    useEffect(() => {
        setTimeout(() => setIconClicked(false), 500);
    }, [iconClicked])
    return (
        <StyledSun
            onClick={() => {
                !iconClicked && toggleTheme();
                !iconClicked && setIconClicked(true);
            }}
            width={20}
            whileHover={{stroke: 'url(#light)'}}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={theme ? 'show' : 'hidden'}
            animate={theme ? 'show' : 'hidden'}
        >
            <StyledCircle variants={circleVaraints} style={{originX: '12px', originY: '12px'}} custom={iconClicked}>
                //N
                <motion.line x1="12" y1="1" x2="12.001" y2="3" variants={rayN}/>
                //NE
                <motion.line x1="18.36" y1="5.64" x2="19.78" y2="4.22" variants={rayNE}/>
                //E
                <motion.line x1="21" y1="12.001" x2="23" y2="12" variants={rayE}/>
                //SE
                <motion.line x1="18.36" y1="18.36" x2="19.78" y2="19.78" variants={raySE}/>
                //S
                <motion.line x1="12" y1="21" x2="12.001" y2="23" variants={rayS}/>
                //SW
                <motion.line x1="4.22" y1="19.78" x2="5.64" y2="18.36" variants={raySW}/>
                //W
                <motion.line x1="1" y1="12.001" x2="3" y2="12" variants={rayW}/>
                //NW
                <motion.line x1="4.22" y1="4.22" x2="5.64" y2="5.64" variants={rayNW}/>
                <circle cx={12} cy={12} r={5}/>
            </StyledCircle>
            //Moon
            <motion.path
                style={{originX: '12px', originY: '12px'}}
                variants={moonVariants}
                opacity='0'
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            />
        </StyledSun>
    )
}

export default Sun;
