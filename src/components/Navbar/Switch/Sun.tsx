import React, {useState} from "react"
import {motion} from "framer-motion";
import styled from 'styled-components';

const StyledSun = styled(motion.svg)`
`;
const circle = {
    show: {},
    hidden: {
        rotate: -360,
        transition: {staggerChildren: 0.05, staggerDirection: 1, delayChildren: 0.2}
    }
};

const rayN = {
    show: {y: 0},
    hidden: {
        y: 6
    }
}
const rayW = {
    hidden: {
        x: 6
    }
}
const rayS = {
    hidden: {
        y: -6
    }
}
const rayE = {
    hidden: {
        x: -6
    }
}
const raySE = {
    hidden: {
        x: -4.3, y: -4.3
    }
}
const rayNW = {
    hidden: {
        x: 4.3, y: 4.3
    }
}
const raySW = {
    hidden: {
        x: 4.3, y: -4.3
    }
}
const rayNE = {
    hidden: {
        x: -4.3,
        y: 4.3
    }
}


const Sun = ({toggleTheme}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <StyledSun
            onClick={() => {
                toggleTheme();
                setIsOpen(!isOpen);
                console.log('clicked');
            }}
            variants={circle}
            initial={'show'}
            animate={isOpen ? 'hidden' : 'show'}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <motion.g>
                <circle cx={12} cy={12} r={5}/>
                //N
                <motion.line x1="12" y1="1" x2="12" y2="3" variants={rayN}/>
                //NE
                <motion.line x1="18.36" y1="5.64" x2="19.78" y2="4.22" variants={rayNE}/>
                //E
                <motion.line x1="21" y1="12" x2="23" y2="12" variants={rayE}/>
                //SE
                <motion.line x1="18.36" y1="18.36" x2="19.78" y2="19.78" variants={raySE}/>
                //S
                <motion.line x1="12" y1="21" x2="12" y2="23" variants={rayS}/>
                //SW
                <motion.line x1="4.22" y1="19.78" x2="5.64" y2="18.36" variants={raySW}/>
                //W
                <motion.line x1="1" y1="12" x2="3" y2="12" variants={rayW}/>
                //NW
                <motion.line x1="4.22" y1="4.22" x2="5.64" y2="5.64" variants={rayNW}/>
            </motion.g>
            //Moon
            <motion.path opacity='0' d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </StyledSun>
    )
}

export default Sun;
