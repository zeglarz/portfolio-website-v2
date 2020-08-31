import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

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

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    li a {
            padding: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
    }
`

const NavLinks = () => {
    return (
        <StyledList>
            {links.map(link =>
                (
                    <li key={link.title}>
                        <NavLink to={link.to}>{link.title}</NavLink>
                    </li>
                )
            )}
        </StyledList>
    );
}

export default NavLinks;
