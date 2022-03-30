import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import BusinessIcon from '@mui/icons-material/Business';
import TaskIcon from '@mui/icons-material/Task';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ExperienceTimeLine({ experiences }) {
  const theme = useTheme();
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Timeline position='alternate'>
      {experiences?.map((itm, index) => (
        <TimelineItem
          sx={{
            p: 0,
            [`&::before`]: {
              display: largerThanMd ? 'block' : 'none'
            },
            mt: largerThanMd || !index? 0 : 12,
          }}
          key={index}
        >
          <TimelineSeparator className='position-relative'>
            <Box>
              <TimelineDot
                sx={{
                  mx: 2,
                  backgroundColor: theme.palette.primary.main,
                  my: 0,
                  position: 'absolute',
                  top: 30,
                  left: -4,
                  display: largerThanMd ? 'block' : 'none'
                }}
              ></TimelineDot>
              <Box
                sx={{
                  borderRight: index % 2 ? 'none' : '10px solid white',
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  borderLeft: index % 2 ? '10px solid white' : 'none',
                  position: 'absolute',
                  left: index % 2 ? 0 : 25,
                  top: 25,
                }}
              ></Box>
            </Box>
            <TimelineConnector
              sx={{ mx: 2, display: largerThanMd ? 'block' : 'none' }}
            />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              py: '12px',
              px: 2,
              backgroundColor: 'white',
              borderTop: `6px solid ${theme.palette.primary.main}`,
              borderRadius: '4px',
              marginTop: index === 0 ? 0 : -10,
            }}
            className='d-flex flex-column gap-3'
          >
            <Typography
              component='span'
              className='d-flex align-items-center gap-2'
            >
              <BusinessIcon />
              {itm.company}
            </Typography>
            <Typography
              component='span'
              sx={{
                color: 'white',
                backgroundColor: theme.palette.primary.main,
                p: 1,
                borderRadius: 2,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {itm.jobTitle}
            </Typography>
            <List>
              {itm.tasks?.map((it, idx) => (
                <ListItem key={`task-${index}${idx}`}>
                  <ListItemIcon>
                    <TaskIcon />
                  </ListItemIcon>
                  <ListItemText primary={it} />
                </ListItem>
              ))}
            </List>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
