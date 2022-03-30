import { Grid, Typography, Box } from '@mui/material';
import * as icons from '@mui/icons-material';
import Quote from '../blocks/quote';
import { createElement } from 'react';
import { useTheme } from '@mui/styles';

export default function About({ info }) {
  const theme = useTheme();

  return (
    <Grid container spacing={2} sx={{ m: 0, width: '100%', p: 4, borderBottom: `8px solid ${theme.palette.primary.main}` }}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          background: info.image ? `url(${info.image})` : 'url(/imgs/profile.webp)',
          width: '100%',
          height: 'auto',
          aspectRatio: '1 / 1',
          backgroundPosition: 'center 10%',
          backgroundSize: 'cover',
        }}
      ></Grid>
      <Grid item xs={12} md={7} className='d-flex flex-column gap-3'>
        <Quote message={'Hello :)'} />

        <Typography
          component={'h1'}
          sx={{
            fontSize: '50px',
            textAlign: 'start',
            color: theme.palette.dark.main,
            fontWeight: 'bold',
          }}
        >
          <Typography
            component={'span'}
            sx={{ fontSize: '50px', color: theme.palette.lightGray.main }}
          >
            I'M
          </Typography>
          {' ' + info.fullname}
        </Typography>

        <hr />

        {info.tabularInfo?.map((con, idx) => (
          <Box key={`about-tab-${idx}`} className='d-flex flex-column flex-md-row align-items-md-center gap-4'>
            <Typography component={'h5'} className='d-flex align-items-center' sx={{ fontWeight: 'bold', flexBasis: '35%', flexShrink: 0, textAlign: 'start' }}>
              {icons[con.icon]? createElement(icons[con.icon], {}) : null}
              <Typography component={'span'} sx={{ ml: 1, fontWeight: 'bold' }}>
                {con.title}
              </Typography>
            </Typography>
            <Typography component={con.link? 'a' : 'span'} href={con.link} target="_blank" className='text-start text-clamp-1' sx={{flexBasis: '60%', flexShrink: 0}}>
              {con.value}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
