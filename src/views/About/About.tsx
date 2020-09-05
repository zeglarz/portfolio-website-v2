import React, {useEffect} from 'react';
import Hero from '../../components/Hero/Hero';
import styled from 'styled-components';
import {Container} from '@material-ui/core';
import media from '../../styles/style';
import {TECHS as techs} from './constants';
import {Title} from '../../styles/Title';

const StyledAbout = styled.div`
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
                        <img style={{display: 'flex', maxWidth: 480, width: '100%'}} src={'//unsplash.it/501/501'}/>
                    </section>
                </div>
                <div>
                    <div>
                        <div>
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
                        </div>
                        <div>
                            {techs.map(tech =>
                                <div className='skills__list__set' key={tech.title}>
                                    <h3>{tech.title}</h3>
                                    <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                                        {tech.stack.map(stack =>
                                            <li className='item' style={{width: '33.3%'}} key={stack.name}>
                                                <img src={'//unsplash.it/50/50'}
                                                     alt={stack.name}/>
                                                <h4 className='item__title'>{stack.name}</h4>
                                                <p className='item__level'>{stack.proficiency}</p>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </StyledAbout>
    );
};

export default About;

