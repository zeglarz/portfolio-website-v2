import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Image from '../../components/Hero/Image/Image';
import media from '../../styles/style';


interface IPageWrapper {
    reverse?: boolean;
}

const StyledTop = styled.div<IPageWrapper>`
 display: flex;
        width: 100%;
        height: 100%;
        min-height: calc(100vh - 85px);
        flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
        ${media.tablet`
            min-height: 750px;
            flex-direction: column-reverse;
        `}
        ${media.desktop`
            padding-top: 100px;
            padding-bottom: 100px;    
        `}
`;

const Home = () => {

    useEffect(() => {
        document.title = `Home · Konrad Rudnicki`;
    });

    return (
        <div>
            <Container>
                <StyledTop reverse>
                    <section>
                        <Hero
                            withSocial
                            title={'Home'}
                            fLine={'Welcome to my'}
                            sLine={'personal porfolio'}
                            content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus.'}
                        />
                    </section>
                    <section>
                        <Image src={'//unsplash.it/500/500'}/>
                    </section>
                </StyledTop>
            </Container>
        </div>
    );
};

export default Home;

