import React, { useState } from 'react';
import { Formik } from 'formik';
import { Button, Snackbar, TextField } from '@material-ui/core';
import email from 'emailjs-com';
import styled from 'styled-components/macro';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import { object, string } from 'yup';
import media from '../../styles/style';

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
  ${media.tablet`
    margin-top: 2rem;
    margin-inline-end: auto;
  `}
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
  .success > div {
    background: green;
    color: white;
  }
  .error > div {
    background: red;
    color: white;
  }
`;

const validationSchema = object().shape({
  email: string()
    .email("Please make sure you've entered an valid email.")
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setIsSuccess(false);
    setIsError(false);
  };
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
              process.env.REACT_APP_EMAIL_JS_TOKEN
            )
            .then(
              () => {
                setSubmitting(false);
                resetForm();
                setIsSuccess(true);
              },
              (error) => {
                console.log(error);
                setIsError(true);
                setSubmitting(false);
              }
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
          const isErrorForrm = (type) => !!(touched[type] && errors[type]);
          const helperText = (type) => isErrorForrm(type) && errors[type];
          const standardTextfield = (
            type: string,
            inputType = 'text'
          ): TextFieldProps => ({
            variant: 'filled',
            name: type,
            type: inputType,
            label: `Your ${type}`,
            autoComplete: 'off',
            value: values[type],
            size: 'small',
            onBlur: handleBlur,
            error: isErrorForrm(type),
            helperText: helperText(type),
            onChange: handleChange,
          });

          return (
            <form onSubmit={handleSubmit}>
              <TextField {...standardTextfield('name')} />
              <TextField {...standardTextfield('email', 'email')} />
              <TextField {...standardTextfield('title')} />
              <TextField {...standardTextfield('message')} multiline rows={7} />
              <Button
                variant="outlined"
                color="primary"
                size="large"
                type="submit"
                disabled={isSubmitting}
                endIcon=""
              >
                Send
              </Button>
            </form>
          );
        }}
      </Formik>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isSuccess || isError}
        autoHideDuration={3500}
        message={isSuccess ? 'Email sent!' : 'Failed to send email!'}
        action=""
        onClose={handleClose}
        className={isSuccess ? 'success' : 'error'}
      />
    </StyledForm>
  );
};

export default ContactForm;
