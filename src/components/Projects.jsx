import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide
} from '@mui/material';
import { styled } from '@mui/system';


// Import local images
import hrManagementImage from '../assets/2_b.jpeg';
// import microfinanceImage from '../assets/images/microfinance.jpg';
// import libraryManagementImage from '../assets/images/library-management.jpg';
// import portfolioImage from '../assets/images/portfolio.jpg';

// Custom styled Card for each project
const ProjectCard = styled(Card)(({ theme }) => ({
  width: '100%', // Ensure card takes full width
  maxWidth: 345,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

// Slide animation
const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

// Projects array with descriptions and image URLs
const projects = [
  {
    title: 'HR Management System',
    description: 'A robust HR management platform using Django framework, MySQL database, and Bootstrap5 for the UI.',
    technologies: 'Django, MySQL, Bootstrap5',
    details: 'The HR Management System allows easy employee management, payroll processing, leave tracking, and report generation. It is highly scalable and secure, making it ideal for small to large businesses.',
    imageUrl: hrManagementImage,
  },
  {
    title: 'Microfinance System',
    description: 'A microfinance platform with a React frontend, axios for API integration, and a Django REST framework backend.',
    technologies: 'React, Axios, Django REST Framework, Material UI',
    details: 'The Microfinance System streamlines loan applications, approvals, customer management, and financial tracking. The system integrates Material UI for an elegant user experience and React for a fast and dynamic interface.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Microfinance+System',
  },
  {
    title: 'Library Management System',
    description: 'A Python-based library management platform using the Django framework.',
    technologies: 'Python, Django',
    details: 'The Library Management System automates book borrowing, returns, and catalog management. With a secure backend and a user-friendly interface, this system improves library workflows and ensures data accuracy.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Library+Management+System',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing projects, skills, and achievements using React.js and Material UI.',
    technologies: 'React.js, Material UI',
    details: 'This portfolio website was designed to demonstrate my web development skills, including proficiency in React.js and Material UI. It features smooth navigation, responsive design, and professional animations.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Portfolio+Website',
  },
];

// Main component
const ProjectsPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

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
        p: 2,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" color="white" gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Slide in direction="up" timeout={500 * (index + 1)}>
                <ProjectCard onClick={() => handleOpen(project)}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.imageUrl}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </ProjectCard>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Dialog for project details */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>{selectedProject?.title}</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6" gutterBottom>
            Technologies Used:
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {selectedProject?.technologies}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Project Details:
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {selectedProject?.details}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProjectsPage;
