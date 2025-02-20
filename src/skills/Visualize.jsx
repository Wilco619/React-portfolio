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
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  InsertChart as InsertChartIcon,
  Timeline as TimelineIcon,
  Storage as StorageIcon,
  Analytics as AnalyticsIcon,
  PresentToAll as PresentToAllIcon,
  ArrowBack as ArrowBackIcon,
  CheckCircle as CheckCircleIcon
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

const VisualizationAndBI = () => {
  const navigate = useNavigate();

  const technologies = [
    "Matplotlib", "PowerPoint", "Weka", "Power BI", "Seaborn", "Data Visualization", 
    "Machine Learning", "Predictive Analysis", "Business Intelligence", "Storytelling with Data"
  ];

  const projects = [
    {
      title: "Data Visualization with Matplotlib",
      description: "Created interactive charts and plots for exploratory data analysis using Matplotlib and Seaborn.",
      technologies: ["Matplotlib", "Seaborn", "Python", "Data Science"],
      icon: <InsertChartIcon />
    },
    {
      title: "Power BI Dashboard for Sales Insights",
      description: "Designed interactive dashboards for tracking sales performance and trends.",
      technologies: ["Power BI", "DAX", "Data Modeling"],
      icon: <AnalyticsIcon />
    },
    {
      title: "Machine Learning Model with Weka",
      description: "Built classification and clustering models using Weka for customer segmentation.",
      technologies: ["Weka", "Decision Trees", "K-Means Clustering"],
      icon: <StorageIcon />
    },
    {
      title: "Automated PowerPoint Report Generation",
      description: "Developed a script to automate PowerPoint report generation from Excel data.",
      technologies: ["PowerPoint", "Python", "Automation"],
      icon: <PresentToAllIcon />
    }
  ];

  const keyFeatures = [
    {
      title: "Matplotlib - Data Visualization",
      description: "Generate high-quality plots, histograms, and scatter plots for data insights.",
      icon: <InsertChartIcon />
    },
    {
      title: "Power BI - Business Analytics",
      description: "Interactive dashboards, real-time data monitoring, and KPI tracking.",
      icon: <AnalyticsIcon />
    },
    {
      title: "Weka - Machine Learning",
      description: "Classification, clustering, and data preprocessing with GUI-based ML tools.",
      icon: <StorageIcon />
    },
    {
      title: "PowerPoint - Professional Presentations",
      description: "Automate report creation, data-driven presentations, and storytelling.",
      icon: <PresentToAllIcon />
    },
    {
      title: "Data Storytelling",
      description: "Combining analytics and presentation tools to communicate insights effectively.",
      icon: <TimelineIcon />
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
                <PieChartIcon color="primary" sx={{ fontSize: 60 }} />
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                Data Visualization & Business Intelligence
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Expertise in Matplotlib, Power BI, PowerPoint, and Weka for data-driven decision making.
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

export default VisualizationAndBI;
