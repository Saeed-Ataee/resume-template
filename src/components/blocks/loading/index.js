import { Box, CircularProgress } from '@mui/material';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'absolute',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
      }}
      className='d-flex align-items-center justify-content-center'
    >
      <CircularProgress />
    </Box>
  );
}
