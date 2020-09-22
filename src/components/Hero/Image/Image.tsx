import React, { FunctionComponent } from 'react';
import styled from 'styled-components';


interface ImageProps {
    src: string;
}

const StyledImgContainer = styled.div`
 display: flex;
 max-width: 480px;
 width: 100%;
`;

const Image: FunctionComponent<ImageProps> = ({ src }) => {
    return (
        <StyledImgContainer>
            <img src={src} alt={''}/>
        </StyledImgContainer>
    );
};

export default Image;
