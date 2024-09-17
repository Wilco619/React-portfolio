import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const useTypingEffect = (texts, typingSpeed = 150, deletingSpeed = 50, pauseTime = 100) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {               
    let timeout;

    const typeText = () => {
      const fullText = texts[currentTextIndex];
      setCurrentText((current) =>
        isDeleting ? fullText.substring(0, current.length - 1) : fullText.substring(0, current.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
        timeout = setTimeout(typeText, pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((current) => (current + 1) % texts.length);
      } else {
        timeout = setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    timeout = setTimeout(typeText, pauseTime);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return currentText;
};

const HeroSection = () => {
  const typedText = useTypingEffect(['Full Stack Web Developer', 'Data Analyst']);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 5,
        pb: 6,
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 0, sm: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              flex: 1,
              mt: { xs: 4, md: 0 },
              mr: { md: 4 },
              px: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
            >
              Hello, I'm a
            </Typography>
            <Typography
              variant="h3"
              color="primary"
              sx={{
                minHeight: '3em',
                mb: 2,
                '&::after': {
                  content: '""',
                  display: 'inline',
                  marginLeft: '2px',
                  height: '1em',
                  width: '1px',
                  backgroundColor: 'primary.main',
                  animation: 'blink 0.7s infinite',
                  verticalAlign: 'text-bottom',
                },
                '@keyframes blink': {
                  '50%': {
                    opacity: 0,
                  },
                },
              }}
            >
              {typedText}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 2 , textAlign: 'center'}}>
              Passionate about creating innovative solutions and analyzing complex data.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              pt: { xs: 0},
            }}
          >
            <Box
              component="img"
              sx={{
                height: 'auto',
                width: '100%',
                maxWidth: { xs: '100%', md: 400 },
                borderRadius: { xs: 0, md: 2 },
                boxShadow: 0,
                mt: { xs: 0, md: 'inherit' },
                
              }}
              alt="Developer"
              src="/src/assets/passport-.png"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;