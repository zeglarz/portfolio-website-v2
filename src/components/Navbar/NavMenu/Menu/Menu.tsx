import React from 'react';
import { StyledMenu, StyledContainer } from './MenuStyle';
import { NavLink } from 'react-router-dom';
import { LINKS as links } from '../../constants';
import { motion } from 'framer-motion';


const menuVariants = {
    hidden: custom => ({
        transitionEnd: {
            display: 'none',
        },
        transition: {
            when: 'afterChildren',
            staggerChildren: 0.06,
            delayChildren: 0.3,
            staggerDirection: custom ? 1 : -1,
        },
    }),
    show: custom => ({
        zIndex: 4,
        display: 'block',
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.06,
            staggerDirection: custom ? 1 : -1,
        },
    }),
};

const childrenTransition = {
    transition: {
        duration: 0.35,
    },
};

const childrenVariants = {
    hidden: {
        y: [0, -100],
        transition: {
            duration: 0.1,
        },
    },
    show: {
        y: [100, 0],
        ...childrenTransition,
    },
};

const backdropVariants = {
    hidden: {
        height: 0,
        skewY: [0, 2.5, 0],
        transition: {
            duration: 0.5,
            skewY: {
                delay: 0.1,
            },
        },
    },
    show: {
        height: '100%',
        skewY: [0, 2.5, 0],
        transition: {
            duration: 0.4,
            skewY: {
                delay: 0.1,
            },
        },
    },
};

const listVariants = {
    show: {
        transition: {
            staggerChildren: 0.23,
            delayChildren: 0.25,
        },
    },
    hidden: {
        transition: {
            staggerChildren: 0.03,
        },
    },
};

const Menu = ({ menuOpen }) => {
    return (
        <StyledMenu variants={menuVariants} initial={'hidden'} animate={menuOpen ? 'show' : 'hidden'} custom={menuOpen}>
            <motion.div className='backdrop' variants={backdropVariants} style={{ originX: 0, originY: 0 }}/>
            <motion.div className='menu-container' variants={backdropVariants} style={{ originX: 0, originY: 0 }}>
                <StyledContainer>
                    <nav className='menu-links'>
                        <motion.ul variants={listVariants}>
                            {links.map(link =>
                                (
                                    <li key={link.to}>
                                        <motion.div className={'motionContainer'} variants={childrenVariants}
                                                    custom={menuOpen}
                                                    whileHover={{
                                                        y: 3,
                                                        scale: 0.9,
                                                        transition: { duration: 0.3 },
                                                    }}>
                                            <NavLink to={link.to}>
                                                {link.title}
                                            </NavLink>
                                        </motion.div>
                                    </li>
                                ),
                            )}
                        </motion.ul>
                    </nav>
                </StyledContainer>
            </motion.div>
        </StyledMenu>
    );
};

export default Menu;
