import React from 'react';
import { Formik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import email from 'emailjs-com';
import styled from 'styled-components';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';


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

const ContactForm = () => {

    return (
        <StyledForm>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    email
                        .send(
                            process.env.REACT_APP_EMAIL_JS_SERVICE_ID!,
                            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID!,
                            {
                                name: values.name,
                                title: values.title,
                                message: values.message,
                                from_email: values.email,
                                reply_to: values.email,
                            },
                            process.env.REACT_APP_EMAIL_JS_TOKEN,
                        )
                        .then(() => {
                                console.log('nana');
                            },
                            error => {
                                console.log(error);
                            },
                        );
                }}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      touched,
                      errors,
                      isSubmitting,
                  }) => {
                    const isError = (type) => !!(touched[type] && errors[type]);
                    const helperText = (type) => isError(type) && errors[type];
                    const standardTextfield = (type: string, inputType = 'text'): TextFieldProps => ({
                        variant: 'filled',
                        name: type,
                        type: inputType,
                        label: `Your ${type}`,
                        autoComplete: 'off',
                        value: values[type],
                        size: 'small',
                    });

                    return (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                {...standardTextfield('name')}
                            />
                            <TextField
                                {...standardTextfield('email', 'email')}
                            />
                            <TextField
                                {...standardTextfield('title')}
                            />
                            <TextField
                                {...standardTextfield('message')}
                                multiline
                                rows={7}
                            />
                            <Button
                                variant='outlined'
                                color='primary'
                                className='contact-button custom-button'
                                size='large'
                                type='submit'
                                disabled={isSubmitting}
                                endIcon={''}
                            >
                                Send
                            </Button>
                        </form>
                    );
                }}
            </Formik>
        </StyledForm>
    );
};

export default ContactForm;
