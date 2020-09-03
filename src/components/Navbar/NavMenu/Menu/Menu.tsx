import React from 'react';
import {StyledMenu, StyledContainer} from './MenuStyle';
import {NavLink} from 'react-router-dom';
import {LINKS as links} from '../../constants'
import {motion} from 'framer-motion';

const mainTransition = {
    transition: custom => ({
        staggerChildren: 2.33,
        delayChildren: 0.1,
        staggerDirection: custom ? -1 : 1
    })
}

const menuVariants = {
    hidden: custom => ({
        y: '0',
        transition: {
            staggerChildren: 0.13,
            delayChildren: 0.1,
            staggerDirection: custom ? 1 : -1
        }
    }),
    show: custom => ({
        y: 0,
        transition: {
            staggerChildren: 0.13,
            delayChildren: 0.1,
            staggerDirection: custom ? 1 : -1
        }
    })
}

const childrenTransition = {
    transition: {
        duration: 0.65,
    }
}

const childrenVariants = {
    hidden: {
        y: 100,
        ...childrenTransition
    },
    show: {
        y: 0,
        ...childrenTransition
    }
}

const backdropTransition = {
    transition: {
        duration: 2.7,
        skewY: {
            delay: 0.5
        }
    }
}

const backdropVariants = {
    hidden: {
        height: 0,
        skewY: 3,
        ...backdropTransition
    },
    show: {
        height: '100%',
        skewY: 0,
        ...backdropTransition
    }
}

const listVariants = {
    show: {
        transition: {
            staggerChildren: 0.23,
            delayChildren: 0.25
        }
    },
    hidden: {
        transition: {
            staggerChildren: 0.13,
            delayChildren: 0.3
        }
    }
}

const Menu = ({menuOpen}) => {
    return (
        <StyledMenu variants={menuVariants} initial={'hidden'} animate={menuOpen ? 'show' : 'hidden'} custom={menuOpen}>
            <motion.div className='backdrop' variants={backdropVariants}/>
            <motion.div className='menu-container' variants={backdropVariants}>
                <StyledContainer>
                    <nav className='menu-links'>
                        <motion.ul variants={listVariants}>
                            {links.map(link =>
                                (
                                    <li>
                                        <motion.div variants={childrenVariants}>
                                            <NavLink to={link.to}>
                                                {link.title}
                                            </NavLink>
                                        </motion.div>
                                    </li>
                                )
                            )}
                        </motion.ul>
                    </nav>
                </StyledContainer>
            </motion.div>
        </StyledMenu>
    );
}

export default Menu;
