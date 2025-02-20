import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Avatar, 
  Grid, 
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Card,
  CardContent,
  Button
} from '@mui/material';
import { styled } from '@mui/system';
import { 
  Code as CodeIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  Build as BuildIcon,
  Cloud as CloudIcon,
  Language as LanguageIcon,
  Functions as FunctionsIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';

const DetailPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  maxWidth: '1000px',
  margin: 'auto',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontSize: '0.9rem',
  fontWeight: 500,
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const StyledBackButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const JavaScriptSkillDetail = () => {
  const navigate = useNavigate();

  const technologies = [
    "JavaScript", "ES6+", "DOM Manipulation", "Event Handling", "Async Programming", 
    "Promises", "Async/Await", "REST APIs", "Node.js", "React.js", "TypeScript", 
    "Webpack", "Babel", "Jest", "Test-Driven Development (TDD)"
  ];

  const projects = [
    {
      title: "Interactive Todo App",
      description: "A simple React-based to-do list application that allows users to add, remove, and mark tasks as complete.",
      technologies: ["JavaScript", "React", "HTML", "CSS"],
      icon: <LanguageIcon />
    },
    {
      title: "Weather Dashboard",
      description: "A weather application built using JavaScript and Fetch API, fetching real-time weather data based on user input.",
      technologies: ["JavaScript", "API", "CSS", "HTML"],
      icon: <CloudIcon />
    },
    {
      title: "Real-Time Chat App",
      description: "A real-time chat application using Socket.IO for real-time communication and Node.js backend.",
      technologies: ["JavaScript", "Node.js", "Socket.IO", "Express"],
      icon: <FunctionsIcon />
    }
  ];

  const keyFeatures = [
    {
      title: "Modern JavaScript (ES6+)",
      description: "Utilizing the latest features like arrow functions, destructuring, template literals, spread/rest operators, and more.",
      icon: <CodeIcon />
    },
    {
      title: "DOM Manipulation & Event Handling",
      description: "Manipulating the Document Object Model (DOM) to dynamically update content on the page, using event listeners and handling user interactions.",
      icon: <BuildIcon />
    },
    {
      title: "Asynchronous JavaScript",
      description: "Working with asynchronous code using Promises, Async/Await, and handling API requests in JavaScript.",
      icon: <FunctionsIcon />
    },
    {
      title: "Functional Programming",
      description: "Applying functional programming principles like higher-order functions, immutability, and pure functions in JavaScript.",
      icon: <FunctionsIcon />
    },
    {
      title: "Frameworks & Libraries (React.js)",
      description: "Building dynamic and efficient user interfaces using React.js, including state management, hooks, and JSX syntax.",
      icon: <LanguageIcon />
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(65deg, #00224D 30%, #7A1CAC 90%)',
        py: 10,
      }}
    >
      <Container>
        <DetailPaper elevation={3}>
          {/* Header Section */}
          <Grid container spacing={3} alignItems="center" mb={4}>
            <Grid item xs={12} sm={3}>
              <Avatar 
                sx={{ 
                  bgcolor: '#e3f2fd', 
                  width: 100, 
                  height: 100, 
                  margin: 'auto',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <CodeIcon color="primary" sx={{ fontSize: 60 }} />
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                JavaScript Development
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Expert-level proficiency in JavaScript development, with experience in both client-side and server-side applications.
              </Typography>
              <Box mt={2}>
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Technologies Section */}
          <Typography variant="h5" gutterBottom fontWeight="500">
            Technologies & Tools
          </Typography>
          <Box mb={4}>
            {technologies.map((tech, index) => (
              <SkillChip
                key={index}
                label={tech}
                icon={<CheckCircleIcon />}
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>

          {/* Key Features Section */}
          <Typography variant="h5" gutterBottom fontWeight="500">
            Key Areas of Expertise
          </Typography>
          <List>
            {keyFeatures.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  {feature.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={feature.title}
                  secondary={feature.description}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
            ))}
          </List>

          {/* Projects Section */}
          <Typography variant="h5" gutterBottom fontWeight="500" mt={4}>
            Featured Projects
          </Typography>
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ProjectCard>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      {project.icon}
                      <Typography variant="h6" ml={1} fontWeight="500">
                        {project.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" mb={2}>
                      {project.description}
                    </Typography>
                    <Box>
                      {project.technologies.map((tech, idx) => (
                        <SkillChip
                          key={idx}
                          label={tech}
                          size="small"
                          variant="outlined"
                          color="secondary"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </ProjectCard>
              </Grid>
            ))}
          </Grid>

          {/* Back Button */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              mt: 6,
              pb: 2 
            }}
          >
            <StyledBackButton
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/React-portfolio#skills')}
              variant="contained"
              size="large"
            >
              Back to Skills Overview
            </StyledBackButton>
          </Box>
        </DetailPaper>
      </Container>
    </Box>
  );
};

export default JavaScriptSkillDetail;
