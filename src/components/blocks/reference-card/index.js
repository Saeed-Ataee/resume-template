import { Avatar, Box, Divider, IconButton, Paper, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import styled from '@emotion/styled';

const CustomIconButton = styled(IconButton)({
  boxShadow: 'none',
  textTransform: 'none',
  borderColor: '#00d779',
  color: '#fff',
    width: '36px',
    height: '36px',
  backgroundColor: '#00d779',
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

export default function ReferenceCard({ reference }) {
  return (
    <Paper className='d-flex flex-column align-items-center gap-2 p-4' sx={{ height: '100%', borderRadius: '8px' }}>
      <Avatar
        alt={reference.fullname}
        src={reference.img}
        sx={{ width: 140, height: 140, border: '4px solid #00d779' }}
      />
      <Typography component='h4' sx={{fontSize: '20px', fontWeight: 'bold'}}>{reference.fullname}</Typography>
      <Typography component='h6' sx={{color: '#00d779'}}>{reference.role}</Typography>
      <Divider className='w-100 my-2' />
      <Box className='d-flex align-center gap-2'>
        <CustomIconButton aria-label='email' href={`mailTo:${reference.contactInfo.email}`}>
          <EmailIcon />
        </CustomIconButton>
        <CustomIconButton aria-label='phone' href={`tel:${reference.contactInfo.phone}`}>
          <PhoneIcon />
        </CustomIconButton>
        <CustomIconButton aria-label='instagram' href={`https://instagram.com/${reference.contactInfo.instagram}`} target='_blank'>
          <InstagramIcon />
        </CustomIconButton>
      </Box>
    </Paper>
  );
}
