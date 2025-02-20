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
  Storage as StorageIcon,
  Build as BuildIcon,
  DataUsage as DataUsageIcon,
//   Database as DatabaseIcon,
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

const SQLSkillDetail = () => {
  const navigate = useNavigate();

  const technologies = [
    "SQL", "MySQL", "PostgreSQL", "Database Design", "T-SQL", "PL/SQL", "Database Optimization",
    "Joins", "Subqueries", "Transactions", "Indexes", "Normalization", "Stored Procedures", "Triggers"
  ];

  const projects = [
    {
      title: "Customer Management System",
      description: "An inventory system for managing customer information, utilizing relational databases and SQL queries.",
      technologies: ["SQL", "MySQL", "PostgreSQL"],
      icon: <StorageIcon />
    },
    {
      title: "Sales Reporting Dashboard",
      description: "A dynamic reporting dashboard fetching real-time data from normalized databases using SQL queries.",
      technologies: ["SQL", "PostgreSQL", "Data Analysis"],
      icon: <DataUsageIcon />
    },
    {
      title: "Employee Database System",
      description: "An HR management system using SQL to manage employee records, including CRUD operations and advanced queries.",
      technologies: ["SQL", "MySQL", "Database Design"],
      icon: <DataUsageIcon />
    }
  ];

  const keyFeatures = [
    {
      title: "Database Normalization",
      description: "Ensuring minimal data redundancy and improving data integrity through database normalization techniques.",
      icon: <BuildIcon />,
      details: [
        {
          title: "1st Normal Form (1NF)",
          description: "In 1NF, the database must have atomic (indivisible) values and each record must be unique. It removes duplicate data, but it may still have some redundancy.",
          icon: <DataUsageIcon />
        },
        {
          title: "2nd Normal Form (2NF)",
          description: "In 2NF, the database must first satisfy 1NF, and additionally, all non-key attributes must be fully functionally dependent on the primary key. This eliminates partial dependencies.",
          icon: <DataUsageIcon />
        },
        {
          title: "3rd Normal Form (3NF)",
          description: "In 3NF, the database must first satisfy 2NF, and there should be no transitive dependencies (non-key attributes should not depend on other non-key attributes). This removes unnecessary dependencies.",
          icon: <DataUsageIcon />
        }
      ]
    },
    {
      title: "Joins & Subqueries",
      description: "Creating complex queries by joining tables and using subqueries for advanced data retrieval.",
      icon: <DataUsageIcon />
    },
    {
      title: "SQL Optimization",
      description: "Enhancing query performance by optimizing indexes, reducing complexity, and tuning queries.",
      icon: <DataUsageIcon />
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
                SQL Database Management
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Expertise in SQL database design, optimization, and management with a focus on relational database systems.
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
                {feature.details && (
                  <Box sx={{ ml: 4 }}>
                    {feature.details.map((detail, idx) => (
                      <Box key={idx} sx={{ mt: 2 }}>
                        <Typography variant="h6" fontWeight="500">
                          {detail.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {detail.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
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

export default SQLSkillDetail;
