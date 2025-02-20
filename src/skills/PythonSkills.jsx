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
  Timeline as TimelineIcon,
  Build as BuildIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Psychology as PsychologyIcon,
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

const PythonSkillDetail = () => {
  const navigate = useNavigate();

  const frameworks = [
    "Django", "Flask", "FastAPI", "Pandas", "NumPy", "Matplotlib",
    "Scikit-learn", "TensorFlow", "PyTorch", "Selenium", "Beautiful Soup",
    "Requests", "SQLAlchemy", "Pytest"
  ];

  const projects = [
    {
      title: "Barcode Scanner System",
      description: "Advanced inventory management system using OpenCV and ZBar for real-time barcode scanning and processing.",
      technologies: ["OpenCV", "ZBar", "SQLite", "PyQt5"],
      icon: <StorageIcon />
    },
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for visualizing and analyzing large datasets with real-time updates.",
      technologies: ["Pandas", "Plotly", "Dash", "PostgreSQL"],
      icon: <TimelineIcon />
    },
    {
      title: "ML-Powered Recommendation Engine",
      description: "Personalized recommendation system using machine learning algorithms.",
      technologies: ["Scikit-learn", "TensorFlow", "Redis", "FastAPI"],
      icon: <PsychologyIcon />
    }
  ];

  const keyFeatures = [
    {
      title: "Web Development",
      description: "Building scalable web applications using Django and FastAPI frameworks with RESTful APIs",
      icon: <CloudIcon />
    },
    {
      title: "Data Science",
      description: "Advanced data analysis and visualization using Pandas, NumPy, and Matplotlib",
      icon: <TimelineIcon />
    },
    {
      title: "Automation",
      description: "Process automation and scripting for improved efficiency and workflow optimization",
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
                <CodeIcon color="primary" sx={{ fontSize: 60 }} />
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                Python Development
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Expert-level proficiency in Python programming with focus on web development,
                data science, and automation solutions.
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

export default PythonSkillDetail;