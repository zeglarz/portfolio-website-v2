import React, {useEffect} from 'react';
import Hero from '../../components/Hero/Hero';
import styled from 'styled-components';
import {Container} from '@material-ui/core';
import media from '../../styles/style';

const StyledHome = styled.div`
  .mid {
    .about {
      display: grid;
      grid-column-gap: 6rem;
      grid-row-gap: 2rem;
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
      a {
        text-decoration: underline;
        transition: all ease-in-out 250ms;
        font-weight: 700;
        &:hover {
          color: ${({theme}) => theme.colors.text};
        }
      }
      ${media.thone`
        grid-template-columns: 1fr;
      `}
    }
  }
`;

const Home = () => {

    useEffect(() => {
        document.title = `Home · Konrad Rudnicki`;
    });

    return (
        <StyledHome>
            <Container>
                <div className='top --reverse'>
                    <section>
                        <Hero
                            title={'Home'}
                            fLine={'Welcome to my'}
                            sLine={'personal porfolio'}
                            content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus.'}
                        />
                    </section>
                    <section>
                        <img style={{display: 'flex', maxWidth: 480, width: '100%'}} src={'//unsplash.it/500/500'}/>
                    </section>
                </div>
            </Container>
        </StyledHome>
    );
};

export default Home;

