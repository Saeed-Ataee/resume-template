import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box } from '@mui/material';
import { useTheme } from '@mui/styles';

export default function BarChart({ value }) {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress sx={{
          backgroundColor: theme.palette.primary.lighter,
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.primary.main,
          },
      }} variant='determinate' value={value} />
    </Box>
  );
}
