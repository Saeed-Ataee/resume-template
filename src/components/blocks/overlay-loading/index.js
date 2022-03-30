import { Box, CircularProgress, Typography } from '@mui/material';

export default function Loading({ message }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'white',
        opacity: '0.8',
        zIndex: 2,
      }}
      className='d-flex flex-column gap-2 align-items-center justify-content-center'
    >
      <CircularProgress />
      {message ? (
        <Typography component='span' color='primary'>
          {message}
        </Typography>
      ) : null}
    </Box>
  );
}
