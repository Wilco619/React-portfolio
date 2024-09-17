import './App.css'
import AboutPage from './components/About'
import ContactPage from './components/Contact'
import Footer from './components/Footer'
import HiroSection from './components/HiroSection'
import ResponsiveAppBar from './components/NavBar'
import ProjectsPage from './components/Projects'
import SkillsPage from './components/Skills'
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
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
    </ThemeProvider>
  )
}

export default App