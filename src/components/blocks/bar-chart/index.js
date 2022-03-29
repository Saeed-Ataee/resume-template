import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box } from '@mui/system';

export default function BarChart({ value }) {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress sx={{
          backgroundColor: '#d8f3dc',
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#00d779',
          },
      }} variant='determinate' value={value} />
    </Box>
  );
}
