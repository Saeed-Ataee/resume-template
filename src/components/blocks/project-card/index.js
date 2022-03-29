import { Chip, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

export default function ProjectCard({ project }) {
  return (
    <Paper
      className='d-flex flex-column gap-2 text-start'
      sx={{
        borderRadius: '4px',
        p: 4,
        height: '100%',
        borderBottom: '6px solid #00d779',
      }}
    >
      <Box className='d-flex align-items-center gap-3'>
        <LaptopChromebookIcon sx={{ fontSize: '40px', color: '#00d779' }} />
        <Box className='d-flex flex-column'>
          <Typography component='h5'>{project.title}</Typography>
          <Typography component='span' sx={{color: '#666', fontSize: '12px'}}>{project.year}</Typography>
        </Box>
      </Box>
      <Typography
        component='h3'
        sx={{ fontSize: '24px', color: '#39424a', fontWeight: 'bold' }}
      >
        {project.position}
      </Typography>
      {project.description ? (
        <Typography component='p' sx={{ color: '#666' }}>
          {project.description}
        </Typography>
      ) : null}
      <Box className='d-flex align-items-center gap-1 flex-wrap mt-auto'>
        {project.technologies?.map((tech, idx) => (
          <Chip
            key={`tech-${idx}`}
            label={tech}
            variant='outlined'
            sx={{ color: '#666' }}
          />
        ))}
      </Box>
    </Paper>
  );
}
