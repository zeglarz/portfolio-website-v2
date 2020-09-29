import React, { FunctionComponent } from 'react';
import { Formik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import email from 'emailjs-com';


interface ContactFormProps {

}

const initialValues = {
    email: '',
    name: '',
    title: '',
    message: '',
};

const ContactForm: FunctionComponent<ContactFormProps> = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, { setErrors }) => {
            }}
        >
            {({ isSubmitting }) =>
                (
                    <form>
                        <TextField
                            name={'name'}
                            label={'Name'}
                            type={'text'}
                        />
                        <TextField
                            name={'email'}
                            label={'Email'}
                            type={'email'}
                        />
                        <TextField
                            name={'title'}
                            label={'Title'}
                            type={'text'}
                        />
                        <TextField
                            name={'message'}
                            label={'Your Message'}
                            type={'text'}
                        />
                        <Button>Send</Button>
                    </form>
                )}
        </Formik>);
};

export default ContactForm;
