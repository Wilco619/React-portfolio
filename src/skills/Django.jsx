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
  Storage as StorageIcon,
  Security as SecurityIcon,
  Api as ApiIcon,
  Web as WebIcon,
  DataObject as DataObjectIcon,
  Build as BuildIcon,
  ArrowBack as ArrowBackIcon,
  CompareArrows as CompareArrowsIcon,
  Cancel as CancelIcon
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

const DjangoSkillDetail = () => {
  const navigate = useNavigate();

  const technologies = [
    "Django", "Django REST Framework", "Serialization", "JSON Web Tokens (JWT)", 
    "ORM (Object-Relational Mapping)", "Django Admin", "Middleware", "Django Templates", 
    "Authentication & Authorization", "Database Management", "RESTful API Development", 
    "WebSockets with Django Channels"
  ];

  const projects = [
    {
      title: "E-Commerce API with Django REST Framework",
      description: "Built a scalable and secure e-commerce backend using Django and DRF.",
      technologies: ["Django", "DRF", "PostgreSQL", "JWT Authentication"],
      icon: <ApiIcon />
    },
    {
      title: "Real-Time Chat App with Django Channels",
      description: "Developed a chat application with WebSockets and real-time messaging.",
      technologies: ["Django Channels", "Redis", "WebSockets", "Celery"],
      icon: <DataObjectIcon />
    },
    {
      title: "Secure Authentication System",
      description: "Implemented JWT-based authentication and role-based access control (RBAC).",
      technologies: ["Django", "JWT", "OAuth2", "DRF"],
      icon: <SecurityIcon />
    }
  ];

  const keyFeatures = [
    {
      title: "Django Framework",
      description: "High-level Python framework for secure, scalable, and maintainable web applications.",
      icon: <BuildIcon />
    },
    {
      title: "Django REST Framework (DRF)",
      description: "A powerful toolkit for building RESTful APIs with Django, featuring authentication, permissions, and viewsets.",
      icon: <ApiIcon />
    },
    {
      title: "Serialization",
      description: "Converting Django model instances into JSON/XML formats for API responses.",
      icon: <StorageIcon />
    },
    {
      title: "JSON Web Tokens (JWT)",
      description: "Secure user authentication method using JWT for session management and API access.",
      icon: <SecurityIcon />
    },
    {
      title: "Object-Relational Mapping (ORM)",
      description: "Interacting with databases using Django's ORM, avoiding raw SQL queries.",
      icon: <DataObjectIcon />
    },
    {
      title: "Django Middleware",
      description: "Customizing request/response processing with Django's middleware system.",
      icon: <WebIcon />
    },
    {
    title: "CORS Headers",
    description: "Allows secure cross-origin requests between frontend and backend applications.",
    icon: <CompareArrowsIcon />
    },
    {
    title: "Token Blacklisting",
    description: "Prevents revoked JWT tokens from being reused, enhancing authentication security.",
    icon: <CancelIcon />
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
                Django & REST API Development
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Expertise in Django, Django REST Framework, serialization, and secure API authentication.
              </Typography>
              <Box mt={2}>
                <CheckCircleIcon color="primary" />
                <CheckCircleIcon color="primary" />
                <CheckCircleIcon color="primary" />
                <CheckCircleIcon color="primary" />
                <CheckCircleIcon color="primary" />
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, pb: 2 }}>
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

export default DjangoSkillDetail;
