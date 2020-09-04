import React, {useEffect} from 'react';
import Hero from '../../components/Hero/Hero';
import styled from 'styled-components';
import {Container} from '@material-ui/core';


const SHome = styled.div`
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
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
      .item {
        .counter {
          font-size: 3rem;
          @media (max-width: 1200px) {
            font-size: 2.75rem;
          }
          @media (max-width: 992px) {
            font-size: 2.5rem;
          }
          @media (max-width: 768px) {
            font-size: 2.25rem;
          }
          @media (max-width: 576px) {
            font-size: 2rem;
          }
          color: ${({theme}) => theme.colors.text};
          font-family: 'Lato';
        }
        .text {
          color: ${({theme}) => theme.colors.text};
        }
      }
    }
  }
`;

const Home = ({pageTitle}) => {

    useEffect(() => {
        document.title = ` ${pageTitle} · Konrad Rudnicki`;
    });

    return (
        <SHome>
            <Container>
                <div className='top --reverse'>
                    <section>
                        <div style={{height: 400, width: '100%', display: 'flex'}}>
                            <h1>Welcome to</h1>
                            <h2>my personal portfolio</h2>
                        </div>
                    </section>
                    <section>
                        <img style={{display: 'flex', maxWidth: 480, width: '100%'}} src={'//unsplash.it/500/500'}/>
                    </section>
                </div>
            </Container>
        </SHome>
    );
};

export default Home;

