import { Grid } from '@mui/material';
import ProjectCard from '../blocks/project-card';

export default function Projects({ projects }) {
  return (
    <Grid container spacing={2}>
      {projects?.map((p, idx) => (
        <Grid key={`project-${idx}`} item md={4} sm={6} xs={12}>
          <ProjectCard project={p}></ProjectCard>
        </Grid>
      ))}
    </Grid>
  );
}
