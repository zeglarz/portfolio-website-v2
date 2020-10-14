import React from 'react';
import styled from 'styled-components/macro';
import { Container } from '@material-ui/core';
import Hero from '../../components/Hero';
import StyledTop from '../../styles/Top';
import ContactForm from '../../components/ContactForm/ContactForm';

const StyledContact = styled.div`
  width: 100%;
`;

const Contact = (props) => {
  return (
    <StyledContact>
      <Container>
        <StyledTop noReverse>
          <section>
            <Hero {...props} />
          </section>
          <section>
            <ContactForm />
          </section>
        </StyledTop>
      </Container>
    </StyledContact>
  );
};

export default Contact;
