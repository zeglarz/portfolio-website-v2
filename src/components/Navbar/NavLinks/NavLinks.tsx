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
    },
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
            display: flex;
            font-size: 0.8rem;
            font-family: 'Lato';
            font-weight: 300;
            padding: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all ease-in-out 200ms;
            color: ${({theme}) => theme.colors.text};
            ${media.bigDesktop`
                font-size: 0.7rem;
                padding: 0.8rem 0.5rem;
                font-weight: 400;
            `}
            &.active {
                  display: inline-block;
                  background: ${({theme}) => theme.gradients.primary};
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  -webkit-box-decoration-break: clone;
            }
            &:hover {
                  color: ${({theme}) => theme.gradients.primary};
        }
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
