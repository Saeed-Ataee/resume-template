import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { send } from '../../api/email';
import { withSnackbar } from '../blocks/snack-bar';
import OverlayLoading from '../blocks/overlay-loading';

const ContactSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Fullname is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Subject is required'),
  message: Yup.string()
    .min(10, 'Message must be longer than 10 characters!')
    .max(500, 'Message must not be longer than 500 characters!')
    .required('Message is required'),
});

function ContactForm({ snackbarShowMessage }) {
  const [loading, setLoading] = useState(false);

  const onSubmit = async function (values, { resetForm }) {
    console.log(values);
    try {
      setLoading(true);
      await send(values);
      snackbarShowMessage(`Email is sent successfully. Thank You.`);
      resetForm();
    } catch (error) {
      snackbarShowMessage(`An Error occurred while sending Email.`, 'error');
    }
    setLoading(false);
  };

  return (
    <Box className='position-relative'>
      {loading ? <OverlayLoading message={'Sending Email...'} /> : null}
      <Formik
        initialValues={{
          fullname: '',
          email: '',
          subject: '',
          message: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className='d-flex flex-column gap-3'>
            <Field name='fullname'>
              {({ field, form, meta }) => (
                <Box className='d-flex flex-column gap-2'>
                  <TextField
                    {...field}
                    label='Fullname'
                    variant='standard'
                    error={meta.touched && !!meta.error}
                  />
                  {meta.touched && meta.error && (
                    <Typography
                      component='span'
                      sx={{
                        color: 'red',
                        textAlign: 'start',
                        fontSize: '12px',
                      }}
                    >
                      {meta.error}
                    </Typography>
                  )}
                </Box>
              )}
            </Field>

            <Field name='email'>
              {({ field, form, meta }) => (
                <Box className='d-flex flex-column gap-2'>
                  <TextField
                    {...field}
                    label='Email'
                    variant='standard'
                    error={meta.touched && !!meta.error}
                  />
                  {meta.touched && meta.error && (
                    <Typography
                      component='span'
                      sx={{
                        color: 'red',
                        textAlign: 'start',
                        fontSize: '12px',
                      }}
                    >
                      {meta.error}
                    </Typography>
                  )}
                </Box>
              )}
            </Field>

            <Field name='subject'>
              {({ field, form, meta }) => (
                <Box className='d-flex flex-column gap-2'>
                  <TextField
                    {...field}
                    label='Subject'
                    variant='standard'
                    error={meta.touched && !!meta.error}
                  />
                  {meta.touched && meta.error && (
                    <Typography
                      component='span'
                      sx={{
                        color: 'red',
                        textAlign: 'start',
                        fontSize: '12px',
                      }}
                    >
                      {meta.error}
                    </Typography>
                  )}
                </Box>
              )}
            </Field>

            <Field name='message'>
              {({ field, form, meta }) => (
                <Box className='d-flex flex-column gap-2'>
                  <TextField
                    {...field}
                    label='Message'
                    variant='standard'
                    error={meta.touched && !!meta.error}
                    multiline
                    rows={4}
                  />
                  {meta.touched && meta.error && (
                    <Typography
                      component='span'
                      sx={{
                        color: 'red',
                        textAlign: 'start',
                        fontSize: '12px',
                      }}
                    >
                      {meta.error}
                    </Typography>
                  )}
                </Box>
              )}
            </Field>

            <Button sx={{ my: 2 }} type='submit' disabled={!dirty || !isValid}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default withSnackbar(ContactForm);
