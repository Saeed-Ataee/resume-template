import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from '@emotion/styled';
import { useTheme } from '@mui/styles';

export default function ReferenceCard({ reference }) {
  const theme = useTheme();

  const CustomIconButton = styled(IconButton)({
    boxShadow: 'none',
    textTransform: 'none',
    borderColor: theme.palette.primary.main,
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.lighter,
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.lighter,
      borderColor: theme.palette.primary.main,
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(60,221,151,.5)',
    },
  });

  return (
    <Paper
      className='d-flex flex-column align-items-center gap-2 p-4'
      sx={{ height: '100%', borderRadius: '8px' }}
      elevation={0}
    >
      <Avatar
        alt={reference.fullname}
        src={reference.img}
        sx={{
          width: 140,
          height: 140,
          border: `4px solid ${theme.palette.primary.main}`,
        }}
      />
      <Typography component='h4' sx={{ fontSize: '20px', fontWeight: 'bold' }}>
        {reference.fullname}
      </Typography>
      <Typography component='h6' sx={{ color: theme.palette.primary.main }}>
        {reference.role}
      </Typography>
      <Divider className='w-100 mb-2 mt-auto' />
      <Box className='d-flex align-center gap-2'>
        <CustomIconButton
          aria-label='email'
          href={`mailTo:${reference.contactInfo.email}`}
        >
          <EmailIcon />
        </CustomIconButton>
        <CustomIconButton
          aria-label='skype'
          href={`skype:${reference.contactInfo.skype}?chat`}
        >
          <ChatIcon />
        </CustomIconButton>
        <CustomIconButton
          aria-label='linkedin'
          href={reference.contactInfo.linkedin}
          target='_blank'
        >
          <LinkedInIcon />
        </CustomIconButton>
      </Box>
    </Paper>
  );
}
