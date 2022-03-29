import { Typography } from '@mui/material';

export default function Quote({ message }) {
  return (
    <Typography
      component='span'
      sx={{
        p: 1,
        width: '120px',
        borderRadius: '4px',
        backgroundColor: '#00d779',
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: '-10px',
          left: '10px',
          borderTop: '10px solid #00d779',
          borderRight: '10px solid transparent',
          borderLeft: '10px solid transparent',
        },
      }}
    >
      {message}
    </Typography>
  );
}
