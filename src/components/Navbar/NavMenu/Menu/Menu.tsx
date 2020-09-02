import React from 'react';
import {StyledMenu, StyledContainer} from './MenuStyle';
import {NavLink} from 'react-router-dom';
import {LINKS as links} from '../../constants'

const menuVariants = {
    hidden: {
        y: '-100vh'
    },
    show: {
        y: 0
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
                                        <NavLink to={link.to}>
                                            {link.title}
                                        </NavLink>
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
