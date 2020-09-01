import React, {useState} from 'react';
import ThemeIcon from '../Switch/Sun';
import styled from 'styled-components';
import Burger from "./Burger/Burger";
import media from '../../../styles/style';
import Menu from "./Menu/Menu";

const StyledNavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
    @media (min-width: 1001px) {
    display: none;
  }
`;


const NavMenu = ({toggleTheme, theme}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <StyledNavMenu>
            <Burger className={isOpen ? 'is-active' : ''} onClick={() => setIsOpen(!isOpen)}/>
            <ThemeIcon toggleTheme={toggleTheme} theme={theme}/>
            {isOpen && <Menu/>}
        </StyledNavMenu>
    );
}

export default NavMenu;
