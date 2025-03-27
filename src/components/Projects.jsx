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
  Slide,
  Link
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

// Import images
import hrManagementImage from '../assets/Screenshot4.png';
import microfinanceImage from '../assets/Screenshot5.png';
import libraryManagementImage from '../assets/Screenshot1.png';
import portfolioImage from '../assets/Screenshot2-.png';
import churchImage from '../assets/Screenshot3.png';
import ecommerceImage from '../assets/Screenshot6.png';

const projects = [
  {
    title: 'HR Management System',
    description: 'A robust HR management platform using Django framework, MySQL database, and Bootstrap5 for the UI.',
    technologies: 'Django, MySQL, Bootstrap5',
    details: 'The HR Management System allows easy employee management, payroll processing, leave tracking, and report generation. It is highly scalable and secure, making it ideal for small to large businesses.',
    imageUrl: hrManagementImage,
    repoLink: 'https://github.com/Wilco619/HR-Service-Application.git',
  },
  {
    title: 'Microfinance System',
    description: 'A microfinance platform with a React frontend, axios for API integration, and a Django REST framework backend.',
    technologies: 'React, Axios, Django REST Framework, Material UI',
    details: 'The Microfinance System streamlines loan applications, approvals, customer management, and financial tracking. The system integrates Material UI for an elegant user experience and React for a fast and dynamic interface.',
    imageUrl: microfinanceImage,
    repoLink: 'https://github.com/Wilco619/RestAPI_JWT_Authentication.git',
  },
  {
    title: 'Library Management System',
    description: 'A Python-based library management platform using the Django framework.',
    technologies: 'Python, Django',
    details: 'The Library Management System automates book borrowing, returns, and catalog management. With a secure backend and a user-friendly interface, this system improves library workflows and ensures data accuracy.',
    imageUrl: libraryManagementImage,
    repoLink: 'https://github.com/Wilco619/Library_management.git',
  },
  {
    title: 'Church Website',
    description: 'The Church Of Christ Website, using React.js and Material UI.',
    technologies: 'React.js, Material UI',
    details: 'This Church website is developed to help the church members notice events prior to the date, the church sermons are shared through this platform, church service is described to visitors and the church can be contacted via email and rerlevant links by new members seeking spiritual guidance. It has an admin site to help manage the website and embedded google map for direction.',
    imageUrl: churchImage,
    repoLink: 'https://github.com/Wilco619/Church-Web.git',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing projects, skills, and achievements using React.js and Material UI.',
    technologies: 'React.js, Material UI',
    details: 'This portfolio website was designed to demonstrate my web development skills, including proficiency in React.js and Material UI. It features smooth navigation, responsive design, and professional animations.',
    imageUrl: portfolioImage,
    repoLink: 'https://github.com/Wilco619/React-portfolio.git',
  },
  {
    title: 'E-Commerce Website',
    description: 'An e-commerce platform with a React frontend, Material UI for styling, and Django for backend services.',
    technologies: 'React, Material UI, Django, REST API, MySQL, JWT, Axios, Skeleton',
    details: 'The jemsa.co.ke E-Commerce Website is a full-stack platform that allows users to browse products, add items to the cart, and make secure payments. It integrates Django REST API for backend services, MySQL for database management, and React for a dynamic user interface.',
    imageUrl: ecommerceImage,
    webLink: 'https://jemsa.co.ke',
    repoLink: 'https://github.com/Wilco619/E-Commerce',
  },
];

const ProjectsPage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [enlargedImageOpen, setEnlargedImageOpen] = useState(false);
  const [enlargedImageUrl, setEnlargedImageUrl] = useState('');

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const handleImageClick = (imageUrl) => {
    setEnlargedImageUrl(imageUrl);
    setEnlargedImageOpen(true);
  };

  const handleEnlargedImageClose = () => {
    setEnlargedImageOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(127deg, #00224D 30%, #21CBF3 90%)',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" color="black" sx={{pb: 6, pt: 0}} gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.01)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  sx={{
                    height: 0,
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleImageClick(project.imageUrl)}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', px: 2, pb: 2 }}>
                  <Button size="small" color="primary" onClick={() => handleOpen(project)}>
                    Learn More
                  </Button>
                  {project.webLink && (
                    <Button 
                      size="small" 
                      color="primary" 
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                    >
                      Visit Site
                    </Button>
                  )}
                  <Button 
                    size="small" 
                    color="primary" 
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                  >
                    View Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="project-dialog-title"
        aria-describedby="project-dialog-description"
      >
        <DialogTitle id="project-dialog-title">{selectedProject?.title}</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <strong>Technologies:</strong> {selectedProject?.technologies}
          </Typography>
          <Typography gutterBottom>
            <strong>Repository:</strong>{' '}
            <Link 
              href={selectedProject?.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              GitHub Repository
            </Link>
          </Typography>
          <Typography id="project-dialog-description">
            {selectedProject?.details}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={enlargedImageOpen}
        onClose={handleEnlargedImageClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <img
            src={enlargedImageUrl}
            alt="Enlarged project"
            style={{ width: '100%', height: 'auto' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEnlargedImageClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProjectsPage;