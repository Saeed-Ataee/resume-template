import { Box } from '@mui/system';
import BarChart from '../blocks/bar-chart';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Skills({ skills }) {
  const theme = useTheme();
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: largerThanMd? '1fr 1fr' : '1fr',
        gap: 4,
        p: 4,
      }}
    >
      {skills?.map((skill, index) => (
        <Box
          key={`skill-${index}`}
          className='d-flex flex-column gap-2'
        >
          <h6 className='text-start'>{skill.title}</h6>
          <BarChart value={skill.score} />
        </Box>
      ))}
    </Box>
  );
}
