import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import { Container } from '@material-ui/core';
import Image from '../../components/Hero/Image/Image';
import StyledTop from '../../styles/Top';
import ProjectList from '../../components/ProjectList/ProjectList';
import { Title } from '../../styles/Title';


const Projects = () => {

    useEffect(() => {
        document.title = `Projects · Konrad Rudnicki`;
    });

    return (
        <Container>
            <StyledTop reverse>
                <section>
                    <Hero
                        title={'Projects'}
                        fLine={'They say it\'s all about the projects'}
                        sLine={'See what I\'ve done'}
                        content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus.'}
                    />
                </section>
                <section>
                    <Image src={'//unsplash.it/500/500'}/>
                </section>
            </StyledTop>
            <div className='middle' style={{ marginTop: 85 }}>
                <Title section>
                    <div className='line-wrapper'>
                        <div className='line'>I put my whole heart</div>
                    </div>
                    <div className='line-wrapper'>
                        <div className='line'>In every single project</div>
                    </div>
                </Title>
                <div className={'paragraph'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet asperiores consequatur
                    cumque, doloremque et fugit harum, illum incidunt ipsam iusto molestias natus nisi perspiciatis quae
                    quasi repudiandae sapiente?
                </div>
                <ProjectList/>
            </div>
        </Container>
    );
};

export default Projects;

