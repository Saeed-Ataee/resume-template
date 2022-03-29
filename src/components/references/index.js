import { Grid } from '@mui/material';
import ReferenceCard from '../blocks/reference-card';

export default function References({ references }) {
  return (
    <Grid container spacing={2}>
      {references?.map((r, idx) => (
        <Grid key={`reference-${idx}`} item md={4} sm={6} xs={12}>
          <ReferenceCard reference={r}></ReferenceCard>
        </Grid>
      ))}
    </Grid>
  );
}
