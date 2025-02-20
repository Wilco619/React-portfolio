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
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
  Style as StyleIcon,
  Web as WebIcon,
  Brush as BrushIcon,
  DeveloperMode as DeveloperModeIcon,
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

const FrontendStylingDetail = () => {
  const navigate = useNavigate();

  const technologies = [
    "Material-UI", "Bootstrap 5", "Tailwind CSS", "Styled Components", "SASS", "CSS Modules",
    "Flexbox", "Grid", "Responsive Design", "Dark Mode", "Theming", "Animations", "Typography"
  ];

  const projects = [
    {
      title: "Admin Dashboard with Material-UI",
      description: "Developed a modern admin dashboard using Material-UI, React, and Redux Toolkit.",
      technologies: ["Material-UI", "React", "Redux", "Charts.js"],
      icon: <WebIcon />
    },
    {
      title: "E-Commerce UI with Bootstrap 5",
      description: "Designed and built a fully responsive e-commerce website using Bootstrap 5.",
      technologies: ["Bootstrap 5", "SASS", "React", "Swiper.js"],
      icon: <StyleIcon />
    },
    {
      title: "Portfolio Website with Tailwind CSS",
      description: "Created a sleek and fast portfolio website using Tailwind CSS and Next.js.",
      technologies: ["Tailwind CSS", "Next.js", "Framer Motion", "Dark Mode"],
      icon: <BrushIcon />
    }
  ];

  const keyFeatures = [
    {
      title: "Material-UI",
      description: "Modern, customizable, and accessible React components following Google’s Material Design guidelines.",
      icon: <DeveloperModeIcon />
    },
    {
      title: "Bootstrap 5",
      description: "A powerful front-end framework with prebuilt components, utility classes, and responsive layouts.",
      icon: <WebIcon />
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for fast styling and highly customizable design systems.",
      icon: <BrushIcon />
    },
    {
      title: "Responsive Design",
      description: "Ensuring web applications work seamlessly across all devices with mobile-first approaches.",
      icon: <CheckCircleIcon />
    },
    {
      title: "Theming & Dark Mode",
      description: "Implementing light/dark themes with CSS variables and component-based styling.",
      icon: <StyleIcon />
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
                <StyleIcon color="primary" sx={{ fontSize: 60 }} />
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                Frontend Styling (Material-UI, Bootstrap 5, Tailwind CSS)
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Expertise in modern CSS frameworks and component libraries for building stunning user interfaces.
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

export default FrontendStylingDetail;
