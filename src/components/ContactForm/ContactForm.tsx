import React from 'react';
import { Formik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import email from 'emailjs-com';
import styled from 'styled-components';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import { object, string } from 'yup';


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

const validationSchema = object().shape({
    email: string()
        .email('Please make sure you\'ve entered an valid email.')
        .required('Provide me your email so I can get back to you.'),
    name: string()
        .min(2, 'Please enter a correct name.')
        .max(100, 'Name is too long.')
        .required('Please enter your name.'),
    title: string()
        .min(2, 'The email title is too short.')
        .max(100, 'The email title is too long.')
        .required('The title is required'),
    message: string()
        .min(10, 'Minimum character count is 10.')
        .max(2000, 'No more than 2000 characters are allowed.')
        .required('The message field is required.'),
});


const ContactForm = () => {

    return (
        <StyledForm>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
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
                        onBlur: handleBlur,
                        error: isError(type),
                        helperText: helperText(type),
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
