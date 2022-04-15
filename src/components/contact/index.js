import { Grid, Paper, Typography } from '@mui/material';
import ContactForm from '../contact-form';
import { useTheme } from '@mui/styles';

export default function Contact({ api, location }) {
  const theme = useTheme();
  return (
    <Grid container spacing={2} className='align-items-center'>
      <Grid item md={6} xs={12}>
        <Paper
          className='d-flex flex-column gap-2 p-4'
          sx={{
            borderLeft: `6px solid ${theme.palette.primary.main}`,
            height: '100%',
          }}
          elevation={0}
        >
          <Typography component='h4' sx={{ fontSize: '20px' }}>
            Feel free to Contact me
          </Typography>
          <ContactForm />
        </Paper>
      </Grid>
      <Grid
        item
        md={6}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <img width={'100%'} src='/imgs/map.svg' alt={location.alt} />
      </Grid>
    </Grid>
  );
}
