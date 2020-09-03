import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button, Tooltip} from '@material-ui/core';
import media from '../../styles/style';


const StyledLink = styled.a.attrs({
    rel: 'noopener noreferrer',
    target: '_blank',
})`

`;

const Hero = () => {
    return (
        <StyledLink href={'/book'}>lol</StyledLink>
    );
}

export default Hero;
