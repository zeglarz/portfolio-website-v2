import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
import media from '../../../styles/style';
import Divider from "../../Divider/Dividier";

interface Links {
    title: string,
    to: string,
}

const links: Links[] = [
    {
        title: 'Home',
        to: '/home'
    },
    {
        title: 'About Me',
        to: '/about'
    },
    {
        title: 'Projects',
        to: '/projects'
    },
    {
        title: 'Contact',
        to: '/contact'
    }
]

const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
     ${media.desktop`
        display: none;
    `}
`

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    li a {
            padding: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: ${({theme}) => theme.colors.text}
    }
    
`

const NavLinks = ({toggleTheme}) => {
    return (
        <StyledLinkContainer>
            <StyledList>
                {links.map(link =>
                    (
                        <li key={link.title}>
                            <NavLink to={link.to}>{link.title}</NavLink>
                        </li>
                    )
                )}
            </StyledList>
            <Divider vert/>
            <button onClick={toggleTheme}>Switch Theme</button>
        </StyledLinkContainer>
    );
}

export default NavLinks;
