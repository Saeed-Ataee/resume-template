import { Grid, Paper, Typography } from '@mui/material';

import ContactForm from '../contact-form';

export default function Contact({ api, location }) {
  return (
    <Grid container spacing={2} className='align-items-center'>
      <Grid item md={6} xs={12}>
        <Paper className='d-flex flex-column gap-2 p-4' sx={{borderLeft: '6px solid #00d779', height: '100%'}}>
          <Typography
            component='h4'
            sx={{ fontSize: '20px' }}
          >
            Feel free to Contact me
          </Typography>
          <ContactForm />
        </Paper>
      </Grid>
      <Grid item md={6} xs={12} className="overflow-hidden">
          <img height={'100%'} src={location.src} alt={location.alt} />
      </Grid>
    </Grid>
  );
}
