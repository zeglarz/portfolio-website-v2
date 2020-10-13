import React, { MutableRefObject, useEffect, useRef } from 'react';
import { Container } from '@material-ui/core';
import Hero from '../../components/Hero';
import Image from '../../components/Hero/Image';
import StyledTop from '../../styles/Top';
import ProjectList from '../../components/ProjectList/ProjectList';
import Title from '../../styles/Title';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Banner from '../../components/Banner';
const Projects = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Projects · Konrad Rudnicki`;
  }, []);
  const ref: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(
    null
  );
  const scroll = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Container>
      <StyledTop reverse>
        <section>
          <Hero
            title={'Projects'}
            fLine={"They say it's all about the projects"}
            sLine={"See what I've done"}
            content={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus.'
            }
            bText="See my projects"
            onClick={() => scroll()}
            bIcon={<VisibilityIcon />}
          />
        </section>
        <section>
          <Image src={'//unsplash.it/500/500'} />
        </section>
      </StyledTop>
      <div className="middle" style={{ marginTop: 85 }}>
        <Title section ref={ref}>
          <div className="line-wrapper">
            <div className="line">I put my whole heart</div>
          </div>
          <div className="line-wrapper">
            <div className="line">In every single project</div>
          </div>
        </Title>
        <div className={'paragraph'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          accusantium amet asperiores consequatur cumque, doloremque et fugit
          harum, illum incidunt ipsam iusto molestias natus nisi perspiciatis
          quae quasi repudiandae sapiente?
        </div>
        <div style={{ marginBottom: '4rem' }} />
        <ProjectList />
      </div>
      <Banner
        fLine="Do you feel like"
        sLine="reaching out to me?"
        content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae commodi consectetur cum dolorem doloribus, fugiat id libero minima molestiae necessitatibus nihil odio quam quia quisquam quo tenetur ullam voluptas!"
        bText="Get in touch"
        bPath="/contact"
      />
    </Container>
  );
};

export default Projects;
