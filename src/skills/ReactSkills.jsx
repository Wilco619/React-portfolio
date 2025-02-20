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
  DeveloperMode as DeveloperModeIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  Build as BuildIcon,
  Web as WebIcon,
  Storage as StorageIcon,
//   Typography as TypographyIcon,
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

const ReactSkillDetail = () => {
  const navigate = useNavigate();

  const frameworks = [
    "React.js", "Redux", "Next.js", "Gatsby", "React Router", "Jest",
    "Axios", "React Query", "Material UI", "Tailwind CSS"
  ];

  const projects = [
    {
      title: "React E-commerce App",
      description: "A fully functional e-commerce web application built with React and Redux for state management.",
      technologies: ["React", "Redux", "Firebase", "Stripe"],
      icon: <WebIcon />
    },
    {
      title: "Personal Portfolio",
      description: "A personal portfolio built with React.js showcasing projects and achievements.",
      technologies: ["React", "Material UI", "React Router"],
      icon: <DeveloperModeIcon />
    },
    {
      title: "Social Media Dashboard",
      description: "A real-time social media dashboard built with React and Firebase for authentication and data storage.",
      technologies: ["React", "Firebase", "React Router", "Material UI"],
      icon: <StorageIcon />
    }
  ];

  const keyFeatures = [
    {
      title: "Component-Based Architecture",
      description: "Building reusable UI components with state and lifecycle management in React.",
      icon: <WebIcon />
    },
    {
      title: "State Management",
      description: "Managing application state with Redux and React Context API.",
      icon: <BuildIcon />
    },
    {
      title: "Client-Side Routing",
      description: "Implementing client-side routing with React Router for seamless page navigation.",
      icon: <BuildIcon />
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
                <DeveloperModeIcon color="primary" sx={{ fontSize: 60 }} />
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                React.js Development
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Expert-level proficiency in building dynamic and scalable user interfaces with React.js.
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

          {/* Frameworks & Libraries Section */}
          <Typography variant="h5" gutterBottom fontWeight="500">
            Frameworks & Libraries
          </Typography>
          <Box mb={4}>
            {frameworks.map((framework, index) => (
              <SkillChip
                key={index}
                label={framework}
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
              variant="outlined"
              size="small"
            >
              Back to Skills Overview
            </StyledBackButton>
          </Box>
        </DetailPaper>
      </Container>
    </Box>
  );
};

export default ReactSkillDetail;
