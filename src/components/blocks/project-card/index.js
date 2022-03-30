import { Chip, Paper, Typography, Box } from '@mui/material';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { useTheme } from '@mui/styles';

export default function ProjectCard({ project }) {
  const theme = useTheme();

  return (
    <Paper
      className='d-flex flex-column gap-2 text-start'
      sx={{
        borderRadius: '4px',
        p: 4,
        height: '100%',
        borderBottom: `6px solid ${theme.palette.primary.main}`,
      }}
    >
      <Box className='d-flex align-items-center gap-3'>
        <LaptopChromebookIcon
          sx={{ fontSize: '40px', color: theme.palette.primary.main }}
        />
        <Box className='d-flex flex-column'>
          <Typography component='h5'>{project.title}</Typography>
          <Typography
            component='span'
            sx={{ color: theme.palette.dark.light, fontSize: '12px' }}
          >
            {project.year}
          </Typography>
        </Box>
      </Box>
      <Typography
        component='h3'
        sx={{
          fontSize: '24px',
          color: theme.palette.dark.main,
          fontWeight: 'bold',
        }}
      >
        {project.position}
      </Typography>
      {project.description ? (
        <Typography component='p' sx={{ color: theme.palette.dark.light }}>
          {project.description}
        </Typography>
      ) : null}
      <Box className='d-flex align-items-center gap-1 flex-wrap mt-auto'>
        {project.technologies?.map((tech, idx) => (
          <Chip
            key={`tech-${idx}`}
            label={tech}
            variant='outlined'
            sx={{ color: theme.palette.dark.light }}
          />
        ))}
      </Box>
    </Paper>
  );
}
