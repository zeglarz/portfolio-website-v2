import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import media from '../../../styles/style';
import Divider from '../../Divider/Dividier';
import Sun from '../Switch/Sun';
import { LINKS as links } from '../constants';


const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
     ${media.desktop`
        display: none;
    `}
`;

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    li {
        a {
            cursor: pointer;
            display: flex;
            font-size: 0.8rem;
            font-family: 'Lato';
            font-weight: 300;
            padding: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all ease-in-out 200ms;
            color: ${({ theme }) => theme.colors.text};
            
            ${media.bigDesktop`
                font-size: 0.7rem;
                padding: 0.8rem 0.5rem;
                font-weight: 400;
            `}
            
            &.active {
                  display: inline-block;
                  background: ${({ theme }) => theme.gradients.primary};
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  -webkit-box-decoration-break: clone;
            }
            &:hover {
                  color: ${({ theme }) => theme.gradients.primary};
                  svg {
                      fill: ${({ theme }) => theme.gradients.svg};
                  }
            }
        } 
        svg {
            margin: 5px;
        }
    }
    
`;

const NavLinks = ({ toggleTheme, theme }) => {
    return (
        <StyledLinkContainer>
            <StyledList>
                {links.map(link =>
                    (
                        <li key={link.title}>
                            <NavLink to={link.to}>{link.title}</NavLink>
                        </li>
                    ),
                )}
                <Divider vert/>
                <li>
                    <Sun toggleTheme={toggleTheme} theme={theme}/>
                </li>
            </StyledList>
        </StyledLinkContainer>
    );
};

export default NavLinks;
