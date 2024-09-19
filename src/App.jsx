import React, { useState, useMemo } from 'react';
import './App.css';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import HiroSection from './components/HiroSection';
import ResponsiveAppBar from './components/NavBar';
import ProjectsPage from './components/Projects';
import SkillsPage from './components/Skills';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import ScrollToTopButton from './constants/ScrollToTopButton';

function App() {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar toggleDarkMode={colorMode.toggleColorMode} />
      <Box component="main">
        <Box id="home">
          <HiroSection />
        </Box>
        <Box id="about">
          <AboutPage />
        </Box>
        <Box id="skills">
          <SkillsPage />
        </Box>
        <Box id="projects">
          <ProjectsPage />
        </Box>
        <Box id="contact">
          <ContactPage />
        </Box>
      </Box>
      <Footer />
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;