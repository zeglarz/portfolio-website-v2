import React from 'react';
import styled from 'styled-components';
import Right from './Right';
import Left from './Left';
import media from '../../styles/style';


const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem 2rem;
    margin: 0 auto;
    max-width: 1920px;
    ${media.tablet`
      padding: 1rem;
    `}
`;

const Footer = ({ showVert }) => {
    return (
        <StyledFooter>
            <Left showVert={showVert}/>
            <Right showVert={showVert}/>
        </StyledFooter>
    );
};

export default Footer;
