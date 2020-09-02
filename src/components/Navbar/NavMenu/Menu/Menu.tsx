import React from 'react';
import {StyledMenu, StyledContainer} from './MenuStyle';
import {NavLink} from 'react-router-dom';
import {LINKS as links} from '../../constants'
import {motion} from 'framer-motion';

const mainTransition = {
    transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1
    }
}

const menuVariants = {
    hidden: {
        y: '-100vh',
    },
    show: {
        y: 0,
        ...mainTransition
    }
}

const childrenTransition = {
    transition: {
        duration: 1,
    }
}

const childrenVariants = {
    hidden: {
        y: 100
    },
    show: {
        y: 0,
        ...childrenTransition
    }
}

const Menu = ({menuOpen}) => {
    return (
        <StyledMenu variants={menuVariants} initial={'hidden'} animate={menuOpen ? 'show' : 'hidden'}>
            <div className='backdrop'/>
            <div className='menu-container'>
                <StyledContainer>
                    <nav className='menu-links'>
                        <ul>
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
                        </ul>
                    </nav>
                </StyledContainer>
            </div>
        </StyledMenu>
    );
}

export default Menu;
