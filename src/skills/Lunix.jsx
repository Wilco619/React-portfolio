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
  Terminal as TerminalIcon,
  Cloud as CloudIcon,
  Build as BuildIcon,
  Security as SecurityIcon,
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

const LinuxSkillDetail = () => {
  const navigate = useNavigate();

  const technologies = [
    "Debian", "Ubuntu", "Linux Command Line", "SSH", "Bash Scripting", "Networking",
    "Package Management", "System Administration", "Server Setup", "Security Best Practices",
    "System Monitoring", "File Permissions", "Cron Jobs"
  ];

  const projects = [
    {
      title: "Linux Server Setup and Configuration",
      description: "Configured and optimized a Debian server for hosting websites, email, and database services.",
      technologies: ["Debian", "SSH", "Apache", "MySQL", "Nginx"],
      icon: <CloudIcon />
    },
    {
      title: "Automated Backup System with Cron Jobs",
      description: "Set up a cron job to automate regular backups of system files and databases in Ubuntu.",
      technologies: ["Ubuntu", "Bash Scripting", "Cron", "SSH"],
      icon: <TerminalIcon />
    },
    {
      title: "Secure SSH Setup",
      description: "Secured SSH access by disabling root login, configuring key-based authentication, and setting up a firewall.",
      technologies: ["Ubuntu", "SSH", "Firewall", "Security"],
      icon: <SecurityIcon />
    }
  ];

  const keyFeatures = [
    {
      title: "SSH (Secure Shell)",
      description: "Using SSH for secure remote login, file transfers, and remote server management.",
      icon: <SecurityIcon />
    },
    {
      title: "Package Management",
      description: "Efficiently installing, updating, and removing packages using `apt-get` and `dpkg` on Debian/Ubuntu.",
      icon: <BuildIcon />
    },
    {
      title: "System Administration",
      description: "Managing user accounts, permissions, file systems, and disk partitions on Linux systems.",
      icon: <TerminalIcon />
    },
    {
      title: "Bash Scripting",
      description: "Writing bash scripts to automate system administration tasks and other operations.",
      icon: <CodeIcon />
    },
    {
      title: "System Security & Hardening",
      description: "Implementing security practices such as updating packages, configuring firewalls, and setting secure file permissions.",
      icon: <SecurityIcon />
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
                <TerminalIcon color="primary" sx={{ fontSize: 60 }} />
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                Linux (Debian & Ubuntu) Administration
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Proficient in Linux system administration, focusing on Debian and Ubuntu distributions with SSH management, server setup, and security practices.
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

export default LinuxSkillDetail;
