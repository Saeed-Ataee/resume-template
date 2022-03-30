import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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

export default function ContactForm() {

  const onSubmit = function(values, { resetForm }) {
    console.log(values);
    resetForm();
  };

  return (
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
                    sx={{ color: 'red', textAlign: 'start', fontSize: '12px' }}
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
                    sx={{ color: 'red', textAlign: 'start', fontSize: '12px' }}
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
                    sx={{ color: 'red', textAlign: 'start', fontSize: '12px' }}
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
                    sx={{ color: 'red', textAlign: 'start', fontSize: '12px' }}
                  >
                    {meta.error}
                  </Typography>
                )}
              </Box>
            )}
          </Field>

          <Button sx={{ my: 2 }} type='submit' disabled={!dirty || !isValid}>Submit</Button>
        </Form>
      )}
    </Formik>
  );
}
