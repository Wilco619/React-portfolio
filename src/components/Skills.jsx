import React from 'react';
import { Box, Typography, Container, Paper, Grid, Avatar, Slide, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import {
  Code as CodeIcon,
  Storage as StorageIcon,
  Psychology as PsychologyIcon,
  Web as WebIcon,
  Layers as LayersIcon,
  DeveloperMode as DeveloperModeIcon,
  BarChart as BarChartIcon,
  Functions as FunctionsIcon,
  Terminal as TerminalIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

// Custom styled Paper for skills section
const SkillPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(5px)',
  borderRadius: '15px',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  animation: 'fadeIn 2s ease',
  position: 'relative',
}));

// Skills array with title, icon, and description
const skills = [
  {
    title: 'Python',
    icon: <CodeIcon color="primary" sx={{ fontSize: 50 }} />, 
    description: 'Proficient in Python for web development, data analysis, and automation.',
    link: '/python-skills', // Navigation link for skill page
  },
  {
    title: 'React.js',
    icon: <DeveloperModeIcon color="secondary" sx={{ fontSize: 50 }} />, 
    description: 'Skilled in building dynamic user interfaces with React.js.',
    link: '/react-skills', // Navigation link for skill page
  },
  {
    title: 'SQL',
    icon: <StorageIcon color="success" sx={{ fontSize: 50 }} />, 
    description: 'Experienced in designing and querying databases using SQL.',
    link: '/sql', // Navigation link for skill page
  },
  {
    title: 'HTML5 & CSS3',
    icon: <WebIcon color="error" sx={{ fontSize: 50 }} />, 
    description: 'Expert in crafting responsive and accessible web pages using HTML5 and CSS3.',
    link: '/html-css', // Navigation link for skill page
  },
  {
    title: 'JavaScript',
    icon: <CodeIcon color="warning" sx={{ fontSize: 50 }} />, 
    description: 'Strong knowledge of JavaScript for client-side and server-side development.',
    link: '/javascript', // Navigation link for skill page
  },
  {
    title: 'Linux (Debian)',
    icon: <TerminalIcon color="disabled" sx={{ fontSize: 50 }} />, 
    description: 'Proficient in Debian Linux for server management and development.',
    link: '/linux', // Navigation link for skill page
  },
  {
    title: 'Material UI, Bootstrap 5 & Tailwind CSS',
    icon: <LayersIcon color="info" sx={{ fontSize: 50 }} />, 
    description: 'Experienced in Material UI, Tailwind CSS, and Bootstrap 5 for modern, responsive designs.',
    link: '/frontend', // Navigation link for skill page
  },
  {
    title: 'Django Framework',
    icon: <CodeIcon color="primary" sx={{ fontSize: 50 }} />, 
    description: 'Skilled in building robust web applications with Django.',
    link: '/django', // Navigation link for skill page
  },
  {
    title: 'Numpy & Pandas',
    icon: <FunctionsIcon color="secondary" sx={{ fontSize: 50 }} />, 
    description: 'Proficient in data manipulation and analysis using Numpy and Pandas.',
    link: '/data-analysis', // Navigation link for skill page
  },
  {
    title: 'Matplotlib',
    icon: <BarChartIcon color="success" sx={{ fontSize: 50 }} />, 
    description: 'Experienced in creating visual data representations with Matplotlib.',
    link: '/visualize', // Navigation link for skill page
  },
  {
    title: 'Natural Language Processing',
    icon: <PsychologyIcon color="primary" sx={{ fontSize: 50 }} />,
    description: 'Expert in NLP using spaCy for text analysis, entity recognition, and language understanding.',
    link: '/nlp', // Navigation link for skill page
  }
];

const SkillsPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(65deg, #00224D 30%, #7A1CAC 90%)',
        position: 'relative',
        overflow: 'hidden',
        p: 2,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" sx={{ pb: 6, pt: 6 }} color="black" gutterBottom>
          My Coding Skills
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Slide in direction="up" timeout={500 * (index + 1)}>
                <SkillPaper elevation={2}>
                  <Avatar sx={{ bgcolor: 'transparent', margin: '0 auto', mb: 2 }}>
                    {skill.icon}
                  </Avatar>
                  <Typography variant="h5" gutterBottom>
                    {skill.title}
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    {skill.description}
                  </Typography>
                  <IconButton 
                    sx={{ position: 'absolute', top: 10, right: 10 }}
                    onClick={() => handleNavigate(skill.link)}
                  >
                    <ArrowForwardIcon color="primary" />
                  </IconButton>
                </SkillPaper>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsPage;
