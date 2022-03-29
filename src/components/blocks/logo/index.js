import { Typography } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function Logo({ text }) {
  return (
    <Typography className='d-flex align-items-center gap-2' component='h5' sx={{ color: 'white', fontSize: '30px' }}>
      <SentimentSatisfiedAltIcon sx={{ fontSize: '42px' }} />
      {text}
    </Typography>
  );
}
