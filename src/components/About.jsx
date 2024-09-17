import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

const float = '@keyframes float { 0% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(180deg); } 100% { transform: translateY(0px) rotate(360deg); } }';

const Circle = styled('div')(({ size, color, delay, left, top }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  backgroundColor: color,
  opacity: 0.3,
  animation: `${float} 6s infinite ease-in-out`,
  animationDelay: delay,
  left,
  top,
}));

const StyledPaper = styled(Paper)(({ theme }) => {
  console.log(theme.palette); // Log the theme's palette
  return {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text?.secondary || '#000', // Fallback
    background: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(1px)',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  };
});

const AboutPage = () => {
  const circles = Array.from({ length: 5 }, (_, i) => ({
    size: `${Math.random() * 100 + 50}px`,
    color: `hsl(${Math.random() * 360}, 70%, 70%)`,
    delay: `${Math.random() * 2}s`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor:'Background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {circles.map((props, index) => (
        <Circle key={index} {...props} />
      ))}
      <Container maxWidth="md">
        <Typography variant="h3" align="center"  sx={{pb: 6, pt: 0}} gutterBottom>
          About Me
        </Typography>
        <StyledPaper elevation={4}>
          <Typography variant="h2" gutterBottom>
            Wilco Milcinovic
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            Fullstack Web Developer & Data Analyst
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
              marginTop: 4,
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                Web Development Expertise
              </Typography>
              <Typography >
                Proficient in React, Node.js, and Python. Experienced in
                building scalable web applications and RESTful APIs.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                Data Analysis Skills
              </Typography>
              <Typography>
                Skilled in data visualization, statistical analysis using Python and SQL.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1">
              With a passion for clean code and data-driven solutions, I bring
              a unique blend of web development and data analysis skills to
              every project. Let's create something amazing together!
            </Typography>
          </Box>
        </StyledPaper>
        {/* Button to Download Resume */}
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <Button
            variant="outlined"
            color="secondary"
            href="/wilco_milcinovic_CV.pdf" // Ensure this path points to your resume file
            target="_blank"
            download
          >
            Download My Resume
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
