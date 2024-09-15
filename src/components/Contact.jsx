import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  Link,
  Snackbar,
  Alert,
  IconButton
} from '@mui/material';
import { styled } from '@mui/system';
import emailjs from '@emailjs/browser';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Styled components
const ContactContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(4),
}));

const InfoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text?.secondary || '#000', // Fallback color
  marginBottom: theme.spacing(4),
}));

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_fujkmxh';
    const templateID = 'template_gusbw8o';
    const userID = '52rMlQjj5XbYPDLSK';

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setSnackbarMessage('Failed to send message. Please try again.');
        setSnackbarSeverity('error');
      });

    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #00224D 30%, #21CBF3 90%)',
        position: 'relative',
      }}
    >
      <ContactContainer maxWidth="md">
        <Typography variant="h3" align="center"  sx={{pb: 6, pt: 0}} gutterBottom>
          Contact Me
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <InfoPaper>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  <strong>Phone:</strong> +254 0718679186
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  <strong>Email:</strong> <Link href="mailto:wmilcinovic01@gmail.com">wmilcinovic01@gmail.com</Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <GitHubIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  <strong>GitHub:</strong> <Link href="https://github.com/Wilco619" target="_blank" rel="noopener">https://github.com/Wilco619</Link>
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LinkedInIcon sx={{ mr: 1 }} />
                <Typography variant="body1">
                  <strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/wilco-milcinovic" target="_blank" rel="noopener">linkedin.com/in/wilco-milcinovic</Link>
                </Typography>
              </Box>
            </InfoPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoPaper>
              <Typography variant="h6" gutterBottom>
                Send Me a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  size='small'
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  size='small'
                />
                <TextField
                  label="Message"
                  name="message"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  size='small'
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Send
                </Button>
              </form>
            </InfoPaper>
          </Grid>
        </Grid>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </ContactContainer>
    </Box>
  );
};

export default ContactPage;
