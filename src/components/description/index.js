import { Typography } from '@mui/material';
import { useTheme } from '@mui/styles';

export default function Description({ text }) {
  const theme = useTheme();
  return (
    <Typography component='p' sx={{ color: theme.palette.dark.main }}>
      {text}
    </Typography>
  );
}
