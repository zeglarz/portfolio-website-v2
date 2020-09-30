import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import { Container } from '@material-ui/core';
import Image from '../../components/Hero/Image/Image';
import StyledTop from '../../styles/Top';


const Projects = () => {

    useEffect(() => {
        document.title = `Projects · Konrad Rudnicki`;
    });

    return (
        <div>
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
            </Container>
        </div>
    );
};

export default Projects;

