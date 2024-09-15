import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
        textAlign="center"
      component="footer"
      sx={{
        backgroundColor: '#000',
        color: 'white',
        py: 3,
        px: 2,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Left Column - About */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Wilco Milcinovic
            </Typography>
            <Typography variant="body2">
              Data Analyst & Full Stack Web Developer, with a passion for building robust applications and delivering insights from complex datasets.
            </Typography>
          </Grid>

          {/* Middle Column - Contact */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              <IconButton color="inherit">
                <Phone />
              </IconButton>
              +254 718679186
            </Typography>
            <Typography variant="body2">
              <IconButton color="inherit">
                <Email />
              </IconButton>
              <Link href="mailto:wmilcinovic01@gmail.com" color="inherit">
                wmilcinovic01@gmail.com
              </Link>
            </Typography>
          </Grid>

          {/* Right Column - Social Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Box>
              <IconButton
                component="a"
                href="https://github.com/Wilco619"
                target="_blank"
                color="inherit"
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com/in/wilco-milcinovic"
                target="_blank"
                color="inherit"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="inherit">
            &copy; {currentYear} Wilco Milcinovic. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
