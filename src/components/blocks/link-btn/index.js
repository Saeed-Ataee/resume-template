import { Button } from '@mui/material';

export default function LinkButton({ text, link }) {
  return (
    <Button
      variant='outlined'
      color='primary'
      disableElevation
      size='large'
      href={link}
      target='_blank'
      sx={{
        textTransform: 'none'
      }}
    >
      {text}
    </Button>
  );
}
