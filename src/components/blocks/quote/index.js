import { Typography } from '@mui/material';
import { useTheme } from '@mui/styles';

export default function Quote({ message }) {
  const theme = useTheme();
  return (
    <Typography
      component='span'
      sx={{
        p: 1,
        width: '120px',
        borderRadius: '4px',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: '-10px',
          left: '10px',
          borderTop: `10px solid ${theme.palette.primary.main}`,
          borderRight: '10px solid transparent',
          borderLeft: '10px solid transparent',
        },
      }}
    >
      {message}
    </Typography>
  );
}
