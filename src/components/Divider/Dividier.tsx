import React from 'react';
import styled from 'styled-components';
import media from '../../styles/style';

interface IDivider {
    vert?: boolean;
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
    width: ${({vert}) => (vert ? '1px' : '40px')};
    height: ${({vert}) => (vert ? '20px' : '1px')};
    background: black;
    opacity: 0.25;
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
