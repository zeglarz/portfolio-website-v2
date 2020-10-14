import React, { MutableRefObject, useEffect, useRef } from 'react';
import { Container } from '@material-ui/core';
import Hero from '../../components/Hero';
import Image from '../../components/Hero/Image';
import StyledTop from '../../styles/Top';
import ProjectList from '../../components/ProjectList/ProjectList';
import Title from '../../styles/Title';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Banner from '../../components/Banner';

const Index = (props): JSX.Element => {
  const {
    p1: { body, fLine, sLine },
    banner,
    ...rest
  } = props;

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
          <Hero {...rest} onClick={() => scroll()} />
        </section>
        <section>
          <Image src={'//unsplash.it/500/500'} />
        </section>
      </StyledTop>
      <div className="middle" style={{ marginTop: 85 }}>
        <Title section ref={ref}>
          <div className="line-wrapper">
            <div className="line">{fLine}</div>
          </div>
          <div className="line-wrapper">
            <div className="line">{sLine}</div>
          </div>
        </Title>
        <div className={'paragraph'}>{body}</div>
        <div style={{ marginBottom: '4rem' }} />
        <ProjectList />
      </div>
      <Banner {...banner} />
    </Container>
  );
};

export default Index;
