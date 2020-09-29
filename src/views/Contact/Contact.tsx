import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Hero from '../../components/Hero/Hero';
import StyledTop from '../../styles/Top';
import ContactForm from '../../components/ContactForm/ContactForm';


const StyledContact = styled.div`
  width: 100%;

`;

const Contact = ({ pageTitle }) => {

    return (
        <StyledContact>
            <Container>
                <StyledTop>
                    <section>
                        <Hero
                            title={'Contact'}
                            fLine={'Contact'}
                            sLine={'Send me an email'}
                            content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus distinctio doloremque dolores dolorum, earum facere, id illum in ipsum, itaque laudantium magni maiores molestiae mollitia neque nostrum qui repellendus.'}
                        />
                    </section>
                    <section>
                        <ContactForm/>
                    </section>
                </StyledTop>
            </Container>
        </StyledContact>
    );
};

export default Contact;
