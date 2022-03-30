import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function EducationTimeline({ education }) {
  const theme = useTheme();
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Timeline position='alternate' sx={{ gap: largerThanMd ? 0 : 4 }}>
      {education?.map((itm, index) => (
        <TimelineItem
          sx={{
            p: 0,
          }}
          key={index}
        >
          <TimelineOppositeContent
            sx={{
              m: 'auto 0',
              display: largerThanMd ? 'block' : 'none',
            }}
            align='right'
            variant='body2'
            color='text.secondary'
          >
            {itm.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector
              sx={{ display: largerThanMd ? 'block' : 'none' }}
            />
            <TimelineDot
              sx={{
                mx: 2,
                backgroundColor: theme.palette.primary.main,
                my: 0,
                display: largerThanMd ? 'block' : 'none',
              }}
            ></TimelineDot>
            <TimelineConnector
              sx={{ display: largerThanMd ? 'block' : 'none' }}
            />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              py: '12px',
              px: 2,
              backgroundColor: 'white',
              borderTop: `6px solid ${theme.palette.primary.main}`,
              borderRadius: '4px',
            }}
          >
            <Typography
              variant='h5'
              component='span'
              className='d-flex align-items-center gap-2 justify-content-center'
            >
              <SchoolIcon />
              {itm.title}
            </Typography>
            <Typography sx={{ mt: 2 }}>{itm.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
