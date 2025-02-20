import React, { useState, useMemo } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import HiroSection from './components/HiroSection';
import ResponsiveAppBar from './components/NavBar';
import ProjectsPage from './components/Projects';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import ScrollToTopButton from './constants/ScrollToTopButton';
import Achievements from './components/Achievments';
import PythonSkillsPage from './skills/PythonSkills';
import SkillsPage from './components/Skills';
import ReactSkillDetail from './skills/ReactSkills';
import HTMLCSSSkillDetail from './skills/Html5CssSkills';
import SQLSkillDetail from './skills/Sql';
import JavaScriptSkillDetail from './skills/Javascript';
import LinuxSkillDetail from './skills/Lunix';
import FrontendStylingDetail from './skills/Frontend';
import DjangoSkillDetail from './skills/Django';
import DataAnalysisSkillDetail from './skills/DataAnalysis';
import VisualizationAndBI from './skills/Visualize';
import NLPSkillDetail from './skills/NlpSkills';

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
        <Routes>
          <Route
            path="/React-portfolio"
            element={
              <Box component="main">
                <Box id="home">
                  <HiroSection />
                </Box>
                <Box id="about">
                  <AboutPage />
                </Box>
                <Box id="achievements">
                  <Achievements />
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
                <Footer />
                <ScrollToTopButton />
              </Box>
            }
          />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/python-skills" element={<PythonSkillsPage />} />
          <Route path="/react-skills" element={<ReactSkillDetail />} />
          <Route path="/html-css" element={<HTMLCSSSkillDetail />} />
          <Route path="/sql" element={<SQLSkillDetail />} />
          <Route path="/javascript" element={<JavaScriptSkillDetail />} />
          <Route path="/linux" element={<LinuxSkillDetail />} />
          <Route path="/frontend" element={<FrontendStylingDetail />} />
          <Route path="/django" element={<DjangoSkillDetail />} />
          <Route path="/data-analysis" element={<DataAnalysisSkillDetail />} />
          <Route path="/visualize" element={<VisualizationAndBI />} />
          <Route path="/nlp" element={<NLPSkillDetail />} />
          {/* Add other skill routes here */}
        </Routes>
      </ThemeProvider>
   
  );
}

export default App;