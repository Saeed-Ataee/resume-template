import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/styles';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      className='d-flex flex-column flex-sm-row align-items-center gap-2 justify-content-center'
      sx={{
        borderTop: `1px solid ${theme.palette.lightGray.main}`,
        width: '100%',
        p: 2,
      }}
    >
      <Typography component='span'>
        No Rights Reserved. Feel free to use and copy.
      </Typography>
      <Typography component='span'>
        Designed By
        {'  '}
        <a
          href='https://github.com/Saeed-Ataee'
          target='_blank'
          rel='noreferrer'
        >
          Saeed
        </a>
      </Typography>
    </Box>
  );
}
