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
  Functions as FunctionsIcon,
  BarChart as BarChartIcon,
  TableChart as TableChartIcon,
  Storage as StorageIcon,
  Timeline as TimelineIcon,
  TrendingUp as TrendingUpIcon,
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

const DataAnalysisSkillDetail = () => {
  const navigate = useNavigate();

  const technologies = [
    "NumPy", "Pandas", "Excel", "Matplotlib", "Seaborn", "Power Query", "Pivot Tables", 
    "Data Cleaning", "Data Visualization", "Time Series Analysis", "Statistical Analysis"
  ];

  const projects = [
    {
      title: "Sales Data Analysis with Pandas",
      description: "Processed and analyzed large sales datasets using Pandas, NumPy, and Matplotlib.",
      technologies: ["Pandas", "NumPy", "Matplotlib", "Excel"],
      icon: <BarChartIcon />
    },
    {
      title: "Financial Forecasting with Excel & NumPy",
      description: "Developed forecasting models using Excel formulas, Power Query, and NumPy for trend analysis.",
      technologies: ["Excel", "NumPy", "Power Query", "Time Series Analysis"],
      icon: <TrendingUpIcon />
    },
    {
      title: "Data Cleaning Automation",
      description: "Automated data cleaning and transformation using Pandas scripts, reducing manual work by 80%.",
      technologies: ["Pandas", "Excel", "Power BI"],
      icon: <TableChartIcon />
    }
  ];

  const keyFeatures = [
    {
      title: "NumPy - High-Performance Computing",
      description: "Efficient numerical operations, multi-dimensional arrays, and linear algebra support.",
      icon: <FunctionsIcon />
    },
    {
      title: "Pandas - Data Manipulation",
      description: "Cleaning, transforming, and analyzing structured data with Pandas DataFrames and Series.",
      icon: <TableChartIcon />
    },
    {
      title: "Excel - Business Analytics",
      description: "Pivot tables, VLOOKUP, macros, and Power Query for advanced data processing.",
      icon: <BarChartIcon />
    },
    {
      title: "Data Visualization",
      description: "Creating charts, heatmaps, and interactive dashboards with Matplotlib, Seaborn, and Excel.",
      icon: <TimelineIcon />
    },
    {
      title: "Time Series Analysis",
      description: "Analyzing trends, forecasting, and seasonal patterns in time-series datasets.",
      icon: <TrendingUpIcon />
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
                <StorageIcon color="primary" sx={{ fontSize: 60 }} />
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                Data Analysis with NumPy, Pandas & Excel
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Advanced skills in data wrangling, statistical analysis, and visualization.
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

export default DataAnalysisSkillDetail;
