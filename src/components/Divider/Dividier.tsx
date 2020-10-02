import React from 'react';
import styled from 'styled-components';
import media from '../../styles/style';


interface IDivider {
    vert?: boolean;
    long?: boolean;
}

const StyledDivider = styled.div<IDivider>`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    
    ${media.desktop`
        display: none;
    `}
    span {
    width: ${({ vert }) => (vert ? '1px' : '40px')};
    height: ${({ vert, long }) => (vert ? (long ? '40px' : '20px') : '1px')};
    background: ${({ theme }) => theme.colors.text};
    opacity: 0.3;
    }
`;

const Divider = props => {
    return (
        <StyledDivider {...props}>
            <span/>
        </StyledDivider>
    );
};

export default Divider;
