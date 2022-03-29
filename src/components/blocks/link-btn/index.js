import styled from '@emotion/styled';
import { Button } from '@mui/material';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  border: '1px solid',
  borderColor: '#00d779',
  color: '#00d779',
  '&:hover': {
    backgroundColor: '#d8f3dc',
    borderColor: '#00d779',
    color: '#00d779',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#d8f3dc',
    borderColor: '#00d779',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(60,221,151,.5)',
  },
});

export default function LinkButton({ text, link }) {
  return (
    <BootstrapButton
      variant='outlined'
      disableElevation
      size='large'
      href={link}
      target='_blank'
    >
      {text}
    </BootstrapButton>
  );
}
