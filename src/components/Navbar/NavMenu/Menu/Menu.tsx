import React from 'react';
import {StyledMenu, StyledContainer} from './MenuStyle';
import {NavLink} from 'react-router-dom';
import {LINKS as links} from '../../constants'

const Menu = () => {
    return (
        <StyledMenu>
            <div className='menu-secondary-background'/>
            <div className='menu-layer'>
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
