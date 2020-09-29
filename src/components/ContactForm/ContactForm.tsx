import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import email from 'emailjs-com';
import styled from 'styled-components';


interface ContactFormProps {

}

const initialValues = {
    email: '',
    name: '',
    title: '',
    message: '',
};

const StyledForm = styled.div`
width: 100%;
  margin: 0 auto;
  max-width: 400px;
  margin-inline-end: 2rem;
  form {
    display: grid;
    grid-gap: 1rem;
    button {
      justify-content: center;
      height: 45px;
    }
  }
form div {
width: 100%;
display: block;
}
`;

const ContactForm: FunctionComponent<ContactFormProps> = () => {
    return (
        <StyledForm>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, { setErrors }) => {
                }}
            >
                {({ isSubmitting }) =>
                    (
                        <form>
                            <TextField
                                variant='filled'
                                name={'name'}
                                label={'Name'}
                                type={'text'}
                            />
                            <TextField
                                variant='filled'
                                name={'email'}
                                label={'Email'}
                                type={'email'}
                            />
                            <TextField
                                variant='filled'
                                name={'title'}
                                label={'Title'}
                                type={'text'}
                            />
                            <TextField
                                variant='filled'
                                name={'message'}
                                label={'Your Message'}
                                type={'text'}
                            />
                            <Button
                                variant='outlined'
                            >
                                Send
                            </Button>
                        </form>
                    )}
            </Formik>
        </StyledForm>
    );
};

export default ContactForm;
