import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const links = [
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

const NavLinks = () => {
    return (
        <ul>
            {links.map(link =>
                (
                    <li key={link.title}>
                        <NavLink to={link.to}>{link.title}</NavLink>
                    </li>
                )
            )}
        </ul>
    );
}

export default NavLinks;
