import React from 'react';
import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  Paper,
  Chip,
  Divider
} from '@mui/material';
import { School } from '@mui/icons-material';

const Achievement = ({ icon: Icon, title, description, date }) => (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3, gap: 2 }}>
      <Paper
        elevation={2}
        sx={{
          p: 1.5,  // Increased padding
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          color: 'white',
          width: 48,  // Fixed width
          height: 48,  // Fixed height
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
      <Icon sx={{ width: 28, height: 28 }} />  
    </Paper>
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
        {description}
      </Typography>
      <Chip
        label={date}
        size="small"
        sx={{
          backgroundColor: 'primary.light',
          color: 'primary.contrastText'
        }}
      />
    </Box>
  </Box>
);

const Achievements = () => {
  const achievements = [
    {
      icon: School,
      title: "Bachelor's Degree in Computer Science",
      description: "Graduated with Second Class from Chuka University",
      date: "2024"
    },
    
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3" align="center"  sx={{pb: 6, pt: 0}} gutterBottom
      >
        Achievements
      </Typography>
      
      <Grid container spacing={4}>
        {/* Photo Section */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 3,
              backgroundColor: 'grey.50'
            }}
          >
            {/* Placeholder for graduation photo */}
            <Box
            sx={{
              width: '100%',
              paddingTop: '125%',
              position: 'relative',
              backgroundColor: 'grey.200',
              borderRadius: 2,
              overflow: 'hidden',
              mb: 2,
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                zIndex: 2,
                background: 'none',
                border: '3px double rgb(210, 37, 25)',
                animation: 'borderMove 20s linear infinite', // 10s for complete cycle (5s forward + 5s reverse)
                WebkitMask: `
                  linear-gradient(#fff 0 0) padding-box, 
                  linear-gradient(#fff 0 0)
                `,
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                padding: 2,
                borderRadius: 2,
              },
              '@keyframes borderMove': {
                '0%': {
                  clipPath: 'inset(0 100% 100% 0)',
                  opacity: 0
                },
                '20%': {
                  clipPath: 'inset(0 75% 75% 0)',
                  opacity: 1
                },
                '40%': {
                  clipPath: 'inset(0 0 0 0)',
                  opacity: 1
                },
                '50%': {
                  clipPath: 'inset(100% 0 0 100%)',
                  opacity: 0
                },
                // Reverse direction after 5 seconds
                '50.1%': {
                  clipPath: 'inset(100% 0 0 100%)',
                  opacity: 0
                },
                '70%': {
                  clipPath: 'inset(75% 0 0 75%)',
                  opacity: 1
                },
                '90%': {
                  clipPath: 'inset(0 0 0 0)',
                  opacity: 1
                },
                '100%': {
                  clipPath: 'inset(0 100% 100% 0)',
                  opacity: 0
                }
              }
            }}
          >
            <Box
              component="img"
              src={new URL('../assets/grad.jpg', import.meta.url).href}
              alt="Graduation Photo"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </Box>
            <Typography variant="h6" gutterBottom>
              Wilco Milcinovic 
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Class of 2024
            </Typography>
          </Card>
        </Grid>

        {/* Achievements Section */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              height: '100%',
              backgroundColor: 'background.paper'
            }}
          >
            {achievements.map((achievement, index) => (
              <React.Fragment key={index}>
                <Achievement {...achievement} />
                {index < achievements.length - 1 && (
                  <Divider sx={{ my: 3 }} />
                )}
              </React.Fragment>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Achievements;