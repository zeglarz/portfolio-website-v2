import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { TECHS as techs } from './constants';
import { Title } from '../../styles/Title';


const ListContainer = styled.div`
      width: 100%;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      @media (max-width: 768px) {
        align-items: flex-end;
      }
      
      div {
        width: 90%;
        margin-bottom: 5rem;
        @media (max-width: 768px) {
          width: 100%;
          margin-bottom: 3rem;
       }
        h3 {
          text-align: center;
          margin-bottom: 3rem;
          font-family: 'Abril', 'Lato';
          color: ${({ theme }) => theme.colors.text};
          @media (max-width: 768px) {
            text-align: start;
            margin-bottom: 1rem;
          }
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
          list-style: none;
          @media (max-width: 768px) {
            justify-content: space-between;
          }
          li {
            width: 33.3%;
            transition: background ease 250ms;
            padding: 1.5rem 0 1rem 0;
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            cursor: default;
            
            img {
              width: 85px;
              height: auto;
              margin: 0 auto;
              @media (max-width: 768px) {
                width: auto;
                height: 60px;
              }
            }
            h4 {
              color: ${({ theme }) => theme.colors.text};
              text-align: center;
              margin: 1rem 0 0.25rem 0;
            }
            p {
              text-align: center;
              color: ${({ theme }) => theme.colors.text};
            }
            &:hover {
              background: ${({ theme }) => theme.colors.text};
              box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
            }
          }
        }
      }
`;

const Header = styled.div`
      position: sticky;
      top: 6rem;
      align-self: flex-start;
      padding-bottom: 4.46rem;
      @media (max-width: 768px) {
        position: static;
        padding: 0 0 2rem 0;
      }
`;

const StyledAbout = styled.div`
  width: 100%;

  .skills {
    margin: 14rem 0 5rem 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 768px) {
      margin-top: 4rem;
      margin-bottom: 0;
      flex-direction: column;
      justify-content: flex-start;
    }
 
  }
`;

const About = () => {

    useEffect(() => {
        document.title = `Home · Konrad Rudnicki`;
    });

    return (
        <StyledAbout>
            <Container>
                <div className='top'>
                    <section>
                        <Hero
                            title={'About'}
                            fLine={'Want to know'}
                            sLine={'more about me?'}
                            content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus.'}
                        />
                    </section>
                    <section>
                        <img style={{ display: 'flex', maxWidth: 480, width: '100%' }} src={'//unsplash.it/501/501'}/>
                    </section>
                </div>
                <div className={'middle'}>
                    <div className={'skills'}>
                        <Header>
                            <Title pageTitle>Skills</Title>
                            <Title section>
                                <div className='line-wrapper'>
                                    <div className='line'>Technologies I know</div>
                                </div>
                                <div className='line-wrapper'>
                                    <div className='line'>I use some everyday</div>
                                </div>
                            </Title>
                            <div className='paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae commodi
                                consectetur cum dolorem doloribus, fugiat id libero minima molestiae necessitatibus
                                nihil odio quam quia quisquam quo tenetur ullam voluptas!
                            </div>
                        </Header>
                        <ListContainer>
                            {techs.map(tech =>
                                <div key={tech.title}>
                                    <h3>{tech.title}</h3>
                                    <ul>
                                        {tech.stack.map(stack =>
                                            <li key={stack.name}>
                                                <img src={stack.image} alt={stack.name}/>
                                                <h4>{stack.name}</h4>
                                                <p>{stack.proficiency}</p>
                                            </li>,
                                        )}
                                    </ul>
                                </div>,
                            )}
                        </ListContainer>
                    </div>
                </div>
            </Container>
        </StyledAbout>
    );
};

export default About;

