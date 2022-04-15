import { Box, Fab, Grid, Paper } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import About from '../components/about';
import Contact from '../components/contact';
import Description from '../components/description';
import EducationTimeline from '../components/education-timeline';
import ExperienceTimeLine from '../components/experience-timeline';
import Header from '../components/header';
import ScrollTop from '../components/blocks/scroll-top';
import Skills from '../components/skills';

import LinkButton from '../components/blocks/link-btn';
import Footer from '../components/footer';
import Projects from '../components/projects';
import References from '../components/references';
import { Fragment, useEffect, useState } from 'react';
import Loading from '../components/blocks/loading';

import './default.scss';

export default function DefaultLayout() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [sections, setSections] = useState([]);

  const generateSectionsObject = function () {
    if (!data) {
      return;
    }
    setSections({
      about: {
        title: 'About',
        component: (
          <Paper className='section' id='About' elevation={0}>
            <About info={data.about} />
          </Paper>
        ),
      },
      bio: {
        title: 'Bio',
        component: (
          <div className='section d-flex flex-column gap-3' id='Bio'>
            <Description text={data.bio?.description} />
            <div>
              <LinkButton
                text={'Download Resume'}
                link={data.bio?.resumeLink}
              />
            </div>
          </div>
        ),
      },
      skills: {
        title: 'Professional Skills',
        component: (
          <div className='section' id='Professional Skills'>
            <h2>Professional Skills</h2>
            <Paper elevation={0}>
              <Skills skills={data.skills} />
            </Paper>
          </div>
        ),
      },
      educations: {
        title: 'Educations',
        component: (
          <div className='section' id='Educations'>
            <h2>Educations</h2>
            <EducationTimeline education={data.educations} />
          </div>
        ),
      },
      references: {
        title: 'References',
        component: (
          <div className='section' id='References'>
            <h2>References</h2>
            <References references={data.references} />
          </div>
        ),
      },
      experiences: {
        title: 'Work Experiences',
        component: (
          <div className='section' id='Work Experiences'>
            <h2>Work Experiences</h2>
            <ExperienceTimeLine experiences={data.experiences} />
          </div>
        ),
      },
      projects: {
        title: 'Projects',
        component: (
          <div className='section' id='Projects'>
            <h2>Projects</h2>
            <Projects projects={data.projects} />
          </div>
        ),
      },
      contact: {
        title: 'Contact Me',
        component: (
          <div className='section' id='Contact Me'>
            <h2>Contact Me</h2>
            <Contact location={data.contact?.location} />
          </div>
        ),
      },
    });
  };

  useEffect(() => {
    generateSectionsObject();
    setLoading(false);
  }, [data]);

  useEffect(() => {
    async function fetchData() {
      try {
        const info = await fetch('./info.json');
        const parsedInfo = await info.json();
        setData(parsedInfo);
      } catch (err) {
        console.log('error', err);
      }
    }
    setLoading(true);
    fetchData();
  }, []);

  return (
    <div className='default-layout'>
      {loading ? (
        <Loading />
      ) : (
        <>
          {Object.keys(sections).length ? (
            <Header
              sections={data.order?.map((tab) => sections[tab]?.title)}
              logoText={data.about?.fullname}
            />
          ) : null}

          <Box
            sx={{
              position: 'relative',
              height: '25rem',
              '&::after': {
                content: '""',
                background: 'url(/imgs/bg.jpg)',
                filter: 'opacity(75%)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
                position: 'absolute',
                zIndex: -1,
              },
            }}
          ></Box>

          <Grid container sx={{ p: 4, justifyContent: 'center', mt: -30 }}>
            <Grid
              item
              gap={8}
              md={12}
              lg={8}
              sx={{
                width: '100%',
                height: 'auto',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {data?.order?.map((sec, idx) => (
                <Fragment key={`section-${idx}`}>
                  {data[sec] && sections[sec] && sections[sec].component}
                </Fragment>
              ))}
            </Grid>
          </Grid>

          <Footer />

          <ScrollTop>
            <Fab
              color='primary'
              sx={{
                color: 'white',
                boxShadow: 'none',
              }}
              size='small'
              aria-label='scroll back to top'
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </>
      )}
    </div>
  );
}
